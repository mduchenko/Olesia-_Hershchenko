document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("services-form");
  const contactForm = document.getElementById("contact-form");
  const totalPriceEl = document.getElementById("total-price");
  const durationHoursEl = document.getElementById("duration-hours");
  const dateInput = document.getElementById("date");
  const dateErrorEl = document.getElementById("date-error");
  const orderButton = document.getElementById("order-button");
  const ordermodalPrice = document.getElementById("order-modalPrice");
  const cancelOrderBtn = document.getElementById("cancel-order");
  const confirmOrderBtn = document.getElementById("confirm-order");

  // Елементи модального вікна
  const modalPriceDateEl = document.getElementById("modalPrice-date");
  const modalPriceDurationEl = document.getElementById("modalPrice-duration");
  const modalPricePhotoshootEl = document.getElementById(
    "modalPrice-photoshoot"
  );
  const modalPriceStudioEl = document.getElementById("modalPrice-studio");
  const modalPriceExtrasEl = document.getElementById("modalPrice-extras");
  const modalPriceTotalPriceEl = document.getElementById(
    "modalPrice-total-price"
  );

  // Помилки форми контактів
  const nameErrorEl = document.getElementById("name-error");
  const phoneErrorEl = document.getElementById("phone-error");
  const emailErrorEl = document.getElementById("email-error");

  // Установка минимальной даты (сегодня)
  const today = new Date().toISOString().split("T")[0];
  dateInput.setAttribute("min", today);

  function calculateTotal() {
    let total = 0;
    let totalHours = 0;
    let photoshootHours = 0;
    let studioHours = 0;
    const extras = [];

    // Фотозйомка
    const photoshootToggle = form.querySelector('[name="photoshoot-toggle"]');
    const photoshootHoursInput = form.querySelector(
      '[name="photoshoot-hours"]'
    );

    if (photoshootToggle.checked) {
      photoshootHours = parseInt(photoshootHoursInput.value) || 1;
      total += 1500 * photoshootHours;
      totalHours = Math.max(totalHours, photoshootHours);
    }

    // Оренда студії
    const studioToggle = form.querySelector('[name="studio-toggle"]');
    const studioHoursInput = form.querySelector('[name="studio-hours"]');

    if (studioToggle.checked) {
      studioHours = parseInt(studioHoursInput.value) || 1;
      total += 1000 * studioHours;
      totalHours = Math.max(totalHours, studioHours);
    }

    // Додаткові послуги
    if (form.querySelector('[name="retouch"]').checked) {
      total += 150;
      extras.push("Ретуш фото");
    }
    if (form.querySelector('[name="fast-editing"]').checked) {
      total += 200;
      extras.push("Прискорена обробка");
    }
    if (form.querySelector('[name="certificate"]').checked) {
      total += 500;
      extras.push("Сертифікат");
    }

    // Форматирование суммы с разделителями
    totalPriceEl.textContent = total.toLocaleString("uk-UA") + " ₴";
    durationHoursEl.textContent = totalHours || 1;

    // Оновлення даних у модальному вікні
    updatemodalPriceData(photoshootHours, studioHours, extras);
  }

  function updatemodalPriceData(photoshootHours, studioHours, extras) {
    // Дата
    modalPriceDateEl.textContent = dateInput.value
      ? new Date(dateInput.value).toLocaleDateString("uk-UA")
      : "-";

    // Тривалість
    const hours = parseInt(durationHoursEl.textContent);
    modalPriceDurationEl.textContent =
      hours + (hours > 1 ? " години" : " година");

    // Фотозйомка
    const photoshootToggle = form.querySelector('[name="photoshoot-toggle"]');
    if (photoshootToggle.checked) {
      modalPricePhotoshootEl.textContent =
        photoshootHours +
        " год × 1500 грн = " +
        (photoshootHours * 1500).toLocaleString("uk-UA") +
        " грн";
    } else {
      modalPricePhotoshootEl.textContent = "Не обрано";
    }

    // Студія
    const studioToggle = form.querySelector('[name="studio-toggle"]');
    if (studioToggle.checked) {
      modalPriceStudioEl.textContent =
        studioHours +
        " год × 1000 грн = " +
        (studioHours * 1000).toLocaleString("uk-UA") +
        " грн";
    } else {
      modalPriceStudioEl.textContent = "Не обрано";
    }

    // Додаткові послуги
    if (extras.length > 0) {
      modalPriceExtrasEl.textContent = extras.join(", ");
    } else {
      modalPriceExtrasEl.textContent = "Немає";
    }

    // Загальна сума
    modalPriceTotalPriceEl.textContent = totalPriceEl.textContent;
  }

  function validateDate() {
    const selectedDate = new Date(dateInput.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!dateInput.value) {
      dateErrorEl.textContent = "Будь ласка, оберіть дату";
      dateErrorEl.classList.remove("hidden");
      return false;
    } else if (selectedDate < today) {
      dateErrorEl.textContent = "Дата не може бути в минулому";
      dateErrorEl.classList.remove("hidden");
      return false;
    } else {
      dateErrorEl.classList.add("hidden");
      return true;
    }
  }

  function validateContactForm() {
    let isValid = true;

    // Валідація імені
    const name = contactForm.querySelector("#name").value.trim();
    if (name.length < 2) {
      nameErrorEl.textContent = "Будь ласка, введіть ваше ім'я";
      isValid = false;
    } else {
      nameErrorEl.textContent = "";
    }

    // Валідація телефону
    const phone = contactForm.querySelector("#phone").value.trim();
    const phoneRegex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (!phoneRegex.test(phone)) {
      phoneErrorEl.textContent = "Будь ласка, введіть коректний номер телефону";
      isValid = false;
    } else {
      phoneErrorEl.textContent = "";
    }

    // Валідація email
    const email = contactForm.querySelector("#email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailErrorEl.textContent = "Будь ласка, введіть коректну email адресу";
      isValid = false;
    } else {
      emailErrorEl.textContent = "";
    }

    return isValid;
  }

  // Обробники подій для годин
  form.querySelectorAll('input[type="number"]').forEach((input) => {
    input.addEventListener("input", () => {
      if (parseInt(input.value) < 1 || isNaN(parseInt(input.value))) {
        input.value = 1;
      }
      calculateTotal();
    });
  });

  // Обробники подій для перемикачів
  form.querySelectorAll(".toggle-switch-price input").forEach((toggle) => {
    toggle.addEventListener("change", calculateTotal);
  });

  // Валідація дати при зміні
  dateInput.addEventListener("change", validateDate);

  // Відкриття модального вікна при натисканні кнопки "Замовити"
  orderButton.addEventListener("click", function (e) {
    e.preventDefault();

    if (!validateDate()) {
      return;
    }

    calculateTotal();
    ordermodalPrice.classList.add("active");
  });

  // Закриття модального вікна
  cancelOrderBtn.addEventListener("click", function () {
    ordermodalPrice.classList.remove("active");
  });

  // Підтвердження замовлення
  confirmOrderBtn.addEventListener("click", function () {
    if (validateContactForm()) {
      alert(
        "Дякуємо за ваше замовлення! Ми зв'яжемося з вами для підтвердження."
      );
      ordermodalPrice.classList.remove("active");
    }
  });

  // Ініціалізація при завантаженні
  calculateTotal();

  // Збереження стану форми при перезавантаженні
  window.addEventListener("beforeunload", function () {
    const formData = new FormData(form);
    localStorage.setItem(
      "photoshootFormData",
      JSON.stringify(Object.fromEntries(formData))
    );
  });

  // Відновлення стану форми
  const savedFormData = localStorage.getItem("photoshootFormData");
  if (savedFormData) {
    const data = JSON.parse(savedFormData);
    Object.keys(data).forEach((key) => {
      const input = form.querySelector(`[name="${key}"]`);
      if (input) {
        if (input.type === "checkbox") {
          input.checked = data[key] === "on";
        } else {
          input.value = data[key];
        }
      }
    });
    calculateTotal();
  }

  // Центрування модального вікна з урахуванням клавіатури (Chrome, Safari)
  function centerModal() {
    const modal = document.querySelector(".modalPrice");
    const overlay = document.getElementById("order-modalPrice");

    if (!modal || !overlay) return;

    // Отримати розміри вікна
    let viewportHeight = window.innerHeight;

    if (window.visualViewport) {
      viewportHeight = window.visualViewport.height;
    }

    // Відцентрувати модалку
    modal.style.marginTop = `${Math.max(
      (viewportHeight - modal.offsetHeight) / 2,
      20
    )}px`;
  }

  // Переобчислювати при ресайзі або фокусі
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", centerModal);
  }
  window.addEventListener("resize", centerModal);
  document.addEventListener("focusin", centerModal);

  // Також викликати при відкритті
  orderButton.addEventListener("click", function (e) {
    e.preventDefault();

    if (!validateDate()) return;

    calculateTotal();
    ordermodalPrice.classList.add("active");
    document.body.classList.add("modal-open"); // <-- додаємо клас
    centerModal();
  });

  // При закритті прибираємо клас
  cancelOrderBtn.addEventListener("click", function () {
    ordermodalPrice.classList.remove("active");
    document.body.classList.remove("modal-open");
  });
  // Закриття при кліку на фон
  ordermodalPrice.addEventListener("click", function (e) {
    if (e.target === ordermodalPrice) {
      closeModal();
    }
  });

  // Закриття по Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && ordermodalPrice.classList.contains("active")) {
      closeModal();
    }
  });

  // Загальна функція закриття модального
  function closeModal() {
    ordermodalPrice.classList.remove("active");
    document.body.classList.remove("modal-open");
  }
});

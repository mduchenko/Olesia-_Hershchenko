document.addEventListener("DOMContentLoaded", function () {
  // Елементи модальних вікон
  const bookingModal = document.getElementById("bookingModal");
  const calculatorModal = document.getElementById("calculatorModal");
  const calculateBtn = document.getElementById("calculatePriceBtn");
  const applyPriceBtn = document.getElementById("applyPriceBtn");
  const priceResultContainer = document.getElementById("priceResultContainer");
  const priceResult = document.getElementById("priceResult");
  const modalBookingTotalPrice = document.getElementById(
    "modalBookingTotalPrice"
  );

  console.log(calculateBtn);
  // Відкриття калькулятора
  calculateBtn.addEventListener("click", function () {
    calculatorModal.style.display = "flex";
    bookingModal.style.display = "flex";
  });

  applyPriceBtn.addEventListener("click", function () {
    const total = calculateTotalPrice();
    priceResult.textContent = total;
    priceResultContainer.classList.remove("hidden");

    calculatorModal.style.display = "none";

    // ✨ Виправлення:
    bookingModal.style.display = "flex";

    document.body.classList.add("menu-open");
    // Прокрутка до результату
    priceResultContainer.scrollIntoView({ behavior: "smooth" });
  });

  // Закриття модальних вікон
  document.querySelectorAll(".close").forEach((btn) => {
    btn.addEventListener("click", function () {
      bookingModal.style.display = "none";
      calculatorModal.style.display = "none";
      document.body.classList.remove("menu-open-one");
    });
  });

  // Розрахунок загальної вартості
  function calculateTotalPrice() {
    let total = 0;

    // Фотозйомка
    if (document.getElementById("photoshoot-toggle").checked) {
      const hours =
        parseInt(document.getElementById("photoshoot-hours").value) || 0;
      total += hours * 1500;
    }

    // Оренда студії
    if (document.getElementById("studio-toggle").checked) {
      const hours =
        parseInt(document.getElementById("studio-hours").value) || 0;
      total += hours * 1000;
    }

    // Додаткові послуги
    if (document.getElementById("retouch").checked) total += 150;
    if (document.getElementById("fast-editing").checked) total += 200;
    if (document.getElementById("certificate").checked) total += 500;

    modalBookingTotalPrice.textContent = total;
    return total;
  }

  // Відстеження змін для перерахунку
  document.querySelectorAll("#calculatorModal input").forEach((input) => {
    input.addEventListener("change", calculateTotalPrice);
    input.addEventListener("input", calculateTotalPrice);
  });

  // Відправка форми
  document
    .getElementById("bookingForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      // Тут код для відправки форми
      alert("Дякуємо за заявку! Ми зв'яжемося з вами найближчим часом.");
      bookingModal.style.display = "none";

      // Очищення форми
      this.reset();
      priceResultContainer.classList.add("hidden");
    });

  // Ініціалізація калькулятора
  calculateTotalPrice();

  // Закриття при кліку на фон
  // window.addEventListener("click", function (e) {
  //   if (e.target === bookingModal) bookingModal.style.display = "none";
  //   if (e.target === calculatorModal) calculatorModal.style.display = "none";
  //   document.body.classList.remove("menu-open-one");
  // });

  // Закриття при кліку на фон
  bookingModal.addEventListener("click", function (e) {
    if (e.target === bookingModal) {
      bookingModal.style.display = "none";
      document.body.classList.remove("menu-open");
    }
  });

  calculatorModal.addEventListener("click", function (e) {
    if (e.target === calculatorModal) {
      calculatorModal.style.display = "none";
      document.body.classList.remove("menu-open");
    }
  });
});

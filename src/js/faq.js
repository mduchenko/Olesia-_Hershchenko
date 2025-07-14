document.addEventListener("DOMContentLoaded", function () {
  // Аккордеон для вопросов
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const isActive = question.classList.contains("active");

      // Закрываем все ответы
      document.querySelectorAll(".faq-answer").forEach((item) => {
        item.classList.remove("active");
      });

      // Убираем активный класс у всех вопросов
      document.querySelectorAll(".faq-question").forEach((item) => {
        item.classList.remove("active");
      });

      // Если ответ не был активен, открываем его
      if (!isActive) {
        question.classList.add("active");
        answer.classList.add("active");
      }
    });
  });

  // Обработка формы
  const faqForm = document.getElementById("faqForm");

  faqForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const question = document.getElementById("question").value;

    // Здесь можно добавить отправку данных на сервер
    console.log("Форма отправлена:", { name, phone, email, question });

    // Очистка формы
    faqForm.reset();

    // Сообщение об успешной отправке
    alert("Дякуємо за ваше питання! Ми зв'яжемося з вами найближчим часом.");
  });
});

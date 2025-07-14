document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".certificate-slider");
  const slides = document.querySelectorAll(".certificate-slide");
  const dots = document.querySelectorAll(".slider-dot");
  let currentSlide = 0;

  // Ініціалізація слайдера
  function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;

    // Оновлення активних точок
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    currentSlide = index;
  }

  // Обробники кліків для точок
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
    });
  });

  // Автоматичне перемикання слайдів
  setInterval(() => {
    const nextSlide = (currentSlide + 1) % slides.length;
    showSlide(nextSlide);
  }, 5000);
});

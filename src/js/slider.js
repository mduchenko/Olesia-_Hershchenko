const images = [
  "https://picsum.photos/id/1018/900/500",
  "https://picsum.photos/id/1015/900/500",
  "https://picsum.photos/id/1019/900/500",
];

let current = 0;
const currentBg = document.getElementById("current-bg");
const nextBg = document.getElementById("next-bg");
const slider = document.getElementById("slider");

function setBackground(index) {
  nextBg.style.backgroundImage = `url('${images[index]}')`;
  nextBg.style.opacity = 1;

  setTimeout(() => {
    currentBg.style.backgroundImage = nextBg.style.backgroundImage;
    nextBg.style.opacity = 0;
  }, 1200);
}

function nextSlide() {
  current = (current + 1) % images.length;
  setBackground(current);
}

function prevSlide() {
  current = (current - 1 + images.length) % images.length;
  setBackground(current);
}

document.getElementById("next").addEventListener("click", () => {
  nextSlide();
  resetAutoplay();
});

document.getElementById("prev").addEventListener("click", () => {
  prevSlide();
  resetAutoplay();
});

// Початкове зображення
currentBg.style.backgroundImage = `url('${images[current]}')`;

// Автозапуск слайдера
let autoplayInterval = setInterval(nextSlide, 4000);

function resetAutoplay() {
  clearInterval(autoplayInterval);
  autoplayInterval = setInterval(nextSlide, 4000);
}

// Підтримка свайпів
let startX = 0;
let endX = 0;
const threshold = 50; // мінімальна відстань свайпу в px

slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchmove", (e) => {
  endX = e.touches[0].clientX;
});

slider.addEventListener("touchend", (e) => {
  let diff = endX - startX;
  if (Math.abs(diff) > threshold) {
    if (diff > 0) {
      prevSlide();
    } else {
      nextSlide();
    }
    resetAutoplay();
  }
  startX = 0;
  endX = 0;
});

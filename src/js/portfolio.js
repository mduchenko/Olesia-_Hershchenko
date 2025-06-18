const images1 = document.querySelectorAll(".portfolio__img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox__img");
const closeBtn = document.querySelector(".lightbox__close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
console.log(nextBtn);

let currentIndex = 0;

function showImage(index) {
  if (index < 0) index = images1.length - 1;
  if (index >= images1.length) index = 0;
  currentIndex = index;
  lightboxImg.src = images1[currentIndex].src;
  lightbox.classList.remove("hidden");
}

images1.forEach((img, index) => {
  img.addEventListener("click", () => {
    showImage(index);
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});

prevBtn.addEventListener("click", () => {
  showImage(currentIndex - 1);
});

nextBtn.addEventListener("click", () => {
  showImage(currentIndex + 1);
});

// ESC закриває
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") lightbox.classList.add("hidden");
});

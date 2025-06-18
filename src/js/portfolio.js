document.addEventListener("DOMContentLoaded", () => {
  // в
  const images1 = document.querySelectorAll(".portfolio__img1");
  const lightbox1 = document.querySelector(".lightbox");
  const lightboxImg1 = document.querySelector(".lightbox__img");
  const closeBtn1 = document.querySelector(".lightbox__close");
  const prevBtn1 = document.querySelector(".prev1");
  const nextBtn1 = document.querySelector(".next1");
  console.log(nextBtn1);

  let currentIndex1 = 0;

  function showImage(index) {
    if (index < 0) index = images1.length - 1;
    if (index >= images1.length) index = 0;
    currentIndex1 = index;
    lightboxImg1.src = images1[currentIndex1].src;
    lightbox1.classList.remove("hidden");
  }

  images1.forEach((img, index) => {
    img.addEventListener("click", () => {
      showImage(index);
    });
  });

  closeBtn1.addEventListener("click", () => {
    lightbox1.classList.add("hidden");
  });

  prevBtn1.addEventListener("click", () => {
    showImage(currentIndex1 - 1);
  });

  nextBtn1.addEventListener("click", () => {
    showImage(currentIndex1 + 1);
  });

  // ESC закриває
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") lightbox1.classList.add("hidden");
  });
});

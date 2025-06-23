document.addEventListener("DOMContentLoaded", () => {
  // в
  const images1 = document.querySelectorAll(".portfolio__img1");
  const lightbox1 = document.querySelector(".lightbox");
  const lightboxImg1 = document.querySelector(".lightbox__img");
  const closeBtn1 = document.querySelector(".lightbox__close");
  const prevBtn1 = document.querySelector(".prev1");
  const nextBtn1 = document.querySelector(".next1");

  let currentIndex1 = 0;

  // збережи позицію перед відкриттям меню й віднови після закриття
  let scrollY1 = 0;
  function openMenu() {
    scrollY1 = window.scrollY || window.pageYOffset;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY1}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.classList.add("menu-open");
    console.log(document.body);
  }

  function closeMenu() {
    document.body.classList.remove("menu-open");
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    window.scrollTo(0, scrollY1);
  }

  function showImage(index) {
    if (index < 0) index = images1.length - 1;
    if (index >= images1.length) index = 0;
    currentIndex1 = index;
    lightboxImg1.src = images1[currentIndex1].src;
    lightbox1.classList.remove("hidden");
    document.body.classList.add("menu-open");
    openMenu();
  }

  images1.forEach((img, index) => {
    img.addEventListener("click", () => {
      showImage(index);
    });
  });

  closeBtn1.addEventListener("click", () => {
    lightbox1.classList.add("hidden");
    closeMenu();
  });

  prevBtn1.addEventListener("click", (e) => {
    e.stopPropagation();
    showImage(currentIndex1 - 1);
  });

  nextBtn1.addEventListener("click", (e) => {
    e.stopPropagation();
    showImage(currentIndex1 + 1);
  });
  lightbox1.addEventListener("click", () => {
    lightbox1.classList.add("hidden");
    closeMenu();
  });
  // ESC закриває
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox1.classList.add("hidden");
      closeMenu();
    }
  });
});

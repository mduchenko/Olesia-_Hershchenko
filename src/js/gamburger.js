const menuBtn = document.getElementById("menu-btn");
const navMenu = document.querySelector(".header__bottom");
let headerMenu = document.querySelector(".header");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
  headerMenu.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

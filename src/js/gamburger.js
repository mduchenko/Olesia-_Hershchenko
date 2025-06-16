const menuBtn = document.getElementById("menu-btn");
let navLink = document.querySelector(".nav-link");
const navMenu = document.querySelector(".header__bottom");
let headerMenu = document.querySelector(".header");
const socialMenu = document.querySelector(".social__menu");
const socialBtn = document.querySelector(".social__rest");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
  headerMenu.classList.toggle("active");

  document.body.classList.toggle("menu-open");
});

socialBtn.addEventListener("click", () => {
  socialMenu.classList.toggle("active");
});

navLink.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
  headerMenu.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

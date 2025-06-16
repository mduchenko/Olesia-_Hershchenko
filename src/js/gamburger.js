const menuBtn = document.getElementById("menu-btn");
let navLink = document.querySelector(".nav-link");
const navMenu = document.querySelector(".header__bottom");
let headerMenu = document.querySelector(".header");
const socialMenu = document.querySelector(".social__menu");
const socialOpen = document.querySelectorAll(".social__rest");
const socialClose = document.querySelector(".social__close");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
  headerMenu.classList.toggle("active");

  document.body.classList.toggle("menu-open");
});

function openSocial(el) {
  el.forEach((i) => {
    i.addEventListener("click", () => {
      socialMenu.classList.toggle("active");
    });
  });
  //   el.addEventListener("click", () => {
  //     socialMenu.classList.toggle("active");
  //   });
}
openSocial(socialOpen);

function closeSocial(el) {
  el.addEventListener("click", () => {
    socialMenu.classList.toggle("active");
  });
}
closeSocial(socialClose);

navLink.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
  headerMenu.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

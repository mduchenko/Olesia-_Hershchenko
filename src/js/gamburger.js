const menuBtn = document.getElementById("menu-btn");
let navLink = document.querySelectorAll(".nav-link");
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
  console.log(document.body);
  socialMenu.classList.remove("active");
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

function clickNavLink(el) {
  el.forEach((i) => {
    i.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navMenu.classList.remove("active");
      headerMenu.classList.remove("active");
      document.body.classList.remove("menu-open");
      console.log(document.body);
      headerMenu.classList.toggle("nav-down");
      headerMenu.classList.remove("nav-up");
    });
  });
}

clickNavLink(navLink);

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.querySelector(".header__bottom");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
});

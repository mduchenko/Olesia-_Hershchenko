const menuBtn = document.getElementById("menu-btn");
const navMenu = document.querySelector(".header__bottom");
console.log(navMenu);
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
});

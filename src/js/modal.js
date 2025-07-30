const modal = document.getElementById("bookingModal");
const openBtnModal = document.querySelector(".button.header__button");
const openBtnModalHero = document.querySelector(".button__hero");
console.log(openBtnModal);
const closeBtnModal = document.querySelector(".modalBooking-content .close");
const priceSection = document.getElementById("priceSection");
const sessionSelect = document.querySelector("select[name='sessionType']");
const priceResult = document.getElementById("priceResult");

modal.addEventListener("click", (e) => {
  e.stopPropagation();
});
openBtnModal.addEventListener("click", (e) => {
  e.stopPropagation();
  modal.style.display = "flex";
  document.body.classList.add("menu-open");
});

openBtnModalHero.addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();
  modal.style.display = "flex";
  document.body.classList.add("menu-open");
});

closeBtnModal.onclick = () => {
  modal.style.display = "none";
  document.body.classList.remove("menu-open");
};
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

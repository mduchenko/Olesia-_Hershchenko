const chatButton = document.getElementById("chatButton");
const messengersList = document.getElementById("messengersList");
const chatWidget = document.getElementById("chatWidget");

let lastScrollPosition = 0;
let scrollTimeout;
let isScrolling = false;

function handleScroll() {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;
  if (messengersList.classList.contains("show")) return;

  if (currentScroll > lastScrollPosition) {
    chatWidget.classList.add("hidden");
    isScrolling = true;
  } else if (currentScroll < lastScrollPosition) {
    chatWidget.classList.remove("hidden");
    isScrolling = true;
  }

  lastScrollPosition = currentScroll;

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    if (isScrolling && !messengersList.classList.contains("show")) {
      chatWidget.classList.remove("hidden");
      chatWidget.offsetHeight;
      isScrolling = false;
    }
  }, 650);
}

window.addEventListener("scroll", handleScroll);

chatButton.addEventListener("pointerdown", function (e) {
  e.preventDefault();
  const isOpen = messengersList.classList.contains("show");

  chatButton.querySelector("span").classList.toggle("icon-gift", isOpen);
  chatButton.querySelector("span").classList.toggle("icon-cancel", !isOpen);

  messengersList.classList.toggle("show");

  if (!isOpen) {
    chatButton.style.animation = "none";
    chatButton.offsetHeight; // примусове перерахування стилів
  } else {
    chatButton.style.animation = "pulse 2s infinite";
    chatButton.offsetHeight; // примусове перерахування стилів
  }
});

function openMessenger(messenger) {
  let url = "";
  switch (messenger) {
    case "viber":
      url = "viber://chat?number=+380XXXXXXXXX";
      break;
    case "telegram":
      url = "https://t.me/your_telegram_username";
      break;
    case "whatsapp":
      url = "https://wa.me/380XXXXXXXXX";
      break;
    case "email":
      url = "mailto:your.email@example.com";
      break;
  }

  window.open(url, "_blank");
  messengersList.classList.remove("show");
  chatButton.querySelector("span").classList.remove("icon-cancel");
  chatButton.querySelector("span").classList.add("icon-gift");
}

document.addEventListener("click", function (event) {
  if (!event.target.closest(".chat-widget")) {
    messengersList.classList.remove("show");
    chatButton.querySelector("span").classList.remove("icon-cancel");
    chatButton.querySelector("span").classList.add("icon-gift");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const widget = document.getElementById("chatWidget");

  // Додаємо початковий клас по центру
  widget.classList.add("center-start");

  // Через мить прибираємо його — активується transition
  setTimeout(() => {
    widget.classList.remove("center-start");
  }, 8000); // затримка, щоб браузер застосував клас
});

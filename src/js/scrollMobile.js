// Змінні для відстеження прокрутки
let didScroll; // Чи була прокрутка
let lastScrollTop = 0; // Остання позиція прокрутки
const delta = 5; // Мінімальна зміна прокрутки для реакції
const navbarHeight = document.querySelector(".header").offsetHeight; // Висота шапки

// Функція, яка перевіряє, чи користувач прокрутив сторінку
function hasScrolled() {
  // Поточна позиція прокрутки (для різних браузерів)
  const currentScrollTop =
    window.pageYOffset || document.documentElement.scrollTop;

  // Якщо зміна прокрутки менша за `delta` — ігноруємо
  if (Math.abs(lastScrollTop - currentScrollTop) <= delta) return;

  // Отримуємо розміри вікна та документа
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // Для десктопу (ширина > 991px)
  if (windowWidth > 360) {
    // Якщо користувач прокручує вниз і перейшов за висоту шапки
    if (currentScrollTop > lastScrollTop && currentScrollTop > navbarHeight) {
      document.querySelector(".header").classList.remove("nav-down");
      document.querySelector(".header").classList.add("nav-up"); // Ховаємо шапку
    }
    // Якщо користувач прокручує вгору і не дійшов до кінця сторінки
    else if (currentScrollTop + windowHeight < documentHeight) {
      document.querySelector(".header").classList.remove("nav-up");
      document.querySelector(".header").classList.add("nav-down"); // Показуємо шапку
    }
  }
  // Для мобільних пристроїв (ширина ≤ 991px)
  //   else {
  //     // Аналогічна логіка, але для мобільної версії (якщо є `.header-pseudo`)
  //     if (currentScrollTop > lastScrollTop && currentScrollTop > navbarHeight) {
  //       document.querySelector(".header-pseudo").classList.remove("nav-down");
  //       document.querySelector(".header-pseudo").classList.add("nav-up");
  //     } else if (currentScrollTop + windowHeight < documentHeight) {
  //       document.querySelector(".header-pseudo").classList.remove("nav-up");
  //       document.querySelector(".header-pseudo").classList.add("nav-down");
  //     }
  //   }

  // Оновлюємо останню позицію прокрутки
  lastScrollTop = currentScrollTop;
}

// Відстежуємо подію прокрутки
window.addEventListener("scroll", function () {
  didScroll = true;
});

// Перевіряємо кожні 250 мс, чи була прокрутка
setInterval(function () {
  if (didScroll) {
    hasScrolled(); // Викликаємо обробник
    didScroll = false; // Скидаємо прапорець
  }
}, 250);

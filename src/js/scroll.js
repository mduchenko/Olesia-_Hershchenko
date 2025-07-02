// const headerBottom = document.querySelector(".header__bottom");
// // const headerMain = document.querySelector(".header");

// // let currentHeader = "";

// // if (window.innerWidth <= 768) {
// //   headerMain.classList.add("nav-down"); // Щоб одразу був видимим
// //   currentHeader = isMobileScroll(headerMain);
// // } else {
// //   currentHeader = isHeaderScroll(headerBottom);
// // }

// function isHeaderScroll(header) {
//   let lastScrollTop = 0;
//   const delta = window.innerWidth < 768 ? 2 : 5;

//   const navbarHeight = header ? header.offsetHeight * 4 : 0;

//   // Відстеження скролу
//   function hasScrolled() {
//     if (!header) return;
//     console.log(header);
//     // Не ховаємо хедер, якщо активне мобільне меню
//     if (document.body.classList.contains("menu-open")) return;

//     const scrollTop = window.scrollY || document.documentElement.scrollTop;

//     if (Math.abs(lastScrollTop - scrollTop) <= delta) return;

//     const scrollingDown = scrollTop > lastScrollTop && scrollTop > navbarHeight;
//     const notAtBottom =
//       scrollTop + window.innerHeight < document.documentElement.scrollHeight;

//     if (scrollingDown) {
//       // Скрол вниз — ховати
//       console.log(header);
//       header.classList.remove("nav-down1");
//       header.classList.add("nav-up1");
//     } else if (notAtBottom) {
//       // Скрол вгору — показати
//       header.classList.remove("nav-up1");
//       header.classList.add("nav-down1");
//     }

//     lastScrollTop = scrollTop;
//   }

//   // requestAnimationFrame throttling
//   let ticking = false;
//   window.addEventListener("scroll", () => {
//     if (!ticking) {
//       window.requestAnimationFrame(() => {
//         hasScrolled();
//         ticking = false;
//       });
//       ticking = true;
//     }
//   });
// }
// if (windowWidth <= 768) {
//   isHeaderScroll(headerBottom);
// }

// // function isMobileScroll(header) {
// //   let lastScrollTop = 0;
// //   let ticking = false;
// //   const delta = 1;
// //   const fixAfter = 300;

// //   function onScroll() {
// //     const currentScroll =
// //       window.pageYOffset || document.documentElement.scrollTop;

// //     // 1. Фіксація хедера
// //     if (currentScroll > fixAfter) {
// //       header.classList.add("fixed");
// //     } else {
// //       header.classList.remove("fixed");
// //     }

// //     // 2. Ігнорувати дрібні рухи
// //     if (Math.abs(currentScroll - lastScrollTop) <= delta) return;

// //     // 3. Логіка появи / зникнення
// //     if (currentScroll > lastScrollTop) {
// //       // Скрол вниз — ховати
// //       header.classList.remove("nav-down");
// //       header.classList.add("nav-up");
// //     } else {
// //       // Скрол вгору — показати
// //       header.classList.remove("nav-up");
// //       header.classList.add("nav-down");
// //     }

// //     lastScrollTop = currentScroll;
// //   }

// //   window.addEventListener("scroll", () => {
// //     if (!ticking) {
// //       window.requestAnimationFrame(() => {
// //         onScroll();
// //         ticking = false;
// //       });
// //       ticking = true;
// //     }
// //   });
// // }

const headerBottom = document.querySelector(".header__bottom");

// Функція для обробки скролу шапки (тільки для десктопу)
function handleDesktopHeaderScroll(header) {
  if (!header) return; // Якщо шапка не знайдена - виходимо

  let lastScrollTop = 0;
  const delta = 5; // Чутливість скролу для десктопу
  const navbarHeight = header.offsetHeight * 4; // Висота шапки

  function checkScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Ігноруємо незначні зміни скролу
    if (Math.abs(lastScrollTop - scrollTop) <= delta) return;

    const isScrollingDown =
      scrollTop > lastScrollTop && scrollTop > navbarHeight;
    const isNotAtBottom =
      scrollTop + window.innerHeight < document.documentElement.scrollHeight;

    if (isScrollingDown) {
      header.classList.remove("nav-down1");
      header.classList.add("nav-up1"); // Ховаємо шапку
    } else if (isNotAtBottom) {
      header.classList.remove("nav-up1");
      header.classList.add("nav-down1"); // Показуємо шапку
    }

    lastScrollTop = scrollTop;
  }

  // Оптимізація події скролу
  let isTicking = false;
  const scrollHandler = () => {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        checkScroll();
        isTicking = false;
      });
      isTicking = true;
    }
  };

  // Активація лише для десктопу
  if (window.innerWidth > 768) {
    window.addEventListener("scroll", scrollHandler);

    // Відключаємо при зміні розміру на мобільну версію
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 768) {
        window.removeEventListener("scroll", scrollHandler);
        // Повертаємо шапку у видимий стан
        header.classList.remove("nav-up1");
        header.classList.add("nav-down1");
      }
    });
  }
}

// Ініціалізація тільки для десктопу
handleDesktopHeaderScroll(headerBottom);

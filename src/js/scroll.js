const headerBottom = document.querySelector(".header__bottom");
const headerMain = document.querySelector(".header");
console.log(headerMain);
function isHeaderScroll(header) {
  let lastScrollTop = 0;
  const delta = window.innerWidth < 768 ? 2 : 5;

  const navbarHeight = header ? header.offsetHeight * 4 : 0;

  // Відстеження скролу
  function hasScrolled() {
    if (!header) return;

    // Не ховаємо хедер, якщо активне мобільне меню
    if (document.body.classList.contains("menu-open")) return;

    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (Math.abs(lastScrollTop - scrollTop) <= delta) return;

    const scrollingDown = scrollTop > lastScrollTop && scrollTop > navbarHeight;
    const notAtBottom =
      scrollTop + window.innerHeight < document.documentElement.scrollHeight;

    if (scrollingDown) {
      // Скрол вниз — ховати
      header.classList.remove("nav-down1");
      header.classList.add("nav-up1");
      // header.classList.remove("nav-down");
      // header.classList.add("nav-up");
    } else if (notAtBottom) {
      // header.classList.remove("nav-up");
      // header.classList.add("nav-down");

      // Скрол вгору — показати
      header.classList.remove("nav-up1");
      header.classList.add("nav-down1");
    }

    lastScrollTop = scrollTop;
  }

  // requestAnimationFrame throttling
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        hasScrolled();
        ticking = false;
      });
      ticking = true;
    }
  });
}

// function isMobileScroll(header) {
//   let lastScrollTop = 0;
//   const delta = 5;
//   window.addEventListener("scroll", () => {
//     const currentScroll =
//       window.pageYOffset || document.documentElement.scrollTop;

//     if (Math.abs(currentScroll - lastScrollTop) <= delta) return;

//     if (currentScroll > lastScrollTop) {
//       // Скрол вниз — ховати
//       header.classList.remove("nav-down");
//       header.classList.remove("nav-up");
//     } else {
//       // Скрол вгору — показати
//       header.classList.add("nav-up");
//       header.classList.remove("nav-down");
//     }

//     lastScrollTop = currentScroll;
//   });
// }

// headerMain.classList.add("nav-down");

// function isMobileScroll(header) {
//   let lastScrollTop = 0;
//   const delta = 5;

//   window.addEventListener("scroll", () => {
//     const currentScroll =
//       window.pageYOffset || document.documentElement.scrollTop;

//     if (Math.abs(currentScroll - lastScrollTop) <= delta) return;

//     if (currentScroll > lastScrollTop) {
//       // Скрол вниз — ховати хедер
//       header.classList.remove("nav-down");
//       header.classList.add("nav-up");
//     } else {
//       // Скрол вгору — показати хедер
//       header.classList.remove("nav-up");
//       header.classList.add("nav-down");
//     }

//     lastScrollTop = currentScroll;
//   });
// }
// let currentHeader = "";

// if (window.innerWidth <= 768) {
//   headerMain.classList.add("nav-down"); // Щоб одразу був видимим
//   currentHeader = isMobileScroll(headerMain);
// } else {
//   currentHeader = isHeaderScroll(headerBottom);
// }

const isMobile = window.innerWidth <= 768;
headerMain.classList.add("nav-down");
isMobile ? isMobileScroll(headerMain) : isHeaderScroll(headerMain);

// function isMobileScroll(header) {
//   let lastScrollTop = 0;
//   const delta = 100;
//   const fixAfter = 500; // Після скількох px фіксуємо хедер

//   window.addEventListener("scroll", () => {
//     const currentScroll =
//       window.pageYOffset || document.documentElement.scrollTop;

//     // Додаємо/знімаємо fixed
//     if (currentScroll > fixAfter) {
//       header.classList.add("fixed");
//     } else {
//       header.classList.remove("fixed");
//     }

//     // 2. Ігноруємо дрібні рухи
//     if (Math.abs(currentScroll - lastScrollTop) <= delta) return;

//     if (currentScroll > lastScrollTop) {
//       // Скрол вниз — ховати
//       header.classList.remove("nav-down");
//       header.classList.add("nav-up");
//     } else {
//       // Скрол вгору — показати
//       header.classList.remove("nav-up");
//       header.classList.add("nav-down");
//     }

//     lastScrollTop = currentScroll;
//   });
// }

// const header = document.querySelector(".header");
// let lastScrollTop = 0;
// const delta = 5;
// const fixAfter = 100;

// function onScroll() {
//   const currentScroll =
//     window.pageYOffset || document.documentElement.scrollTop;

//   // Додати або зняти клас fixed
//   if (currentScroll > fixAfter) {
//     header.classList.add("fixed");
//   } else {
//     header.classList.remove("fixed");
//   }

//   // Сховати/показати при прокрутці
//   if (Math.abs(currentScroll - lastScrollTop) <= delta) return;

//   if (currentScroll > lastScrollTop) {
//     // Скрол вниз
//     header.classList.remove("nav-down");
//     header.classList.add("nav-up");
//   } else {
//     // Скрол вгору
//     header.classList.remove("nav-up");
//     header.classList.add("nav-down");
//   }

//   lastScrollTop = currentScroll;
// }

// // Ініціалізація
// header.classList.add("nav-down"); // Початково видимий
// window.addEventListener("scroll", onScroll);

function isMobileScroll(header) {
  let lastScrollTop = 0;
  let ticking = false;
  const delta = 1;
  const fixAfter = 300;

  function onScroll() {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    // 1. Фіксація хедера
    if (currentScroll > fixAfter) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }

    // 2. Ігнорувати дрібні рухи
    if (Math.abs(currentScroll - lastScrollTop) <= delta) return;

    // 3. Логіка появи / зникнення
    if (currentScroll > lastScrollTop) {
      // Скрол вниз — ховати
      header.classList.remove("nav-down");
      header.classList.add("nav-up");
    } else {
      // Скрол вгору — показати
      header.classList.remove("nav-up");
      header.classList.add("nav-down");
    }

    lastScrollTop = currentScroll;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        onScroll();
        ticking = false;
      });
      ticking = true;
    }
  });
}

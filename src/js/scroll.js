const headerBottom = document.querySelector(".header__bottom");
const headerMain = document.querySelector(".header");
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
      header.classList.remove("nav-down");
      header.classList.add("nav-up");
    } else if (notAtBottom) {
      header.classList.remove("nav-up");
      header.classList.add("nav-down");
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
const currentHeader = window.innerWidth <= 768 ? headerMain : headerBottom;
if (currentHeader) {
  isHeaderScroll(currentHeader);
}

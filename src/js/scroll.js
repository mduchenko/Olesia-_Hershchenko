let lastScrollTop = 0;
const delta = 5;
const header = document.querySelector(".header__bottom");
// const headerMain = document.querySelector(".hero");
const pseudoHeader = document.querySelector(".header-pseudo");
const navbarHeight = header ? header.offsetHeight * 4 : 0;

function hasScrolled() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const windowWidth = window.innerWidth;

  if (Math.abs(lastScrollTop - scrollTop) <= delta) return;

  const scrollingDown = scrollTop > lastScrollTop && scrollTop > navbarHeight;
  const notAtBottom =
    scrollTop + window.innerHeight < document.documentElement.scrollHeight;

  if (windowWidth > 991) {
    if (!header) return;

    if (scrollingDown) {
      header.classList.remove("nav-down");
      header.classList.add("nav-up");
    } else if (notAtBottom) {
      header.classList.remove("nav-up");
      header.classList.add("nav-down");
    }
  } else {
    if (!pseudoHeader) return;

    if (scrollingDown) {
      pseudoHeader.classList.remove("nav-down");
      pseudoHeader.classList.add("nav-up");
    } else if (notAtBottom) {
      pseudoHeader.classList.remove("nav-up");
      pseudoHeader.classList.add("nav-down");
    }
  }

  lastScrollTop = scrollTop;
}

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

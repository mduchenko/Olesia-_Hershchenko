document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  let navLink = document.querySelectorAll(".nav-link");
  const navMenu = document.querySelector(".header__bottom");
  let headerMenu = document.querySelector(".header");
  const socialMenu = document.querySelector(".social__menu");
  const socialOpen = document.querySelectorAll(".social__rest");
  const socialClose = document.querySelector(".social__close");

  if (!menuBtn || !navMenu || !headerMenu || !socialMenu) return;

  function updateBodyScrollState() {
    const isMainMenuOpen = navMenu.classList.contains("active");
    const isSocialOpen = socialMenu.classList.contains("active");

    if (isMainMenuOpen || isSocialOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
    headerMenu.classList.toggle("active");
    socialMenu.classList.remove("active");
    updateBodyScrollState();
  });

  function openSocial(el) {
    el.forEach((i) => {
      i.addEventListener("click", (e) => {
        e.stopPropagation();
        socialMenu.classList.toggle("active");
        updateBodyScrollState();
      });
    });
    //   el.addEventListener("click", () => {
    //     socialMenu.classList.toggle("active");
    //   });
  }
  openSocial(socialOpen);

  function closeSocial(el) {
    el.addEventListener("click", () => {
      socialMenu.classList.remove("active");
      updateBodyScrollState();
    });
  }
  closeSocial(socialClose);
  // поза меню
  document.addEventListener("click", (e) => {
    if (!socialMenu.contains(e.target) && !e.target.closest(".social__rest")) {
      socialMenu.classList.remove("active");
      updateBodyScrollState();
    }
  });

  function clickNavLink(el) {
    el.forEach((i) => {
      i.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navMenu.classList.remove("active");
        headerMenu.classList.remove("active");
        headerMenu.classList.remove("nav-down", "nav-down", "nav-up");
        updateBodyScrollState();
      });
    });
  }

  clickNavLink(navLink);
});

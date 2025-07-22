document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  let navLink = document.querySelectorAll(".nav-link");
  const navMenu = document.querySelector(".header__bottom");
  let headerMenu = document.querySelector(".header");
  const socialMenu = document.querySelector(".social__menu");
  const socialOpen = document.querySelectorAll(".social__rest");
  const socialClose = document.querySelector(".social__close");

  if (!menuBtn || !navMenu || !headerMenu || !socialMenu) return;

  // збережи позицію перед відкриттям меню й віднови після закриття
  let scrollY = 0;

  function openMenu() {
    scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.classList.add("menu-open");
  }
  // function openMenu() {
  //   scrollY = window.scrollY;
  //   document.body.dataset.scrollY = scrollY;
  //   document.body.style.position = "fixed";
  //   document.body.style.top = `-${scrollY}px`;
  //   document.body.classList.add("menu-open");
  // }

  // function closeMenu() {
  //   document.body.classList.remove("menu-open");
  //   document.body.style.position = "";
  //   document.body.style.top = "";
  //   window.scrollTo(0, scrollY);
  // }
  function closeMenu() {
    document.body.classList.remove("menu-open");
    document.body.style.position = "";
    document.body.style.top = "";
    headerMenu.style.height = "";

    if (typeof scrollY !== "undefined" && scrollY !== null) {
      window.scrollTo(0, scrollY);
    }
  }

  // function updateBodyScrollState() {
  //   const isMainMenuOpen = navMenu.classList.contains("active");
  //   const isSocialOpen = socialMenu.classList.contains("active");

  //   if (isMainMenuOpen || isSocialOpen) {
  //     headerMenu.style.height = "100%";
  //     openMenu();
  //   } else if (document.body.classList.contains("menu-open")) {
  //     closeMenu();
  //   }
  // }

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
    headerMenu.classList.toggle("active");
    socialMenu.classList.remove("active");

    const navItemsList = navMenu.querySelector(".nav-items");

    if (navMenu.classList.contains("active")) {
      setTimeout(() => {
        navItemsList.classList.add("animate");
      }, 100); // невелика пауза, щоб .active застосувався
    } else {
      navItemsList.classList.remove("animate");
    }

    // updateBodyScrollState();
  });

  function openSocial(el) {
    console.log(el);
    el.forEach((i) => {
      i.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        socialMenu.classList.toggle("active");
        document.querySelector(".social__overlay").classList.toggle("active");
        // updateBodyScrollState();
      });
    });
  }
  openSocial(socialOpen);

  function closeSocial(el) {
    el.addEventListener("click", () => {
      socialMenu.classList.remove("active");
      document.querySelector(".social__overlay").classList.remove("active");
      // updateBodyScrollState();
    });
  }
  closeSocial(socialClose);
  // поза меню
  document.addEventListener("click", (e) => {
    if (!socialMenu.contains(e.target) && !e.target.closest(".social__rest")) {
      socialMenu.classList.remove("active");
      document.querySelector(".social__overlay").classList.remove("active");
      // updateBodyScrollState();
    }
  });

  function clickNavLink(el) {
    el.forEach((i) => {
      i.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navMenu.classList.remove("active");
        headerMenu.classList.remove("active");
        headerMenu.classList.remove("nav-down", "nav-up");

        const navItemsList = navMenu.querySelector(".nav-items");
        navItemsList.classList.remove("animate");

        // updateBodyScrollState();
      });
    });
  }

  clickNavLink(navLink);
});

function showPreloader(callback) {
  const top = document.querySelector(".preloader-top");
  const bottom = document.querySelector(".preloader-bottom");
  const bar = document.querySelector(".preloader-bar");
  const barTwo = document.querySelector(".preloader-bar-two");
  const preloader = document.getElementById("preloader");

  // Reset styles
  top.style.transform = "translateY(0)";
  bottom.style.transform = "translateY(0)";
  preloader.style.display = "flex";
  bar.style.animation = "none";
  barTwo.style.animation = "none";
  void bar.offsetWidth;
  void barTwo.offsetWidth; // trigger reflow
  bar.style.animation = "flashLine 1s forwards ease-in-out";
  barTwo.style.animation = "flashLine 1s forwards ease-in-out";

  if (window.innerWidth <= 768) {
    bar.style.animation = "flashLineMobile 1s forwards ease-in-out";
    barTwo.style.animation = "flashLineMobile 1s forwards ease-in-out";
  } else if (window.innerWidth <= 1240) {
    bar.style.animation = "flashLineLaptop 1s forwards ease-in-out";
    barTwo.style.animation = "flashLineLaptop 1s forwards ease-in-out";
  } else {
    bar.style.animation = "flashLine 1s forwards ease-in-out";
    barTwo.style.animation = "flashLine 1s forwards ease-in-out";
  }

  document.body.style.overflow = "hidden";

  setTimeout(() => {
    top.style.transform = "translateY(-100%)";
    bottom.style.transform = "translateY(100%)";

    setTimeout(() => {
      preloader.style.display = "none";
      document.body.style.overflow = "auto";
      if (typeof callback === "function") callback();
    }, 1000);
  }, 1200); // Після завершення анімації світла
}

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    // e.preventDefault();
    const target = link.getAttribute("href").substring(1);

    showPreloader();
  });
});

window.addEventListener("load", () => {
  showPreloader();
});

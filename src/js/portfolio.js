document.addEventListener("DOMContentLoaded", function () {
  // Дані для галерей (можна замінити на реальні фото)
  const galleries = {
    gallery1: [
      {
        src: "./img/фото1.webp",
        alt: "Студійний портрет 1",
      },
      {
        src: "./img/фото2.webp",
        alt: "Студійний портрет 2",
      },
      {
        src: "https://source.unsplash.com/random/800x600/?portrait,studio,3",
        alt: "Студійний портрет 3",
      },
    ],
    gallery2: [
      {
        src: "https://source.unsplash.com/random/800x600/?fashion,studio,1",
        alt: "Фешн зйомка 1",
      },
      {
        src: "https://source.unsplash.com/random/800x600/?fashion,studio,2",
        alt: "Фешн зйомка 2",
      },
      {
        src: "https://source.unsplash.com/random/800x600/?fashion,studio,3",
        alt: "Фешн зйомка 3",
      },
    ],
    gallery3: [
      {
        src: "https://source.unsplash.com/random/800x600/?street,urban,1",
        alt: "Міський пейзаж 1",
      },
      {
        src: "https://source.unsplash.com/random/800x600/?street,urban,2",
        alt: "Міський пейзаж 2",
      },
      {
        src: "https://source.unsplash.com/random/800x600/?street,urban,3",
        alt: "Міський пейзаж 3",
      },
    ],
    gallery4: [
      {
        src: "https://source.unsplash.com/random/800x600/?street,portrait,1",
        alt: "Вуличний портрет 1",
      },
      {
        src: "https://source.unsplash.com/random/800x600/?street,portrait,2",
        alt: "Вуличний портрет 2",
      },
      {
        src: "https://source.unsplash.com/random/800x600/?street,portrait,3",
        alt: "Вуличний портрет 3",
      },
    ],
    gallery5: [
      {
        src: "https://source.unsplash.com/random/800x600/?family,park,1",
        alt: "Сім'я в парку 1",
      },
      {
        src: "https://source.unsplash.com/random/800x600/?family,park,2",
        alt: "Сім'я в парку 2",
      },
      {
        src: "https://source.unsplash.com/random/800x600/?family,park,3",
        alt: "Сім'я в парку 3",
      },
    ],
    gallery6: [
      {
        src: "https://source.unsplash.com/random/800x600/?family,home,1",
        alt: "Домашня фотосесія 1",
      },
      {
        src: "https://source.unsplash.com/random/800x600/?family,home,2",
        alt: "Домашня фотосесія 2",
      },
      {
        src: "https://source.unsplash.com/random/800x600/?family,home,3",
        alt: "Домашня фотосесія 3",
      },
    ],
    gallery7: [
      {
        src: "https://source.unsplash.com/random/800x600/?couple,beach,1",
        alt: "Love Story на пляжі 1",
      },
      {
        src: "https://source.unsplash.com/random/800x600/?couple,beach,2",
        alt: "Love Story на пляжі 2",
      },
      {
        src: "https://source.unsplash.com/random/800x600/?couple,beach,3",
        alt: "Love Story на пляжі 3",
      },
    ],
    gallery8: [
      {
        src: "https://source.unsplash.com/random/800x600/?couple,forest,1",
        alt: "Love Story в лісі 1",
      },
      {
        src: "https://source.unsplash.com/random/800x600/?couple,forest,2",
        alt: "Love Story в лісі 2",
      },
      {
        src: "https://source.unsplash.com/random/800x600/?couple,forest,3",
        alt: "Love Story в лісі 3",
      },
    ],
    gallery9: [
      {
        src: "https://source.unsplash.com/random/800x600/?wedding,1",
        alt: "Весільна церемонія 1",
      },
      {
        src: "https://source.unsplash.com/random/800x600/?wedding,2",
        alt: "Весільна церемонія 2",
      },
      {
        src: "https://source.unsplash.com/random/800x600/?wedding,3",
        alt: "Весільна церемонія 3",
      },
    ],
    gallery10: [
      {
        src: "https://source.unsplash.com/random/800x600/?concert,1",
        alt: "Концерт 1",
      },
      {
        src: "https://source.unsplash.com/random/800x600/?concert,2",
        alt: "Концерт 2",
      },
      {
        src: "https://source.unsplash.com/random/800x600/?concert,3",
        alt: "Концерт 3",
      },
    ],
  };

  // Фільтрація по табам
  const tabBtns = document.querySelectorAll(".tab-btn");
  const portfolioCards = document.querySelectorAll(".portfolio-card");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Видаляємо активний клас з усіх кнопок
      tabBtns.forEach((b) => b.classList.remove("active"));
      // Додаємо активний клас до поточної кнопки
      this.classList.add("active");

      const category = this.getAttribute("data-category");

      // Фільтруємо картки
      portfolioCards.forEach((card) => {
        if (
          category === "all" ||
          card.getAttribute("data-category") === category
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Відкриття галереї
  const modal = document.getElementById("galleryModal");
  // const currentSlide = document.getElementById("currentSlide");
  // const thumbnailsContainer = document.getElementById(
  //   "thumbnailsContainer"
  // );
  // let currentGallery = [];
  // let currentIndex = 0;

  portfolioCards.forEach((card) => {
    card.addEventListener("click", function () {
      // const galleryId = this.getAttribute("data-gallery");
      // currentGallery = galleries[galleryId];
      // currentIndex = 0;

      // Очищаємо мініатюри
      // thumbnailsContainer.innerHTML = "";

      // Відображаємо перше зображення
      // showSlide(currentIndex);

      // Додаємо мініатюри
      // currentGallery.forEach((img, index) => {
      //   const thumbnail = document.createElement("div");
      //   thumbnail.className = "thumbnail";
      //   if (index === 0) thumbnail.classList.add("active");

      //   const thumbnailImg = document.createElement("img");
      //   thumbnailImg.src = img.src;
      //   thumbnailImg.alt = img.alt;

      //   thumbnail.appendChild(thumbnailImg);
      //   thumbnailsContainer.appendChild(thumbnail);

      // Обробник кліку на мініатюру
      //   thumbnail.addEventListener("click", () => {
      //     showSlide(index);
      //   });
      // });

      // Відкриваємо модальне вікно
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    });
  });

  // Функція для відображення слайда
  // function showSlide(index) {
  //   currentIndex = index;
  //   const slide = currentGallery[index];

  //   currentSlide.src = slide.src;
  //   currentSlide.alt = slide.alt;

  // Оновлюємо активну мініатюру
  //   const thumbnails = document.querySelectorAll(".thumbnail");
  //   thumbnails.forEach((thumb, i) => {
  //     if (i === index) {
  //       thumb.classList.add("active");
  //     } else {
  //       thumb.classList.remove("active");
  //     }
  //   });
  // }

  // Кнопки навігації
  // document.querySelector(".prev").addEventListener("click", () => {
  //   currentIndex =
  //     (currentIndex - 1 + currentGallery.length) %
  //     currentGallery.length;
  //   showSlide(currentIndex);
  // });
  // console.log(document.querySelector(".next-portfolio"));
  // document
  //   .querySelector(".next-portfolio")
  //   .addEventListener("click", () => {
  //     currentIndex = (currentIndex + 1) % currentGallery.length;
  //     showSlide(currentIndex);
  //   });

  // Закриття модального вікна
  document.querySelector(".close-btn").addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  // Закриття при кліку поза зображенням
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  // Навігація клавішами
  document.addEventListener("keydown", (e) => {
    if (modal.style.display === "block") {
      if (e.key === "ArrowLeft") {
        currentIndex =
          (currentIndex - 1 + currentGallery.length) % currentGallery.length;
        showSlide(currentIndex);
      } else if (e.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % currentGallery.length;
        showSlide(currentIndex);
      } else if (e.key === "Escape") {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    }
  });
});

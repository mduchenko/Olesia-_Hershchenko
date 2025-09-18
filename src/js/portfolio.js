document.addEventListener("DOMContentLoaded", function () {
  const MAX_INITIAL_CARDS = 8;

  // Дані для галерей (можна замінити на реальні фото)
  const galleries = {
    gallery1: [
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758189974/studio_yllia__18_q0xevw.webp",
        alt: "julia_couple",
      },
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758189973/studio_yllia__16_qgpo9j.webp",
        alt: "julia_couple",
      },
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758189970/studio_yllia__15_tboz60.webp",
        alt: "julia_couple",
      },
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758189969/studio_yllia__17_xe1foj.webp",
        alt: "julia_couple",
      },
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758189966/studio_yllia__12_sam3b4.webp",
        alt: "julia_couple",
      },
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758189966/studio_yllia__12_sam3b4.webp",
        alt: "julia_couple",
      },
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758189967/studio_yllia__14_qjhlwb.webp",
        alt: "julia_couple",
      },
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758189967/studio_yllia__13_hp4odt.webp",
        alt: "julia_couple",
      },
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758189965/studio_yllia__11_hz8zf9.webp",
        alt: "julia_couple",
      },
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758189964/studio_yllia__6_dpq9hx.webp",
        alt: "julia_couple",
      },
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758189964/studio_yllia__9_xdkqao.webp",
        alt: "julia_couple",
      },
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758189964/studio_yllia__10_wrizsg.webp",
        alt: "julia_couple",
      },
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758189963/studio_yllia__8_yw3sau.webp",
        alt: "julia_couple",
      },
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758189962/studio_yllia__7_x6myzz.webp",
        alt: "julia_couple",
      },
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758189962/studio_yllia__1_ikg7ut.webp",
        alt: "julia_couple",
      },
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758189962/studio_yllia__5_zo4z8c.webp",
        alt: "julia_couple",
      },
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758189961/studio_yllia__4_mb3buh.webp",
        alt: "julia_couple",
      },
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758189960/studio_yllia__3_g07rmg.webp",
        alt: "julia_couple",
      },
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758189960/studio_yllia__2_sj0bjm.webp",
        alt: "julia_couple",
      },
    ],
    gallery2: [
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758103225/love_story__1_ets1j5.webp",
        alt: "Фешн зйомка 1",
      },
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758103225/love_story__3_xqmrl6.webp",
        alt: "Фешн зйомка 2",
      },
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758103225/love_story__4_nuaan3.webp",
        alt: "Фешн зйомка 3",
      },
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758103225/love_story__2_r1muin.webp",
        alt: "Фешн зйомка 3",
      },
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758103225/love_story__1_ets1j5.webp",
        alt: "Фешн зйомка 1",
      },
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758103225/love_story__3_xqmrl6.webp",
        alt: "Фешн зйомка 2",
      },
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758103225/love_story__4_nuaan3.webp",
        alt: "Фешн зйомка 3",
      },
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758103225/love_story__2_r1muin.webp",
        alt: "Фешн зйомка 3",
      },
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758103225/love_story__1_ets1j5.webp",
        alt: "Фешн зйомка 1",
      },
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758103225/love_story__3_xqmrl6.webp",
        alt: "Фешн зйомка 2",
      },
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758103225/love_story__4_nuaan3.webp",
        alt: "Фешн зйомка 3",
      },
      {
        src: "https://res.cloudinary.com/dsvnlnaq9/image/upload/v1758110353/love_story__5_rfhaqz.webp",
        alt: "Фешн зйомка 3",
      },
    ],
    gallery3: [
      {
        src: "./img/street/streat_park_natalka(1).webp",
        alt: "Міський пейзаж 1",
      },
      {
        src: "./img/street/streat_park_natalka(2).webp",
        alt: "Міський пейзаж 1",
      },
      {
        src: "./img/street/streat_park_natalka(3).webp",
        alt: "Міський пейзаж 1",
      },
      {
        src: "./img/street/streat_park_natalka(4).webp",
        alt: "Міський пейзаж 1",
      },
      {
        src: "./img/street/streat_park_natalka(5).webp",
        alt: "Міський пейзаж 1",
      },
      {
        src: "./img/street/streat_park_natalka(6).webp",
        alt: "Міський пейзаж 1",
      },
      {
        src: "./img/street/streat_park_natalka(7).webp",
        alt: "Міський пейзаж 1",
      },
      {
        src: "./img/street/streat_park_natalka(8).webp",
        alt: "Міський пейзаж 1",
      },
      {
        src: "./img/street/streat_park_natalka(9).webp",
        alt: "Міський пейзаж 1",
      },
      {
        src: "./img/street/streat_park_natalka(10).webp",
        alt: "Міський пейзаж 1",
      },
    ],
    gallery4: [
      { src: "./img/anna/anna(1).webp", alt: "Студійний портрет 1" },
      { src: "./img/anna/anna(2).webp", alt: "Студійний портрет 2" },
      { src: "./img/anna/anna(3).webp", alt: "Студійний портрет 3" },
      { src: "./img/anna/anna(4).webp", alt: "Студійний портрет 4" },
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
  const loadMoreBtn = document.querySelector(".load-more-btn");

  // Приховати зайві картки при завантаженні
  hideExtraCards();

  function hideExtraCards() {
    let visibleCount = 0;
    portfolioCards.forEach((card, index) => {
      if (
        card.style.display !== "none" &&
        !card.classList.contains("hidden-card")
      ) {
        visibleCount++;
        if (visibleCount > MAX_INITIAL_CARDS) {
          card.classList.add("hidden-card");
        }
      }
    });

    // Показати/приховати кнопку "Більше робіт"
    updateLoadMoreButton();
  }

  function showAllCards() {
    document.querySelectorAll(".portfolio-card.hidden-card").forEach((card) => {
      card.classList.remove("hidden-card");
    });
    loadMoreBtn.style.display = "none";
  }

  function updateLoadMoreButton() {
    const hiddenCards = document.querySelectorAll(
      ".portfolio-card.hidden-card"
    ).length;
    loadMoreBtn.style.display = hiddenCards > 0 ? "inline-block" : "none";
  }

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

      // Приховати зайві картки після фільтрації
      hideExtraCards();
    });
  });

  // Обробник кнопки "Більше робіт"
  loadMoreBtn.addEventListener("click", showAllCards);

  // Відкриття галереї
  const modal = document.getElementById("galleryModal");
  const thumbnailsContainer = document.getElementById("lightgallery");

  document.querySelector(".close-btn").addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  portfolioCards.forEach((card) => {
    card.addEventListener("click", function () {
      const galleryId = this.getAttribute("data-gallery");
      const currentGallery = galleries[galleryId];

      if (!currentGallery) return;

      thumbnailsContainer.innerHTML = "";

      currentGallery.forEach((img) => {
        const link = document.createElement("a");
        link.href = img.src;
        link.setAttribute("data-sub-html", `<h4>${img.alt}</h4>`);

        const image = document.createElement("img");
        image.src = img.src;
        image.alt = img.alt;

        link.appendChild(image);
        thumbnailsContainer.appendChild(link);
      });

      // Destroy previous instance
      if (thumbnailsContainer.lg) {
        thumbnailsContainer.lg.destroy();
      }

      // Init lightGallery
      lightGallery(thumbnailsContainer, {
        plugins: [lgZoom, lgThumbnail, lgFullscreen, lgAutoplay],
        speed: 500,
        zoom: true,
        thumbnail: true,
        fullscreen: true,
        autoplay: false,
        download: false,
        mode: "lg-fade",
        controls: true,
        selector: "a",
      });

      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    });
  });
});

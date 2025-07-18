// Функція для показу детальної сторінки
function showServiceDetail(serviceId) {
  document.querySelectorAll(".service-detail").forEach((el) => {
    el.classList.remove("active");
  });
  document.getElementById(serviceId).classList.add("active");
  window.scrollTo(0, 0);

  // Ініціалізація галереї
  lightGallery(document.getElementById(serviceId + "-gallery"), {
    selector: ".gallery-item",
    plugins: [lgZoom, lgThumbnail, lgFullscreen, lgAutoplay],
    download: false,
    counter: false,
    speed: 500,
    zoom: true,
    thumbnail: true,
    fullscreen: true,
    autoplay: false,
    download: false,
    controls: true,
  });
}

// Функція для приховання детальних сторінок
function hideServiceDetails() {
  document.querySelectorAll(".service-detail").forEach((el) => {
    el.classList.remove("active");
  });
}

// Функція для генерації вартості
function calculatePrice(serviceType) {}

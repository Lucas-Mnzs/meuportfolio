var swiper = new Swiper(".cards-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: { slidesPerView: 2 }, // Em tablets, 2 cards por vez
    1024: { slidesPerView: 3 }, // Em telas maiores, 3 cards por vez
  },
});

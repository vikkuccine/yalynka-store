const swiper = new Swiper('.blog__items', {
    navigation: {
        nextEl: ".title-header__right-arrow",
        prevEl: ".title-header__left-arrow",
    },
          slidesPerView: 3,
      spaceBetween: 32,
    loop: false,
});
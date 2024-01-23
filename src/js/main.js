const swiperBlog = new Swiper('.blog__items', {
    navigation: {
        nextEl: ".blog__right-arrow",
        prevEl: ".blog__left-arrow",
    },
    slidesPerView: 3,
    spaceBetween: 32,
    loop: false,
});

const swiperHits = new Swiper('.hits__items', {
    navigation: {
        nextEl: ".hits__right-arrow",
        prevEl: ".hits__left-arrow",
    },
    slidesPerView: 4,
    spaceBetween: 32,
    loop: false,
});

const swiperImg = new Swiper('.card__photo', {
    navigation: {
        nextEl: ".card__next-btn",
        prevEl: ".card__prev-btn",
    },
    loop: false,
    pagination: {
        el: ".card__pagination",
    },
});


const heartBlock = document.querySelectorAll(".card__icon-img")

heartBlock.forEach(element => {
    element.addEventListener('click', (item) => {
        const itemTarget = item.target
        const imgHeart = itemTarget.getAttribute('src')
        
        if (imgHeart === './images/heart-1.svg') {
            itemTarget.setAttribute("src", "./images/heart-2.svg")
        } else {
            itemTarget.setAttribute("src", "./images/heart-1.svg")
        }
    })
});



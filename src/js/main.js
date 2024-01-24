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
    simulateTouch: true, 
    touchStartPreventDefault: false,
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


const swiperDiscount = new Swiper('.discount__items', {
    navigation: {
        nextEl: ".discount__right-arrow",
        prevEl: ".discount__left-arrow",
    },
    slidesPerView: 4,
    spaceBetween: 32,
    loop: false,
    simulateTouch: true, 
    touchStartPreventDefault: false,
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

document.addEventListener('DOMContentLoaded', function () {
    const element = document.querySelector('.js-choice');
    const choices = new Choices(element, {
        searchEnabled: false,
        choices: [
            {
                value: '3',
                label: '3 м',
                selected: false,
            },
            {
                value: '5',
                label: '5 м',
                selected: false,
            },
            {
                value: '6',
                label: '6 м',
                selected: false,
            },
        ]
    })
})


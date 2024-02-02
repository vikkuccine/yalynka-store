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
        nextEl: ".arrow-block__next",
        prevEl: ".arrow-block__prev",
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
    const elements = document.querySelectorAll('.js-choice');
    elements.forEach(element => {
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
})


class HeightRangeSlider {
    constructor(selector) {
        this.container = document.querySelector(selector);

        if (this.container) {
            this.inputLeft = this.container.querySelector("#input-left");
            this.inputRight = this.container.querySelector("#input-right");
            this.range = this.container.querySelector(".range");
            this.priceFrom = this.container.querySelector(".price-from");
            this.priceTo = this.container.querySelector(".price-to");
            this.init();
        }
    }

    init() {
        this.setLeftValue();
        this.setRightValue();

        this.priceFrom.addEventListener("change", (event) => {
            if (+event.target.value > +this.priceTo.value) {
                this.setLeftValue(event, +this.priceTo.value - 1);
            } else {
                this.setLeftValue(event, +event.target.value);
            }

        });

        this.priceTo.addEventListener("change", (event) => {
            if (+event.target.value < +this.priceFrom.value) {
                this.setRightValue(event, +this.priceFrom.value + 1);
            } else {
                this.setRightValue(event, +event.target.value);
            }

        });

        this.inputLeft.addEventListener("input", () => this.setLeftValue());
        this.inputRight.addEventListener("input", () => this.setRightValue());
    }

    setLeftValue(event, newValue) {

        let _this = this.inputLeft,
            min = parseInt(_this.min),
            max = parseInt(_this.max);

        _this.value = newValue || Math.min(parseInt(_this.value), parseInt(this.inputRight.value) - 1);
        this.priceFrom.value = `${_this.value * 1}`;

        let percent = ((_this.value - min) / (max - min)) * 100;

        this.range.style.left = percent + "%";
    }

    setRightValue(event, newValue) {
        let _this = this.inputRight,
            min = parseInt(_this.min),
            max = parseInt(_this.max);

        _this.value = newValue || Math.max(parseInt(_this.value), parseInt(this.inputLeft.value) + 1);
        this.priceTo.value = `${_this.value * 1}`;

        let percent = ((_this.value - min) / (max - min)) * 100;

        this.range.style.right = 100 - percent + "%";
    }
}

const heightRangeSlider = new HeightRangeSlider("#height-range");
const priceRangeSlider = new HeightRangeSlider("#price-range");




var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".arrow-block__next",
        prevEl: ".arrow-block__prev",
    },
    thumbs: {
        swiper: swiper,
    },
});
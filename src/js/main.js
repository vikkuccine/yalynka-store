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



// let inputLeft = document.querySelector("#height-range #input-left");
// let inputRight = document.querySelector("#height-range #input-right");
// let range = document.querySelector("#height-range .slider > .range");
// let priceFrom = document.querySelector("#height-range .price-from");
// let priceTo = document.querySelector("#height-range .price-to");

// priceFrom.addEventListener("input", (event) =>{
//     setLeftValue(event, +event.target.value)
// })

// function setLeftValue(event, newValue) {
//   let _this = inputLeft,
//     min = parseInt(_this.min),
//     max = parseInt(_this.max);

//   _this.value = newValue || Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);
//   priceFrom.value = `${_this.value * 1}`;

//   let percent = ((_this.value - min) / (max - min)) * 100;

//   range.style.left = percent + "%";
// }

// setLeftValue();

// priceTo.addEventListener("input", (event) =>{
//     setRightValue(event, +event.target.value)
// })

// function setRightValue(event, newValue) {
//   let _this = inputRight,
//     min = parseInt(_this.min),
//     max = parseInt(_this.max);

//   _this.value = newValue || Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);
//   priceTo.value = `${_this.value * 1}`;

//   let percent = ((_this.value - min) / (max - min)) * 100;

//   range.style.right = 100 - percent + "%";
// }

// setRightValue();

// inputLeft.addEventListener("input", setLeftValue);
// inputRight.addEventListener("input", setRightValue);

class HeightRangeSlider {
    constructor(selector) {
      this.container = document.querySelector(selector);
      this.inputLeft = this.container.querySelector("#input-left");
      this.inputRight = this.container.querySelector("#input-right");
      this.range = this.container.querySelector(".range");
      this.priceFrom = this.container.querySelector(".price-from");
      this.priceTo = this.container.querySelector(".price-to");
        console.log(this.inputLeft);
      this.init();
    }
  
    init() {
      this.setLeftValue();
      this.setRightValue();
  
      this.priceFrom.addEventListener("change", (event) => {
        if(+event.target.value > +this.priceTo.value) {
            this.setLeftValue(event, +this.priceTo.value - 1);
        } else {
            this.setLeftValue(event, +event.target.value);
        }
       
      });
  
      this.priceTo.addEventListener("change", (event) => {
        if(+event.target.value < +this.priceFrom.value) {
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
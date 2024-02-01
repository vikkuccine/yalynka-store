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
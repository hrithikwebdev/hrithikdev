let images = document.querySelectorAll(".image-slider .slider img");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let num = 0;
function changeImage() {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  images[num].style.display = "block";
}

prev.addEventListener("click", function () {
  if (num > 0) {
    num--;
  } else {
    num = images.length - 1;
  }
  changeImage();
});

next.addEventListener("click", function () {
  if (num < images.length - 1) {
    num++;
  } else {
    num = 0;
  }
  changeImage();
});

setInterval(() => {
  if (num < images.length - 1) {
    num++;
  } else {
    num = 0;
  }
  changeImage();
}, 5000);


// product scroll containers

let scrollContainer = document.querySelectorAll(".product");
let previuos = document.querySelector('.control-prev');
let nextImg = document.querySelector('.control-next');

for (const items of scrollContainer) {
  items.addEventListener('wheel', (event) => {
    event.preventDefault();
    items.scrollLeft += event.deltaY;
  });
}


for(const product of scrollContainer){
    previuos.addEventListener("click", (evt) => {
        evt.preventDefault();
        product.scrollLeft -= 900;
        product.style.scrollBehaviour = "smooth";
      });
}

for(const product2 of scrollContainer){
    nextImg.addEventListener("click", (evnt) => {
        evnt.preventDefault();
        product2.scrollLeft += 900;
        product2.style.scrollBehaviour = "smooth";
      });
}



// js for next slider 
    

const slider = () => {
  const cardList = document.querySelector('.product-slider-with-price .products')
  const slideButtons = document.querySelectorAll('.product-slider-with-price .slide-button');
  // const maxScroll = cardList.scrollWidth - cardList.clientWidth;

  slideButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const direction = button.id === "control-prev-1"? -1 : 1;
      const scrollAmount = cardList.clientWidth * direction;
      cardList.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      })
    });
  });


// function handleSlideBtn() {
//   slideButtons[0].style.display = cardList.scrollLeft <= 0 ? "none" : "block";
//   slideButtons[1].style.display = cardList.scrollLeft >= maxScroll ? "none" : "block";
// }
// cardList.addEventListener('scroll', handleSlideBtn);

}

window.addEventListener('load', slider);




const slider2 = () => {
  const cardList = document.querySelector('.product-slider .products')
  const slideButtons = document.querySelectorAll('.product-slider .slide-button');

  slideButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const direction = button.id === "control-prev-1"? -1 : 1;
      const scrollAmount = cardList.clientWidth * direction;
      cardList.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      })
    });
  });

}

window.addEventListener('load', slider2);


// slider 3 for javascript


const slider3 = () => {
  const cardList = document.querySelector('.product-slider-2 .products')
  const slideButtons = document.querySelectorAll('.product-slider .slider-button-2');

  slideButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const direction = button.id === "control-prev-2"? -1 : 1;
      const scrollAmount = cardList.clientWidth * direction;
      cardList.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    });
  });

}

window.addEventListener('load', slider3);







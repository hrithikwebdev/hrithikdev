var typed = new Typed(".typing", {
  strings: [
    "Web Devloper.",
    "Coffee Addict.",
    "UX Designer.",
    "Problem Solver.",
    "Jane Heitz.",
  ],
  backSpeed: 10,
  typeSpeed: 100,
  loop: true,
  showCursor: false,
});

TweenMax.fromTo(
  ".image",
  {
    scale: 0,
  },
  {
    scale: 1,
    duration: 1,
  }
);

gsap.from(".sub-text", {
  y: 100,
  opacity: 0,
  
});


// let number = document.getElementById('number');
// let number2 = document.querySelector('.number2');
// let number3 = document.querySelector('.number3');

// let n = 0;
// let i = 0;
// let j = 0;

// setInterval(() => {
//   if(n === 23) {
//     clearInterval();
//   }else{
//     n += 1;
//     number.innerHTML = n;
//   }
// },50);

// setInterval(() => {
//   if(i === 8) {
//     clearInterval();
//   }else{
//     i += 1;
//     number2.innerHTML = i;
//   }
// },80);

// setInterval(() => {
//   if(j === 12) {
//     clearInterval();
//   }else{
//     j += 1;
//     number3.innerHTML = j;
//   }
// },70);

let projectSection = document.querySelector('.section-project');

const projectObserver = new IntersectionObserver((entries, observer) => {
  const [entry] = entries;
  console.log(entry)

  if(!entry.isIntersecting) return;

let number = document.getElementById('number');
let number2 = document.querySelector('.number2');
let number3 = document.querySelector('.number3');

let n = 0;
let i = 0;
let j = 0;

setInterval(() => {
  if(n === 23) {
    clearInterval();
  }else{
    n += 1;
    number.innerHTML = n;
  }
},50);

setInterval(() => {
  if(i === 8) {
    clearInterval();
  }else{
    i += 1;
    number2.innerHTML = i;
  }
},80);

setInterval(() => {
  if(j === 12) {
    clearInterval();
  }else{
    j += 1;
    number3.innerHTML = j;
  }
},70);

observer.unobserve(projectSection);
  
},
{
  root: null,
  threshold: 0,
});

projectObserver.observe(projectSection);


// testimonials section javascript swiper js 

const swiper = new Swiper('.swiper', {

  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let scroll = new LocomotiveScroll({
  el:document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: {
      smooth: true
  },
  smartphone: {
      smooth: true
  }
});
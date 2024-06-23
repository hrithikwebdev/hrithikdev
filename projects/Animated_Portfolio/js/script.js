let menuBtn = document.querySelector('.menu-btn');
let navbar = document.querySelector('nav');

function toggleBtn() {
    menuBtn.classList.toggle('openMenu');
    navbar.classList.toggle('active');
}
menuBtn.addEventListener('click', toggleBtn);


// scroll animation  

// const right_move = document.querySelector('.right');
// const center = document.getElementById('center');
// const right2 = document.querySelector('.right2');

// window.addEventListener('scroll', () => {
//     const value = window.scrollY;
//     right_move.style.marginLeft = value * 0.3 + "px";
// });

// window.addEventListener('scroll', () => {
//     const value = window.scrollY;
//     center.style.marginLeft = value * -1 + "px";
// });

// window.addEventListener('scroll', () => {
//     const value = window.scrollY;
//     right2.style.marginLeft = value * 1 + "px";
// });

// sticky header 

let $nav = document.querySelector('header');

function stickyNavbar() {
   if(this.scrollY > 20) {
    $nav.classList.add('sticky');
   }else{
    $nav.classList.remove('sticky');
   }
}
window.addEventListener('scroll', stickyNavbar);

// cursor custom 

let cursor = document.querySelector('#cursor');

window.addEventListener('mousemove', (e) => {
    let posX = e.clientX;
    let posY = e.clientY;

    cursor.style.left = `${posX}px`;
    cursor.style.top = `${posY}px`;
});


// slider testimonial 

const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 5000,
        disableOnInteraction: true, 
    },
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

//   locomotive scroll 

let scroll = new LocomotiveScroll({
    el:document.querySelector("[data-scroll-container]"),
    smooth: true,
    tablet: {
        smooth: true
    },
    smartphone: {
        smooth: true
    }
})
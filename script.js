let menuList = document.querySelector(".menu-list");
const menu = document.getElementById("menu");

menu.onclick = function () {
  menuList.classList.toggle("openMenu");
  menu.classList.toggle("openMenu");
};

let $navbar = document.querySelector(".navbar");
let $scrollBtn = document.querySelector(".scroll-up-btn");

function stickyNavbar() {
  if (this.scrollY > 20) {
    $navbar.classList.add("sticky");
  } else {
    $navbar.classList.remove("sticky");
  }

  if (this.scrollY > 500) {
    $scrollBtn.classList.add("show");
  } else {
    $scrollBtn.classList.remove("show");
  }
}

window.addEventListener("scroll", stickyNavbar);

const cursor = document.querySelector(".cursor");
const body = document.querySelector("body");

body.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
  });
});

let number = document.querySelector("#number");
let number1 = document.querySelector("#number-1");
let number2 = document.querySelector("#number-2");
let number3 = document.querySelector("#number-3");
let number4 = document.querySelector("#number-4");
let number5 = document.querySelector("#number-5");
let count = 0;
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
setInterval(() => {
  if (count == 95) {
    clearInterval();
  } else {
    count += 1;
    number.innerHTML = count + "%";
  }
}, 30);

setInterval(() => {
  if (count1 == 98) {
    clearInterval();
  } else {
    count1 += 1;
    number1.innerHTML = count1 + "%";
  }
}, 30);

setInterval(() => {
  if (count2 == 80) {
    clearInterval();
  } else {
    count2 += 1;
    number2.innerHTML = count2 + "%";
  }
}, 30);

setInterval(() => {
  if (count3 == 50) {
    clearInterval();
  } else {
    count3 += 1;
    number3.innerHTML = count3 + "%";
  }
}, 30);

setInterval(() => {
  if (count4 == 45) {
    clearInterval();
  } else {
    count4 += 1;
    number4.innerHTML = count4 + "%";
  }
}, 30);

setInterval(() => {
  if (count5 == 80) {
    clearInterval();
  } else {
    count5 += 1;
    number5.innerHTML = count5 + "%";
  }
}, 30);

var typed = new Typed(".typing", {
  strings: ["UI & UX Designer", "Web Designer", "Graphic Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

var typed = new Typed(".typed", {
  strings: ["UI & UX Designer", "Web Designer", "Graphic Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// project slider scroller


const openMenuBtn = document.querySelector(".btn");
const closeMenuBtn = document.getElementById("backBtn");
const overlay = document.querySelector(".navbar-overlay");

openMenuBtn.addEventListener("click", () => {
  overlay.classList.add("active");
});

closeMenuBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
});


// list hover cursor outline width increase

let list = document.querySelectorAll("li a");
const mouseOver = () => {};

list.forEach((Elem) => {
  Elem.addEventListener("mouseenter", () => {
    gsap.to(cursorOutline, {
      width: 220,
      height: 220,
    });
  });
});

list.forEach((Elem) => {
    Elem.addEventListener("mouseleave", () => {
      gsap.to(cursorOutline, {
        width: 96,
        height: 96,
      });
    });
  });
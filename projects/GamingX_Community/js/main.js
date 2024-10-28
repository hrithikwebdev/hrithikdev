// sticky navbar

window.addEventListener("scroll", () => {
  if (this.scrollY > 20) {
    document.getElementById("home").classList.add("scroll");
  } else {
    document.getElementById("home").classList.remove("scroll");
  }
});

let openMenu = document.getElementById("menu-bar");
let closeMenu = document.getElementById("close");

openMenu.onclick = () => {
  document.getElementById("navigation").classList.add("active");
};

closeMenu.onclick = () => {
  document.getElementById("navigation").classList.remove("active");
};

// cart-click event

let cartOpen = document.getElementById("cart");
let cartOpen1 = document.getElementById("cart1");
let cartClose = document.getElementById("closeCart");
let cart_section = document.querySelector(".cart-section");

cartOpen.addEventListener("click", () => {
  cart_section.classList.add("activeCart");
});

cartOpen1.addEventListener("click", () => {
  cart_section.classList.add("activeCart");
  document.getElementById("navigation").classList.remove("active");
});

cartClose.addEventListener("click", () => {
  cart_section.classList.remove("activeCart");
});

// search bar click to open event

let searchBox = document.getElementById("searchBox");
let searchBox1 = document.getElementById("searchBox1");
let searchClose = document.getElementById("closeSearch");
let popup = document.querySelector(".search-popup");

searchBox.onclick = () => {
  popup.classList.add("activeSearch");
};
searchBox1.onclick = () => {
  popup.classList.add("activeSearch");
  document.getElementById("navigation").classList.remove("active");
};
searchClose.onclick = () => {
  popup.classList.remove("activeSearch");
};

// =============== owl carousel==================

$(".carousel").owlCarousel({
  margin: 38,
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    480: {
      items: 1,
      nav: false,
    },
    768: {
      items: 2,
      nav: false,
    },
    900: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      nav: true,
      loop: false,
    },
  },
});

// ==================== observer for counter javascript ==================

let observerSection = document.querySelector(".counter-sec");
let counter = document.getElementById("counter");
let counter1 = document.getElementById("counter1");
let counter2 = document.getElementById("counter2");
let counter3 = document.getElementById("counter3");

const observer = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;
    // console.log(entry);

    if (!entry.isIntersecting) return;

    let count = 0;
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    setInterval(() => {
      if (count >= 105) {
        clearInterval();
      } else {
        count++;
        counter.innerHTML = count + "K<span>.</span>";
      }
    }, 18);

    setInterval(() => {
      if (count1 >= 100) {
        clearInterval();
      } else {
        count1++;
        counter1.innerHTML = count1 + "M<span>.</span>";
      }
    }, 16);

    setInterval(() => {
      if (count2 >= 221) {
        clearInterval();
      } else {
        count2++;
        counter2.innerHTML = count2 + "K<span>.</span>";
      }
    }, 10);

    setInterval(() => {
      if (count3 >= 875) {
        clearInterval();
      } else {
        count3++;
        counter3.innerHTML = count3 + "<span>.</span>";
      }
    });

    observer.unobserve(observerSection);
  },
  {
    root: null,
    threshold: 0.8,
  }
);

observer.observe(observerSection);

// scroll button for js

let scroll = document.querySelector(".scroll-up-btn");

window.addEventListener("scroll", () => {
  if (scrollY > 25) {
    scroll.style.display = "block";
  } else {
    scroll.style.display = "none";
  }
});

// player counter section

let player_count = document.querySelector(".player-card-counter");
let player1 = document.getElementById("player-counter");
let player2 = document.getElementById("player-counter1");

let count5 = 0;
let count6 = 0;

const newObserverSec = new IntersectionObserver(
  (entry) => {
    let [ent] = entry;
    console.log(ent);

    if (!ent.isIntersecting) return;

    setInterval(() => {
      if (count5 >= 150) {
        clearInterval();
      } else {
        count5++;
        player1.innerHTML = count5 + "M";
      }

      if (count6 >= 221) {
        clearInterval();
      } else {
        count6++;
        player2.innerHTML = count6 + "K";
      }
    });
  },
  {
    root: null,
    threshold: 0.8,
  }
);

newObserverSec.observe(player_count);

// cursor style start from here

window.addEventListener("mousemove", (event) => {
  // console.clear();

  let cursor = document.querySelector(".cursor");
  let cursor1 = document.querySelector(".cursor1");
  let cursor2 = document.querySelector(".cursor2");
  let cursor3 = document.querySelector(".cursor3");
  let cursor4 = document.querySelector(".cursor4");
  let cursor5 = document.querySelector(".cursor5");
  let cursor6 = document.querySelector(".cursor6");
  let cursor7 = document.querySelector(".cursor7");
  let cursor8 = document.querySelector(".cursor8");
  let cursor9 = document.querySelector(".cursor9");
  let cursor10 = document.querySelector(".cursor10");
  let cursor11 = document.querySelector(".cursor11");
  let cursor12 = document.querySelector(".cursor12");
  let cursor13 = document.querySelector(".cursor13");
  let cursor14 = document.querySelector(".cursor14");
  let cursor15 = document.querySelector(".cursor15");
  let cursor16 = document.querySelector(".cursor16");
  let cursor17 = document.querySelector(".cursor17");
  let cursor18 = document.querySelector(".cursor18");
  let cursor19 = document.querySelector(".cursor19");
  let cursor20 = document.querySelector(".cursor20");
  let cursor21 = document.querySelector(".cursor21");
  let cursor22 = document.querySelector(".cursor22");
  let cursor23 = document.querySelector(".cursor23");
  let cursor24 = document.querySelector(".cursor24");
  let cursor25 = document.querySelector(".cursor25");
  let cursor26 = document.querySelector(".cursor26");
  let cursor27 = document.querySelector(".cursor27");
  let cursor28 = document.querySelector(".cursor28");
  let cursor29 = document.querySelector(".cursor29");
  let cursor30 = document.querySelector(".cursor30");

  let x = event.clientX;
  let y = event.clientY;

  cursor.style.top = `${y}px`;
  cursor.style.left = `${x}px`;

  cursor1.style.top = `${y}px`;
  cursor1.style.left = `${x}px`;

  cursor2.style.top = `${y}px`;
  cursor2.style.left = `${x}px`;

  cursor3.style.top = `${y}px`;
  cursor3.style.left = `${x}px`;

  cursor4.style.top = `${y}px`;
  cursor4.style.left = `${x}px`;

  cursor5.style.top = `${y}px`;
  cursor5.style.left = `${x}px`;

  cursor6.style.top = `${y}px`;
  cursor6.style.left = `${x}px`;

  cursor7.style.top = `${y}px`;
  cursor7.style.left = `${x}px`;

  cursor8.style.top = `${y}px`;
  cursor8.style.left = `${x}px`;

  cursor9.style.top = `${y}px`;
  cursor9.style.left = `${x}px`;

  cursor10.style.top = `${y}px`;
  cursor10.style.left = `${x}px`;

  cursor11.style.top = `${y}px`;
  cursor11.style.left = `${x}px`;

  cursor12.style.top = `${y}px`;
  cursor12.style.left = `${x}px`;

  cursor13.style.top = `${y}px`;
  cursor13.style.left = `${x}px`;

  cursor14.style.top = `${y}px`;
  cursor14.style.left = `${x}px`;

  cursor15.style.top = `${y}px`;
  cursor15.style.left = `${x}px`;

  cursor16.style.top = `${y}px`;
  cursor16.style.left = `${x}px`;

  cursor17.style.top = `${y}px`;
  cursor17.style.left = `${x}px`;

  cursor18.style.top = `${y}px`;
  cursor18.style.left = `${x}px`;

  cursor19.style.top = `${y}px`;
  cursor19.style.left = `${x}px`;

  cursor20.style.top = `${y}px`;
  cursor20.style.left = `${x}px`;

  cursor21.style.top = `${y}px`;
  cursor21.style.left = `${x}px`;

  cursor22.style.top = `${y}px`;
  cursor22.style.left = `${x}px`;

  cursor23.style.top = `${y}px`;
  cursor23.style.left = `${x}px`;

  cursor24.style.top = `${y}px`;
  cursor24.style.left = `${x}px`;

  cursor25.style.top = `${y}px`;
  cursor25.style.left = `${x}px`;

  cursor26.style.top = `${y}px`;
  cursor26.style.left = `${x}px`;

  cursor27.style.top = `${y}px`;
  cursor27.style.left = `${x}px`;

  cursor28.style.top = `${y}px`;
  cursor28.style.left = `${x}px`;

  cursor29.style.top = `${y}px`;
  cursor29.style.left = `${x}px`;

  cursor30.style.top = `${y}px`;
  cursor30.style.left = `${x}px`;

  cursor.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 300, fill: "forwards" }
  );

  cursor1.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 350, fill: "forwards" }
  );

  cursor2.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 400, fill: "forwards" }
  );

  cursor3.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 450, fill: "forwards" }
  );

  cursor4.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 500, fill: "forwards" }
  );

  cursor5.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 550, fill: "forwards" }
  );

  cursor6.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 600, fill: "forwards" }
  );

  cursor7.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 650, fill: "forwards" }
  );

  cursor8.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 700, fill: "forwards" }
  );

  cursor9.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 750, fill: "forwards" }
  );

  cursor10.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 800, fill: "forwards" }
  );

  cursor11.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 850, fill: "forwards" }
  );

  cursor12.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 900, fill: "forwards" }
  );

  cursor13.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 950, fill: "forwards" }
  );

  cursor14.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 1000, fill: "forwards" }
  );

  cursor15.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 1050, fill: "forwards" }
  );

  cursor16.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 1100, fill: "forwards" }
  );

  cursor17.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 1150, fill: "forwards" }
  );

  cursor18.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 1200, fill: "forwards" }
  );

  cursor19.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 1250, fill: "forwards" }
  );

  cursor20.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 1300, fill: "forwards" }
  );

  cursor21.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 1350, fill: "forwards" }
  );

  cursor22.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 1400, fill: "forwards" }
  );

  cursor23.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 1450, fill: "forwards" }
  );

  cursor24.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 1500, fill: "forwards" }
  );

  cursor25.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 1550, fill: "forwards" }
  );

  cursor26.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 1600, fill: "forwards" }
  );

  cursor27.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 1650, fill: "forwards" }
  );

  cursor28.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 1700, fill: "forwards" }
  );

  cursor29.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 1750, fill: "forwards" }
  );

  cursor30.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 1800, fill: "forwards" }
  );

  // console.log("clientX : ", x);
  // console.log("clientY : ", y);
});

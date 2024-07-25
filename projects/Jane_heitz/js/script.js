// cursor create
const createCursor = (x, y) => {
  let cursor = document.createElement("div");
  cursor.className = "cursor";
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
  return cursor;
};

window.addEventListener("click", (event) => {
  const cursor = createCursor(event.pageX, event.pageY);
  document.body.append(cursor);
});

let cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
  let posX = e.clientX;
  let posY = e.clientY;

  cursorOutline.style.top = `${posX}px`;
  cursorOutline.style.left = `${posY}px`;

  cursorOutline.animate({
      left: `${posX}px`,
      top: `${posY}px`,},
    {duration: 500,
      fill: "forwards"}
  );
});

document.querySelector(".btn").addEventListener("mouseenter", () => {
  gsap.to(cursorOutline, {
    width: 220,
    height: 220,
  });
});

document.querySelector(".btn").addEventListener("mouseout", () => {
  gsap.to(cursorOutline, {
    width: 96,
    height: 96,
  });
});

document.querySelector("#backBtn").addEventListener("mouseenter", () => {
  gsap.to(cursorOutline, {
    width: 220,
    height: 220,
  });
});

document.querySelector("#backBtn").addEventListener("mouseout", () => {
  gsap.to(cursorOutline, {
    width: 96,
    height: 96,
  });
});

// animations
TweenMax.fromTo(
  ".text p",
  {
    y: 120,
  },
  {
    y: -3,
    delay: 1,
    duration: 1,
  }
);

TweenMax.fromTo(
  ".title p",
  {
    y: 40,
  },
  {
    y: -2,
    delay: 1,
    duration: 1,
  }
);

TweenMax.fromTo(
  ".btn",
  {
    width: 0,
    height: 0,
  },
  {
    width: 180,
    height: 180,
    duration: 1,
  }
);

TweenMax.fromTo(
  ".animate",
  {
    y: 0,
  },
  {
    y: 1200,
    delay: 0.5,
    duration: 1.8,
  }
);

const audio = new Audio();
audio.src = "./image/mouse-click-.mp3";



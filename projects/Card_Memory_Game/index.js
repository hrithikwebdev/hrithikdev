let game = document.getElementById("game");
let btn = document.getElementById("btn");

const fruits = [
  "👻",
  "👻",
  "🍩",
  "🍩",
  "🍬",
  "🍬",
  "🍫",
  "🍫",
  "🍉",
  "🍉",
  "🍎",
  "🍎",
  "💎",
  "💎",
  "🥝",
  "🥝",
];

var shuffle_fruits = fruits.sort(() => (Math.random() > 0.5 ? 2 : -1));
for (let i = 0; i < fruits.length; i++) {
  let fruitBox = document.createElement("div");
  fruitBox.className = "item";
  fruitBox.innerHTML = shuffle_fruits[i];

  fruitBox.onclick = function () {
    this.classList.add("boxOpen");
    setTimeout(function () {
      if (document.querySelectorAll(".boxOpen").length > 1) {
        if (
          document.querySelectorAll(".boxOpen")[0].innerHTML ==
          document.querySelectorAll(".boxOpen")[1].innerHTML
        ) {
          document.querySelectorAll(".boxOpen")[0].classList.add("boxMatch");
          document.querySelectorAll(".boxOpen")[1].classList.add("boxMatch");

          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");

          if (document.querySelectorAll(".boxMatch").length == fruits.length) {
            window.alert("😁😁 You Win 😁😁");
          }
        } else {
          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
        }
      }
    }, 500);
  };

  game.appendChild(fruitBox);
}

btn.addEventListener("click", () => {
  window.location.reload();
});

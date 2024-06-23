let showWinner = document.getElementById("showWinner");

let currPlayer = "X";
let arr = Array(9).fill(null);

const checkWinner = () => {
    if(
        (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2])||
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5])||
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8])||
        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6])||
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7])||
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8])||
        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8])||
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
    ){
        /* console.log(currPlayer) */
        showWinner.innerHTML = `Winner is ${currPlayer} 😁😁`;
        return;
    }

    if(!arr.some((e) => e === null)) {
        showWinner.innerHTML = "Draw!! 😒😒";
        return;
    }
}

function handleClick(elem) {
   const id = Number(elem.id);
   if(arr[id] !== null) return;
   arr[id] = currPlayer;
   elem.innerText = currPlayer;
   checkWinner();
   currPlayer = currPlayer === "X" ? "O" : "X";
   
}

document.getElementById("reset").addEventListener("click", () => {
    resetState();
});

function playerTurn() {
    showWinner.innerHTML = "Now it's X turn";
}

function resetState() {
    currPlayer = "X";
    arr = Array(9).fill(null);
    showWinner.innerHTML = "";
    document.querySelectorAll(".row").forEach(row => row.innerText = "")
    playerTurn()
}
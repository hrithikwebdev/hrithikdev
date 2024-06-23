// javascript for calculator

const display = document.getElementById('display');


const displayInput = (input) => {
    display.value += input;
}

const clearDisplay = () => {
    display.value = "";
}

const singleDel = () => {
    display.value = display.value.toString().slice(0,-1);
}

const calculate = () => {
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value = "Error";
    }
}

display.addEventListener("keydown", (e) => {
    e.preventDefault();
});
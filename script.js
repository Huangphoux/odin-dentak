function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function operate(operation, a, b) {
    switch (operation) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;

        default:
            break;
    }
}

let firstNum = 0;
let operation;
let secondNum = 0;

const digits = document.querySelector(".digits");
const display = document.querySelector(".display");
let displayContent;

for (let number = 0; number < 10; number++) {
    let digit = document.createElement("button");
    digit.setAttribute("class", "smallButton");
    digit.textContent = number;
    digits.appendChild(digit);
}

const digitButton = document.querySelectorAll(".digits > .smallButton");
digitButton.forEach((button) => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent;
        displayContent = +display.textContent;
        // console.log(displayContent + " " + typeof displayContent);
    });
});

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    display.textContent = "";
    displayContent = "";
});

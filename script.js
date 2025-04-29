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

let firstNumber = 0;
let operation;
let secondNumber = 0;

const digitsContainer = document.querySelector(".digits");

// add digit buttons programatically
for (let number = 0; number < 10; number++) {
    let digit = document.createElement("button");
    digit.setAttribute("class", "smallButton");
    digit.textContent = number;
    digitsContainer.appendChild(digit);
}

const display = document.querySelector(".display");

const digitButton = document.querySelectorAll(".digits > .smallButton");
digitButton.forEach((button) => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent;
        // console.log(displayContent + " " + typeof displayContent);
    });
});

function clearDisplay() {
    display.textContent = "";
}

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clearDisplay);

const operators = document.querySelectorAll(".operators > .smallButton");
operators.forEach((button) => {
    button.addEventListener("click", () => {
        firstNumber = +display.textContent;
        clearDisplay();
        operation = button.textContent;
    });
});

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    secondNumber = +display.textContent;
    display.textContent = operate(operation, firstNumber, secondNumber);
});

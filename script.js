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
    return +(a / b).toFixed(2);
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

function clearDisplay() {
    display.textContent = "";
}

let isNewOperaration = true;

const digitBtns = document.querySelectorAll(".digits > .smallButton");
digitBtns.forEach((button) => {
    button.addEventListener("click", () => {
        if (display.textContent.includes("funny")) {
            display.textContent = "";
        }

        if (isNewOperaration == false) {
            display.textContent = "";
            isNewOperaration = true;
        }

        display.textContent += button.textContent;
    });
});

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearDisplay);

const operatorBtns = document.querySelectorAll(".operators > .smallButton");
operatorBtns.forEach((button) => {
    button.addEventListener("click", () => {
        if (display.textContent !== "") {
            firstNumber = +display.textContent;
            operation = button.textContent;
            clearDisplay();
        }
    });
});

const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click", () => {
    secondNumber = +display.textContent;

    if (operation === "/" && secondNumber === "0") {
        display.textContent = "You're not funny.";
    } else {
        display.textContent = operate(operation, firstNumber, secondNumber);
    }

    console.log([firstNumber, operation, secondNumber]);
    isNewOperaration = false;
});

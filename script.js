const nums = document.querySelectorAll('.number');
const screen = document.querySelector('.screen');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const removeOneNumber = document.querySelector('.delete');
const clear = document.querySelector('.clear');
const decimal = document.querySelector('.decimal');
const currentOperation = document.querySelector('.currentOperation');
let operatorSign = "";
let x = ""; //to store continuous numbers
let y = "";

const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    if (b === 0) return null;
    else {
        if (a % b === 0) return a / b;
        else (a / b).toPrecision(3);
    }
}

const operate = function (x, y , operator) {

    x = Number(x);
    y = Number(y);

    switch (operator) {
        case "+":
            return add (x, y);
            break;
        case "-":
            return subtract(x, y);
            break;
        case "×":
            return multiply(x, y);
            break;
        case "÷":
            return divide(x, y);
            break;
    }
}


//

const buttonListener = function () {

    nums.forEach((num) => {
        num.addEventListener('click', () => {
            let value = num.textContent;
            if (operatorSign !== "") {
                y += value;
                screen.textContent = y;
            }
            else {
                x += value;
                screen.textContent = x;
            }
        });
    });

    operators.forEach ((operator) => {

        operator.addEventListener('click', () => {
           operatorSign = operator.textContent;
           currentOperation.textContent = operatorSign;
        });
    });

    equals.addEventListener('click', () => {

        if (x !== "" && y !== "" && operatorSign !== "") {
            x = operate(x, y, operatorSign);
        }
        y = "";
        operatorSign = "";
        screen.textContent = x;
    });

    clear.addEventListener('click', () => {
        x = "";
        y = "";
        screen.textContent = "";
        operatorSign = "";
    });

    removeOneNumber.addEventListener('click', () => {
       screen.textContent = screen.textContent.slice(0, -1);
       x = screen.textContent;
    });
}

buttonListener();
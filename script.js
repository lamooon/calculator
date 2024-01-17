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

let x;
let y;
let operator;

const operate = function (x, y , operator) {
    switch (operator) {
        case "+":
            add (x, y);
            break;
        case "-":
            subtract(x, y);
            break;
        case "*":
            multiply(x, y);
            break;
        case "/":
            divide(x, y);
            break;
    }
}
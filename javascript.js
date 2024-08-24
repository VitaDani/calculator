/* Create the functions for the mathematical operations:
 Add, Subtract, Multiply and Divide */
function add(a, b) {
    return (a + b);
}

function subtract(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    return (a / b);
}

/* Create the variables that will be used for mathematical operations and display*/
let firstNumber;
let secondNumber;
let operation;

/* Create the function that takes the variables and performs the operation */
function operate(operation, firstNumber, secondNumber) {
    if(operation === divideButton) {
        return divide(firstNumber, secondNumber);
    } else if(operation === multiplyButton) {
        return multiply(firstNumber, secondNumber);
    } else if(operation === minusButton) {
        return subtract(firstNumber, secondNumber);
    } else if(operation === plusButton) {
        return add(firstNumber, secondNumber);
    }
}
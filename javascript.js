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
let displayValue = "0";

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

/* Create the functions to update the display once buttons are clicked */
function updateDisplay(displayValue) {
    const display = document.querySelector("#display");
    display.textContent = displayValue;
}

const buttons = document.querySelector("#buttons");
buttons.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'zero':
            updateDisplay(0);
            break;
        case 'one':
            updateDisplay(1);
            break;
        case 'two':
            updateDisplay(2);
            break;
        case 'three':
            updateDisplay(3);
            break;
        case 'four':
            updateDisplay(4);
            break;
        case 'five':
            updateDisplay(5);
            break;
        case 'six':
            updateDisplay(6);
            break;
        case 'seven':
            updateDisplay(7);
            break;
        case 'eight':
            updateDisplay(8);
            break;
        case 'nine':
            updateDisplay(9);
            break;
    }
});
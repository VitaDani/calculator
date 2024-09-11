/* Create the functions for the mathematical operations:
 Add, Subtract, Multiply and Divide */
 function sum(a, b) {
    return (a + b);
}

function minus(a, b) {
    return (a - b);
}

function product(a, b) {
    return (a * b);
}

function quotient(a, b) {
    return (a / b);
}

/* Create the variables that will be used for mathematical operations and display*/
const display = document.querySelector("#display");
display.textContent = '0';
let firstNumber = 0;
let secondNumber = 0;
let operation;

/* Create the function that takes the variables and performs the operation */
function operate(operation, firstNumber, secondNumber) {
    if(operation === "/") {
        return quotient(firstNumber, secondNumber);
    } else if(operation === "*") {
        return product(firstNumber, secondNumber);
    } else if(operation === "-") {
        return minus(firstNumber, secondNumber);
    } else if(operation === "+") {
        return sum(firstNumber, secondNumber);
    }
}

/* Create the functions to update the display once buttons are clicked */
function updateDisplay(displayValue) {
    if(display.textContent === '0') {
        display.textContent = '';
    }
    display.textContent += displayValue;
}

const buttons = document.querySelector("#buttons");
buttons.addEventListener('mousedown', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'zero':
        case 'one':
        case 'two':
        case 'three':
        case 'four':
        case 'five':
        case 'six':
        case 'seven':
        case 'eight':
        case 'nine':
            updateDisplay(target.innerHTML);
            break;
        case 'add':
        case 'subtract':
        case 'mulitply':
        case 'divide':
            operateButtonHit();
            operation = target.innerHTML;
            break;
        case 'equals':
            equalButtonHit();
            break;
    }
});

/* Create the functions to perform the mathematical operation with the operand
buttons */
function operateButtonHit() {
    firstNumber = +display.textContent;
    display.textContent = '';
}

function equalButtonHit() {
    secondNumber = +display.textContent;
    display.textContent = operate(operation, firstNumber, secondNumber);
}
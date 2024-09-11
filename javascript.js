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
        if(secondNumber === 0) {
            return "Infintely bad!!!";
        } else return quotient(firstNumber, secondNumber);
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
    if(display.textContent.length >= 12) {
        display.textContent = display.textContent.slice(1);
    }
    display.textContent += displayValue;
}

const buttons = document.querySelector("#buttons");
buttons.addEventListener('click', (event) => {
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
        case 'decimal':
            if(!display.textContent.includes('.')) {
                updateDisplay(target.innerHTML);
            }
            break;
        case 'clear':
            display.textContent = '0';
            firstNumber = 0;
            secondNumber = 0;
            break;
        case 'sign':
            display.textContent *= -1;
            break;
        case 'percent':
            display.textContent /= 100;
            break;
        case 'delete':
            display.textContent = display.textContent.slice(0 , -1);
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
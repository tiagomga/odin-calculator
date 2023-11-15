const operation = [];

const operators = {
    addition: ['+', add],
    subtraction: ['-', subtract],
    multiplication: ['*', multiply],
    division: ['/', divide],
    equals: '=',
};

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

function performOperation() {
    let operationString = operation.join('');
    if ('+' in operationString) {
        expression = operationString.split('+');
        return add(expression[0], expression[2]);
    } else if ('-' in operationString) {
        expression = operationString.split('-');
        return add(expression[0], expression[2]);
    }
}

// Event to add numbers to calculator's display
document.addEventListener('click', (event) => {
    const display = document.querySelector('.display');
    if ('number' === event.target.classList.value) {
        let number = event.target.textContent;
        display.textContent += number;
        operation.push(number);
    } else if ('operator' === event.target.classList.value) {
        display.textContent = '';
        operation.push(operators[event.target.id][0]);
    } else if ('ac' === event.target.id) {
        display.textContent = '';
        while (operation.length !== 0) {
            operation.pop();
        }
    } else if ('back' === event.target.id) {
        display.textContent = display.textContent.slice(0, -1);
        operation.pop();
    }
})
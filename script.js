const operation = [];

const operators = {
    addition: ['/+', add],
    subtraction: ['-', subtract],
    multiplication: ['*', multiply],
    division: ['/', divide],
    equals: '=',
};

let usedOperator = false;

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
    for (let operator in operators) {
        operatorSymbol = operators[operator][0];
        operatorFunction = operators[operator][1];
        if (operationString.search(operatorSymbol) !== -1) {
            expression = operationString.split(operatorSymbol);
            a = expression[0];
            b = expression[1];
            return operatorFunction(a, b);
        }
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
        usedOperator = true;
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
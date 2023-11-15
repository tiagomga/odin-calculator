const operation = [];

const operators = {
    addition: '+',
    subtraction: '-',
    multiplication: '*',
    division: '/',
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

// Event to add numbers to calculator's display
document.addEventListener('click', (event) => {
    const display = document.querySelector('.display');
    if ('number' === event.target.classList.value) {
        let number = event.target.textContent;
        display.textContent += number;
        operation.push(number);
    } else if ('operator' === event.target.classList.value) {
        display.textContent = '';
        operation.push(operators[event.target.id]);
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
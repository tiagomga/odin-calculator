function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

const operation = {
    addition: addition,
    subtraction: subtraction,
    multiplication: multiplication,
    division: division,
}

let reset = false;

let a = -1;
let operator = null;
let b = -1;

document.addEventListener('click', (event) => {
    const display = document.querySelector('.display');
    if ('number' === event.target.classList.value) {
        // Clear display
        if (reset) {
            display.textContent = '';
            reset = false;
        }

        // Clear display after 'a' is set and operator is selected
        if (a !== -1 && b === -1) {
            display.textContent = '';
            let number = event.target.textContent;
            display.textContent += number;
            b = display.textContent;
            
        // Enter numbers in the display
        } else {
            let number = event.target.textContent;
            display.textContent += number;
        }

    } else if ('operator' === event.target.classList.value) {
        // Set 'a' and then 'b' after 'a' is set
        if (a === -1) {
            a = display.textContent;
        } else {
            b = display.textContent;
        }

        // Do nothing when 'equals' is pressed when no operator is selected
        if (event.target.id === 'equals' && operator === null) {
            display.textContent = a;
            a = -1;
            b = -1;
            reset = true;

        // Do operation when 'equals' is pressed and operator is selected
        } else if (event.target.id === 'equals') {
            result = operator(+a, +b);
            display.textContent = result;
            a = -1;
            operator = null;
            b = -1;
            reset = true;

        // Select operator
        } else if (operator === null || b === -1) {
            operator = operation[event.target.id];

        // Do operation with current operator and change operator if
        // selected operator is different from the current operator
        } else {
            result = operator(+a, +b);
            display.textContent = result;
            a = result;
            operator = operation[event.target.id];
            b = -1;
        }

    // Reset calculator to clean state
    } else if ('ac' === event.target.id) {
        display.textContent = '';
        a = -1;
        operator = null;
        b = -1;

    // If no operator is selected, delete one number when 'back' is pressed
    } else if ('back' === event.target.id) {
        if (!operator) {
            display.textContent = display.textContent.slice(0, -1);
        }
    }
});
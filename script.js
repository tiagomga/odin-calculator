const operation = [];

// Event to add numbers to calculator's display
document.addEventListener('click', (event) => {
    if ('number' === event.target.classList.value) {
        let number = event.target.textContent;
        document.querySelector('.display').textContent += number;
        operation.push(number);
    }
})

document.addEventListener('click', (event) => {
    if ('ac' === event.target.id) {
        document.querySelector('.display').textContent = '';
        while (operation.length !== 0) {
            operation.pop();
        }
    }
})
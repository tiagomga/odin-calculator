const operation = [];

// Event to add numbers to calculator's display
document.addEventListener('click', (event) => {
    if ('number' === event.target.classList.value) {
        let number = event.target.textContent;
        document.querySelector('.display').textContent += number;
        operation.push(number);
    } else if ('ac' === event.target.id) {
        document.querySelector('.display').textContent = '';
        while (operation.length !== 0) {
            operation.pop();
        }
    } else if ('back' === event.target.id) {
        document.querySelector('.display').textContent = document.querySelector('.display').textContent.slice(0, -1);
        operation.pop();
    }
})
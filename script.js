const operation = [];

// Event to add numbers to calculator's display
document.addEventListener('click', (event) => {
    if ('number' === event.target.classList.value) {
        let number = event.target.textContent;
        document.querySelector('.display').textContent += number;
    }
})
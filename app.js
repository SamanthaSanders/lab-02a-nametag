const myNameDisplay = document.getElementById('name-display');
const myInput = document.getElementById('new-name');
const myButton = document.getElementById('button');

myButton.addEventListener('click', () => {

    const userInput = myInput.value;

    myNameDisplay.textContent = userInput;
});


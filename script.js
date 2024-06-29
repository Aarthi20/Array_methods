document.addEventListener('DOMContentLoaded', () => {
    const methodButtons = document.querySelectorAll('.button');
    methodButtons.forEach(button => {
        button.addEventListener('click', performArrayMethod);
    });
});

function performArrayMethod(event) {
    const input = document.getElementById('arrayInput').value;
    const array = input.split(',').map(Number);
    const method = event.target.getAttribute('array-method');

    let result;

    if (method === 'map') {
        result = array.map(num => num * 3);
        displayResult(result);

    } else if (method === 'filter') {
        result = array.filter(num => num % 2 === 0);
        displayResult(result);

    } else if (method === 'reduce') {
        result = array.reduce((prevValue, currentValue) => prevValue + currentValue);
        displayResult(result);

    } else if (method === 'sort') {
        result = array.sort((a, b) => a -b);
        displayResult(result);

    } else if (method === 'indexOf') {
        const valueToFind = prompt('Enter the value to find its index:');
        result = array.indexOf(Number(valueToFind));
        displayResult(result);
    } 
    else if (method === 'find') {
        result = array.find(num => num > 2);
        displayResult(result);

    } else if (method === 'findIndex') {
        result = array.findIndex(num => num > 2);
        displayResult(result);

    } else if (method === 'some') {
        result = array.some(num => num > 2);
        displayResult(result);
    }else if (method === 'every') {
        result = array.every(num => num > 0);
        displayResult(result);

    } 
}

function displayResult(result) {
    document.getElementById('result').textContent = result;
}

'use strict'

const resultButton = document.getElementById('result-button');

resultButton.addEventListener('click', (event) => {
    event.preventDefault();
    let result;
    const firstValue = document.getElementById('first-value').value;
    const secondValue = document.getElementById('second-value').value;
    const operator = document.getElementById('operator').value;

    switch (operator) {
        case '': result = 'Не выбрана операция'; break;
        case '+': result = Number(firstValue) + Number(secondValue); break;
        case '-': result = Number(firstValue) - Number(secondValue); break;
        case '*': result = Number(firstValue ) * Number(secondValue); break;
        case '/': result = Number(firstValue ) / Number(secondValue); break;
        default: result = 'Программа не поддерживает такую операцию'; break;
    }

    if (firstValue === '') {
        result = 'Первое число не указано';
    }

    if (secondValue === '') {
        result = 'Второе число не указано';
    }

    if (isNaN(firstValue) || isNaN(secondValue)) {
        result = 'Число указано не верно'
    }

    if (secondValue === 0 && operator === '/') {
        result = 'Операция не корректна';
    }

    console.log(result);
    document.getElementById('result').innerText = result;
}
)
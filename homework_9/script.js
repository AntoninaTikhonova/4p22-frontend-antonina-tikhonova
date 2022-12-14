'use strict'

const resultButton = document.getElementById('result-button');

resultButton.addEventListener('click', (event) => {
    event.preventDefault();
    let result;
    const firstValue = document.getElementById('first-value').value;
    const secondValue = document.getElementById('second-value').value;
    const operator = document.getElementById('operator').value;

    if (firstValue.trim() === '') {
        result = 'Первое число не указано';
        } 
        else if (isNaN(firstValue)){
            result = 'Первое число указано не верно'
        }
        else if (secondValue.trim() === '') {
            result = 'Второе число не указано';
        }
        else if (isNaN(secondValue)) {
            result = 'Второе число указано не верно';
        }
        else if (secondValue === '0' && operator === '/') {
            result = 'Операция не корректна';
        }
        else {
            switch (operator) {
                case '': result = 'Не выбрана операция'; break;
                case '+': result = Number(firstValue) + Number(secondValue); break;
                case '-': result = Number(firstValue) - Number(secondValue); break;
                case '*': result = Number(firstValue ) * Number(secondValue); break;
                case '/': result = Number(firstValue ) / Number(secondValue); break;
                default: result = 'Программа не поддерживает такую операцию'; break;
            }
        }
    console.log(result);
    document.getElementById('result').textContent = result;
}
)
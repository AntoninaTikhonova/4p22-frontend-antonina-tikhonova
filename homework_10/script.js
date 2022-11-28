'use strict'

const fibonacci = (function makeFibonacciFunction() {
    let previousNumber = -1, currentNumber = 1, newNumber;
    return function someMagic() {
        newNumber = previousNumber + currentNumber;
        previousNumber = currentNumber;
        currentNumber = newNumber;
        return newNumber;
    }
}
)()

console.log(fibonacci())
console.log(fibonacci())
console.log(fibonacci())
console.log(fibonacci())
console.log(fibonacci())
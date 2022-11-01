'use strict'

// function fibonacci(i) {
//     switch (i) {
//         case ('1'):
//             0;
//             break;
//         case ('2'):
//             1;
//             break;
        // case ('>=3'):
        //     let fibonacciStart = 0, fibonacciNewOne = 1;
        //     let fibonacciNext = fibonacciStart + fibonacciNewOne;
        //     fibonacciStart = fibonacciNewOne;
        //     fibonacciNewOne = fibonacciNext;
        //     return fibonacciNewOne;
        //     break;
//     }       
// }

// function fib(n) {
//     let a = 0, b = 1, c, s = 1;
//     for (let i = 3; i <= n; i++) {
//         c = a + b;
//         console.log(c);
//         s = s + c;
//         a = b;
//         b = c;
//     }
//     return c
// }
// function makeFibonacciFunction() {
//      let a = 0, b = 1, c;
//      return  {
//         c: a + b;
//         a: b;
//         b: c;
// };
    
// const fibo =  makeFibonacciFunction() {
//     return c = a + b;
// };

// function makeFibonacciFunction() {
//     let a = 0, b = 1, c, s = 1;
//         c = a + b;
//         return c;
//     }

// const fibo = let s = 1 + makeFibonacciFunction() {

// }


// let constFib = countFib()

// function countFib(){
//     let fibN1 = 0;
//     let fibN2 = 1;
//     let fibNNext 
//     magic() => {
//     fibNNext= fibN1 + fibN2;
//     console.log(fibNNext)
//     fibN1 = fibN2;
//     fibN2 = fibNNext;
//     fibNNext= fibN1 + fibN2;
//     return;
//     }
// }

// let fibNNext;
// for (let fibN1 = 0, fibN2 = 1;;fibN1 = fibN2, fibN2 = fibNNext){
//     fibNNext = fibN1 + fibN2;
//     return;
// // }
// let fibN1 = 0, fibN2 = 1, fibNNext;

// function count() {
//     if (fibNNext == 1){
//         return 1;
//     }
//     else {
//         fibNNext = fibNNext + count();
//     // fibN1 = fibN2;
//     // fibN2 = fibNNext;
//     return fibNNext;
// }
// fibNNext = fibN1 + fibN2;
// console.log(fibNNext)
// fibN1 = fibN2;
// fibN2 = fibNNext;
// fibNNext = fibN1 + fibN2;
// console.log(fibNNext)
// fibN1 = fibN2;
// fibN2 = fibNNext;
// fibNNext = fibN1 + fibN2;
// console.log(fibNNext)
// fibN1 = fibN2;
// fibN2 = fibNNext;
// fibNNext = fibN1 + fibN2;
// console.log(fibNNext)
// fibN1 = fibN2;
// fibN2 = fibNNext;
// fibNNext = fibN1 + fibN2;
// console.log(fibNNext)
function makeFibonacciFunction() {
    let previousNumber = -1, currentNumber = 1, newNumber;
    return function someMagic() {
        newNumber = previousNumber + currentNumber;
        previousNumber = currentNumber;
        currentNumber = newNumber;
        return newNumber;
    }
}
const fibonacci = function makeFibonacciFunction() 

//** */

const fibonacciNextLevel = (function makeFibonacciFunctionNextLevel() {
    let previousNumber = -1, currentNumber = 1, newNumber;
    return function someMagicNextLevel() {
        newNumber = previousNumber + currentNumber;
        previousNumber = currentNumber;
        currentNumber = newNumber;
        return newNumber;
    }
}
)()  //*
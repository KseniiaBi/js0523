//2) розрахувати і вивести за допомогою циклу 11-те число Фібоначчі,
// ряд починати з 0

let fibonacciNumbers = [0, 1];
for (let i = 2; i < 11; i++) {
  fibonacciNumbers[i] = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
}
console.log(fibonacciNumbers);
console.log(`The 11th Fibonacci number = ${fibonacciNumbers[10]}`);

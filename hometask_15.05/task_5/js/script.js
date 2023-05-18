//5) Якщо задано число n, вивести кількість парних чисел більше 0 та менше n

let number = +prompt('Enter a number, please');
let arr = [];

for (let i = 0; i <= number; i++) {
  if (i % 2 === 0) {
    arr.push(i);
  }
}
console.log(arr);

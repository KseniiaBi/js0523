//--------------------------TASK 1---------------------------------------
//1) написати власну реалізацію функції endsWith(str, ending)

let text = 'Hello world';
let result = text.includes('world', -1);
console.log(result);

//--------------------------TASK 2---------------------------------------
//2) Дано рядок, що містить 6 цифр. Перевірити, що сума перших трьох
// дорівнює сумі останніх трьох
let numberString = '123456';
let numberArray = numberString.split('');
console.log(numberArray);
let result1 = numberArray
  .slice(0, 3)
  .reduce(
    (accumulator, currentValue) => accumulator + parseInt(currentValue),
    0
  );
console.log(result1);
let result2 = numberArray
  .slice(-3)
  .reduce(
    (accumulator, currentValue) => accumulator + parseInt(currentValue),
    0
  );
console.log(result2);
let checkSumDigits = result1 === result2;
console.log(checkSumDigits);

//--------------------------TASK 3---------------------------------------
//3) Написати функцію toCamelCase, яка приймає рядок в форматі
//border - left - color і повертає у форматі borderLeftColor.
//Спробуйте знайти два рішення
// let string = 'border-left-color';
// let arrayString = string.split('-');
// console.log(arrayString);
// let CamelCase =
//   arrayString[0].charAt(0).toUpperCase() +
//   arrayString[0].slice(1) +
//   arrayString[1].charAt(0).toUpperCase() +
//   arrayString[1].slice(1) +
//   arrayString[2].charAt(0).toUpperCase() +
//   arrayString[2].slice(1);

// console.log(CamelCase);

//--------------------------2nd option of task 3--------------------------------
function toCamelCase(str) {
  let arrayString = str.split(' - ');
  let result = '';

  console.log(arrayString); // ['border', 'left', 'color']

  for (let i = 0; i < arrayString.length; i++) {
    result +=
      arrayString[i].charAt(0).toUpperCase() + arrayString[i].slice(1).trim();
  }
  return result;
}

let string = 'border - left - color';
console.log(toCamelCase(string));

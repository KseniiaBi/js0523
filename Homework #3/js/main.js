// 1) Дано масив з числами. Числа можуть бути більше чи менше нуля Знайдіть суму додатніх елементів масиву.

let arr = [2, 3, 4, 5, 6, -5];
let sum = 0;

for (item of arr) {
  if (item >= 0) sum += item;
}

console.log(sum); //20

// 2) Дано масив  з числами, наприклад: [10, 20, 30, 50, 235, 3000].
// Виведіть на екран тільки ті числа, котрі починаються на  1, 2 чи 5.

let arr2 = [10, 20, 30, 50, 100, 235, 300, 3000];

for (let i = 0; i < arr2.length; i++) {
  let num = String(arr2[i]);

  if (num[0] == 1 || num[0] == 2 || num[0] == 5) {
    console.log(num); //10, 20, 50, 235
  }
}

// 3) Дано масив чисел. Напишіть стрілкову функцію, котра повертає середнє арифметичне його елементів

let arr3 = [9, 8, 7, 6, 5, 4, 3];

const arithmeticMean = (arg) => {
  let sum = 0;
  let lengthArr = arg.length;
  for (item of arg) {
    sum += item;
  }
  return console.log(sum / lengthArr);
};
arithmeticMean(arr3); //6

// 4) Дано масив з числами. Перевірте чи є в ньому два однакових значення поспіль.
// Виведіть "так" чи "ні"
let arr4 = [9, 8, 7, 8, 7, 9, 9];
let answer = "NO!";

for (let i = 0; i < arr4.length - 1; i++) {
  if (arr4[i] === arr4[i + 1]) {
    answer = "YES!";
  }
}
console.log(answer); //YES!

// 5) Скільки цілих чисел з діапазону 1-1000 містять цифру 3?  PS: 33 - одне число
let count = 0;

for (let i = 1; i <= 1000; i++) {
  let num = String(i);

  for (let j = 0; j < num.length; j++) {
    if (num[j] == 3 && num[j + 1] != 3) count++;
  }
}
console.log(count); //280

// 6)  Напишіть стрілкову функцію isEven()
// яка параметром отримує ціле число і перевіряє: парне воно чи ні, повертає true або false.

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

isEven(11);

// 7) Рекурсією порахувати 11те число Фібоначчі

function fibonacciNumber(num) {
  if (num <= 1) {
    return num;
  } else {
    return fibonacciNumber(num - 1) + fibonacciNumber(num - 2);
  }
}

fibonacciNumber(11);

// 8) Дано масив чисел. Виведіть послідовно його елементи, використовуючи рекурсію замість циклу

let array = [2, 4, 5, 7, 9, 1, 2];
let i = 0;

function outputArray(arr) {
  console.log(arr[i]);
  if (i < arr.length - 1) {
    i++;
    outputArray(arr);
  }
}

outputArray(array);

// 9) Напишіть рекурсивну функцію getDigitsSum(digit - цифра), яка параметром приймає ціле число и повертає суму его цифр.
// Якщо вийшло число більше 9, знову рахувати суму(9385756493 -> 59 -> 14 -> 5)

function getDigitsSum(digit) {
  let sum = 0;
  let str = String(digit);

  for (let i = 0; i < str.length; i++) {
    sum += +str[i];
  }

  console.log(sum);

  if (sum > 9) getDigitsSum(sum);
}

getDigitsSum(9385756493); //59 => 14 => 5

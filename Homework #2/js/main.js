//1) задача про мудрого старого та шахи

let grain = 1;

for (let i = 1; i <= 64; i++) {
  grain *= 2;
}

console.log(BigInt(grain)); // 18446744073709551616n
/* (a * 0.065) / 1000; кг рису ($ США, якщо вартысть кг - 1$) */

//2) розрахувати і вивести за допомогою циклу 11-те число Фібоначчі, ряд починати з 0

let firstNum = 0;
let secondNum = 1;

for (let i = 2; i <= 11; i++) {
  let thirdNum = firstNum + secondNum;
  firstNum = secondNum;
  secondNum = thirdNum;
}

console.log(firstNum); // 55

// 3) відсортувати масив за допомогою бульбашкового способу [5,1,9,4,2,7,3,8,6]

let arr = [5, 1, 9, 4, 2, 7, 3, 8, 6];

for (let i = 0; i < arr.length - 1; i++)
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let next = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = next;
    }
  }
console.log(arr); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

/* 4) Дано число n=1000. Діліть його на 2 стільки разів, поки результат ділення не стане менше 50.
Яке число вийде? Порахуйте кількість ітерацій, необхідних для цього і запишіть їі в змінну num.*/
let n = 1000;
let num = 0;
let res = 0;

do {
  res = n / 2;
  n = res;
  num++;
} while (res > 50);

console.log(res); //31.25
console.log(num); //5

// 5) Якщо задано число n, вивести кількість парних чисел більше 0 та менше n

let numN = 1000;
let count = 0;

for (let i = 0; i < numN; i++) {
  if (i % 2 === 0) count++;
}

console.log(count); //500

/*6) Компанія по транспортуванню меблів заносить будь-які меблі на 1-й поверх безкоштовно,
з 2-го по 4-й включно - по 20грн., з 5-го по 7-й включно - по 30грн., а з 8-го и вище - по 40грн.
Спитайте у користувача, на який поверх треба занести меблі, и розрахуйте вартість заносу.*/

let floor = prompt("Вкажіть, будь ласка поверх:");
let price = 0;

for (let i = 2; i <= floor; i++) {
  if (i >= 2 && i <= 4) price += 20;
  if (i >= 5 && i <= 7) price += 30;
  if (i >= 8) price += 40;
}

console.log(price);

//7) за допомогою циклу розрахувати факторіал числа 5

let numFac = 5;
let factorial = 1;

for (let i = 2; i <= numFac; i++) {
  factorial *= i;
}

console.log(factorial); //120



  
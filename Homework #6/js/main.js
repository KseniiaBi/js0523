// 1) Напишіть функцію map(fn, array), котра приймає на вході функцію та масив,
//    обробляє кожний елемент масиву цією функцією та повертає новий масив.

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

function multNumbers(arr) {
  const newArr = arr.map((item) => item * 2);
  return newArr;
}

console.log(multNumbers(arr)); //[2, 4, 6, 8, 10, 12, 14, 16]

// 2) Напишіть функцію, яка замінює метод масиву some
//(перевіряємо чи є неповнолітні)

const secondArr = [
  { name: "Ivan", age: "17" },
  { name: "Oleg", age: "21" },
  { name: "Petro", age: "25" },
];

//метод
let result = secondArr.some((item) => item.age < 18);

console.log(result); //true (Є неповнолітні)

//функція
function adultsOnly(arr) {
  for (item of arr) {
    if (item.age < 18) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(adultsOnly(secondArr)); //true (Є неповнолітні)

// 3) Напишіть функцію, яка замінює метод масиву every
//(перевіряємо чи всі студенти мають прохідний бал (більший за 60) )

const students = [
  { name: "Ivan", gpa: "66" },
  { name: "Oleg", gpa: "95" },
  { name: "Petro", gpa: "80" },
];

//метод
let res = students.every((item) => item.gpa > 60);

console.log(res); //true (У всіх середній бал вище 60)

//функція
function checkGpa(arr) {
  for (item of arr) {
    if (item.gpa > 60) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(checkGpa(students)); //true (У всіх середній бал вище 60)

// 4) Використовуючи методи concat + reduce  і не використовуючи flat розрахуйте суму елементів багатовимірного масиву

const arrInArr = [1, 2, 3, [4, 5, 6, [10]], [10]];

function concatReduce(arr) {
  let flatArr = arr.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? concatReduce(curr) : curr), []);
  return flatArr.reduce((acc, curr) => acc + curr, 0);
}

console.log(concatReduce(arrInArr)); //41

// 5) Дано масив рядків. Знайти кількість рядків, які мають довжину більше 5 символів, і вивести їх в алфавітному порядку.

const cities = ["Kyiv", "Kharkiv", "Odesa", "Lviv", "Dnipro", "Cherkasy"];

function checkCities(arr) {
  let someCities = arr.filter((item) => item.length > 5);
  return someCities.sort();
}

console.log(checkCities(cities)); //['Cherkasy', 'Dnipro', 'Kharkiv']

// 6) Дано масив чисел.
// Створити новий масив, який містить лише унікальні числа(без повторень), та відсортувати його в порядку спадання.

const someNum = [5, 7, 7, 5, 3, 1, 8, 8];

function uniqueNumbers(arr) {
  const sortNum = [];
  someNum.forEach((item) => (!sortNum.includes(item) ? sortNum.push(item) : false));
  return sortNum.sort((a, b) => b - a);
}

console.log(uniqueNumbers(someNum)); //[8, 7, 5, 3, 1]

// 7) Дано масив чисел. Вивести суму всіх чисел, які є квадратами інших чисел у масиві.

const someNumbers = [4, 16, 3, 9, 5, 25, 10, 100, 11];

function sumOfSquareNumbers(arr) {
  let sumNumber = 0;
  someNumbers.forEach((item) => (someNumbers.includes(item ** 2) ? (sumNumber += item ** 2) : false));
  return sumNumber;
}

console.log(sumOfSquareNumbers(someNumbers)); //150

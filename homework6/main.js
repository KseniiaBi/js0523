//1) Напишіть функцію map(fn, array), котра приймає на вході функцію та масив,  обробляє кожний елемент масиву цією функцією та повертає новий масив.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function map(fn, arr) {
  arr.forEach(fn);
}
let newArray = [];
map((elem) => newArray.push(elem * 2), array);
console.log(newArray);

//2) Напишіть функцію, яка замінює метод масиву some
function some(fn, arr) {
  let check = false;
  for (let i = 0; i < arr.length; i++) {
    check = fn(arr[i]);
    if (check) {
      break;
    }
  }
  return check;
}
console.log(some((elem) => elem > 8, array));

//3) Напишіть функцію, яка замінює метод масиву every
function every(fn, arr) {
  let check = true;
  for (let i = 0; i < arr.length; i++) {
    check = fn(arr[i]);
    if (!check) {
      break;
    }
  }
  return check;
}
console.log(every((elem) => elem > 1, array));

//4) Використовуючи методи concat + reduce  і не використовуючи flat розрахуйте суму елементів багатовимірного масиву
let arrays = [1, 2, [3, 4, [5, 6], [7, 8], 9, 10]];
let flat = (arr) =>
  arr.reduce(
    (total, val) => total.concat(Array.isArray(val) ? flat(val) : val),
    []
  );
let newArr = flat(arrays);
console.log(newArr);
let sum = newArr.reduce((total, val) => total + val);
console.log(sum);

//5) Дано масив рядків. Знайти кількість рядків, які мають довжину більше 5 символів, і вивести їх в алфавітному порядку.
let stringArr = [
  "Cherry",
  "Blueberyy",
  "Kiwi",
  "Srawberry",
  "Pear",
  "Raspberry",
  "Cranberry",
];
let newString = stringArr
  .filter((val) => (val.length > 5 ? val : false))
  .sort();
console.log(newString);

//6) Дано масив чисел. Створити новий масив, який містить лише унікальні числа (без повторень), та відсортувати його в порядку спадання.
let array6 = [5, 8, 9, 3, 8, 6, 5, 1, 2, 9, 4, 5];
let newArray6 = [];
array6.forEach((elem) => {
  !newArray6.includes(elem) ? newArray6.push(elem) : false;
});
console.log(newArray6.sort().reverse());

//7) Дано масив чисел. Вивести суму всіх чисел, які є квадратами інших чисел у масиві.
let array7 = [1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 4, 2, 16, 1];
let newArr7 = [];
array7.forEach((elem) =>
  array7.includes(elem ** 2) ? newArr7.push(elem ** 2) : false
);
console.log(newArr7.reduce((total, val) => total + val));

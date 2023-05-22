//--------------------------TASK 1---------------------------------------
//1) Дано масив з числами. Числа можуть бути більше чи менше нуля.
//Знайдіть суму додатніх елементів масиву.

let arrayNumbers = [4, -6, 7, 8, -16, -7];
let sum = 0;

for (let i = 0; i < arrayNumbers.length; i++) {
  if (arrayNumbers[i] > 0) {
    sum += arrayNumbers[i];
  }
}
console.log(
  `The sum of positive elements of the array [${arrayNumbers}] is ${sum}.`
);

//---------------Version 2: Utilizing a function------------------------

// let arrayNumbers = [4, -6, 7, 8, -16, -7, 1];

// function sum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       sum += arr[i];
//     }
//   }
//   console.log(
//     `The sum of positive elements of the array [${arrayNumbers}] is ${sum}.`
//   );
// }
// sum(arrayNumbers);

//--------------------------TASK 2---------------------------------------

//2) Дано масив  з числами, наприклад: [10, 20, 30, 50, 235, 3000].
// Виведіть на екран тільки ті числа, котрі починаються на  1, 2 чи 5.

let array = [10, 20, 30, 50, 235, 3000];
let numbers = [];
let index = 0;

for (let i = 0; i < array.length; i++) {
  let str = '';
  str += array[i];
  if (str[0] === '1' || str[0] === '2' || str[0] === '5') {
    numbers[index] = array[i];
    index++;
  }
}
console.log(numbers);

//---------------Version 2: Utilizing a function------------------------

// let array = [10, 20, 30, 50, 235, 3000];

// function getNumbers(arr) {
//   let numbers = [];
//   let index = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let str = '';
//     str += arr[i];
//     if (str[0] === '1' || str[0] === '2' || str[0] === '5') {
//       numbers[index] = arr[i];
//       index++;
//     }
//   }
//   console.log(numbers);
// }
// getNumbers(array);

//--------------------------TASK 3---------------------------------------
//3) Дано масив чисел. Напишіть стрілкову функцію, котра повертає
// середнє арифметичне його елементів.

let arrNumbers = [22, 44, 1, 24, 98, 3];
const calcArithmeticMean = (arrNumbers) => {
  let result = 0;

  for (let i = 0; i < arrNumbers.length; i++) {
    result += arrNumbers[i] / arrNumbers.length;
  }
  console.log(`The arithmetic mean of the array elements is ${result}.`);
};

calcArithmeticMean(arrNumbers);

//--------------------------TASK 4---------------------------------------
//4) Дано масив з числами. Перевірте чи є в ньому два однакових значення поспіль.
// Виведіть "так" чи "ні"

let arrNumbs = [1, 2, 3, 3, 5, 4, 5, 6];
let hasDuplicate = 'no';

for (let i = 0; i < arrNumbs.length; i++) {
  if (arrNumbs[i] === arrNumbs[i + 1]) {
    hasDuplicate = 'yes';
  }
}
console.log(
  `Are there two consecutive identical elements in the array? - ${hasDuplicate}`
);

//---------------Version 2: Utilizing a function------------------------

// let arrNumbs = [1, 2, 1, 3, 5, 4, 5, 6];
// const checkArr = (arr) => {
//   let hasDuplicate = 'no';
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       hasDuplicate = 'yes';
//     }
//   }
//   console.log(
//     `Are there two consecutive identical elements in the array? - ${hasDuplicate}`
//   );
// };
// checkArr(arrNumbs);

//--------------------------TASK 5---------------------------------------
//5) Скільки цілих чисел з діапазону 1-1000 містять цифру 3?
//PS: 33 - одне число
let figure = '3';
let foundNumbers = [];
let counter = 0;

for (let i = 0; i <= 1000; i++) {
  let strNumber = '';
  strNumber += i;

  for (let k = 0; k < strNumber.length; k++) {
    if (strNumber[k] === figure) {
      foundNumbers[counter] = i;
      counter++;
      break;
    }
  }
}

console.log(
  `The count of numbers that contain the digit ${figure} - ${counter}.`
);
console.log(foundNumbers);

//--------------------------TASK 6---------------------------------------
//6)  Напишіть стрілкову функцію isEven() яка параметром отримує ціле число
// и перевіряє: парне воно чи ні, повертає true або false.

const isEven = (n) => {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isEven(6));

//--------------------------TASK 7---------------------------------------

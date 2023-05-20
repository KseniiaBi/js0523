//1) Дано масив з числами. Числа можуть бути більше чи менше нуля Знайдіть суму додатніх елементів масиву.
const array1 = [8, -87, 56, -76, -865, 54, 5, 97, -65];
let sum = 0;
for (number of array1) {
  if (number > 0) {
    sum += number;
  }
}
console.log(sum);

//2) Дано масив  з числами, наприклад: [10, 20, 30, 50, 235, 3000]. Виведіть на екран тільки ті числа , котрі починаються на  1, 2 чи 5.
const array2 = [10, 20, 30, 50, 235, 3000];
let newArray2 = [];
for (number of array2) {
  let firstLetter = number.toString().slice(0, 1);
  if (firstLetter == "1" || firstLetter == "2" || firstLetter == "5") {
    newArray2.push(number);
  }
}
console.log(newArray2);

//3) Дано масив чисел. Напишіть стрілкову функцію, котра повертає середнє арифметичне його елементів
const array3 = [10, 20, 30, 50, 235, 300, 100];
let sum3 = 0;
let avarage = (array) => {
  array.forEach((element) => (sum3 += element));
  return sum3 / array.length;
};
console.log(avarage(array3));

//4) Дано масив з числами. Перевірте чи є в ньому два однакових значення поспіль. Виведіть "так" чи "ні"
const array4 = [10, 20, 30, 50, 50, 235, 300, 100];
let same = false;
for (let i = 0; i < array4.length - 1; i++) {
  if (array4[i] === array4[i + 1]) {
    same = true;
    break;
  }
}
if (same) {
  console.log("так");
} else {
  console.log("ні");
}

//5) Скільки цілих чисел з діапазону 1-1000 містять цифру 3?  PS: 33 - одне число
let quant = 0;
for (let i = 1; i <= 1000; i++) {
  if (i.toString().includes("3")) {
    quant++;
  }
}
console.log(quant);

//6)  Напишіть стрілкову функцію isEven() яка параметром отримує ціле число и перевіряє: парне воно чи ні, повертає true або false.
let isEven = (number) => (number % 2 === 0 ? true : false);
let checkNum = 30;
console.log(`Is ${checkNum} even? ${isEven(checkNum)}`);

//7) Рекурсією порахувати 11те число Фібоначчі
let fibNumber = 0;
let newEl;
function fibonachi(prevEl, elem) {
  newEl = prevEl + elem;
  if (fibNumber < 8) {
    fibNumber++;
    fibonachi(elem, newEl);
  }
}
fibonachi(0, 1);
console.log(`11-th Fibonachi number is ${newEl}`);

//8) Дано масив чисел. Виведіть послідовно його елементи, використовуючи рекурсію замість циклу
const array8 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function showArray(array_index) {
  if (array_index < array8.length) {
    console.log(array8[array_index++]);
    showArray(array_index);
  }
}
showArray(0);

//9) Напишіть рекурсивну функцію getDigitsSum (digit - цифра), яка параметром приймає ціле число и повертає суму его цифр. Якщо вийшло число більше 9, знову рахувати суму  (9385756493 -> 59 -> 16 -> 7 )*/
let getDigitsSum = (num) => {
  if (num > 9) {
    let sum = 0;
    for (elem of num.toString()) {
      sum += Number(elem);
    }
    console.log(`Sum of digit ${num} = ${sum}`);
    getDigitsSum(sum);
  }
};
getDigitsSum(9385756493);

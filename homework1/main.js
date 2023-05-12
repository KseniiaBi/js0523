//1)Напишіть програму, яка перевіряє, чи є задане число парним, використовуючи тернарний оператор.
let enteredNumber = prompt("Enter any number for checking is it even or odd");
let isEven = enteredNumber % 2 === 0 ? "Number is even" : "Number id odd";
alert(isEven);

//2)Напишіть програму, яка перевіряє, чи задане число є додатнім або від'ємним, використовуючи умову if-else.
let enteredNumber2 = prompt(
  "Enter any number for checking is it positive or negative"
);
let isPositive;
if (enteredNumber2 < 0) {
  isPositive = "Number is negative";
} else if (enteredNumber2 == 0) {
  isPositive = "Number is 0";
} else {
  isPositive = "Number is positive";
}
alert(isPositive);

//3)Напишіть програму, яка перевіряє, чи введене число належить до діапазону від 1 до 10, використовуючи оператор switch case.
let enteredNumber3 = prompt(
  "Enter any number for checking is it in range from 1 to 10"
);
switch (true) {
  case enteredNumber3 >= 1 && enteredNumber3 <= 10:
    alert("Number is in range from 1 to 10");
    break;
  default:
    alert("Number is not in range from 1 to 10");
}

//4)Напишіть програму, яка визначає, чи є задана літера голосною чи приголосною, використовуючи оператор switch case.
let enteredLetter = prompt("Enter any Ukrainian letter");
switch (enteredLetter) {
  case "А":
  case "а":
  case "О":
  case "o":
  case "У":
  case "у":
  case "Е":
  case "е":
  case "и":
  case "І":
  case "і":
  case "Ї":
  case "ї":
  case "Я":
  case "я":
  case "Ю":
  case "ю":
  case "Є":
  case "є":
    alert("Letter is vowel");
    break;
  default:
    alert("Letter is consonant");
}

//5)Напишіть програму, яка виводить на екран всі числа від 1 до 20, використовуючи цикл for.
let allNumbers = "";
for (let i = 1; i <= 20; i++) {
  allNumbers += i + " ";
}
alert(allNumbers);

//6)Напишіть програму, яка виводить на екран суму всіх чисел від 1 до заданого числа, використовуючи цикл while.
let enteredNumber6 = prompt("Enter any positive number");
let k = 1;
let sum = 0;
while (k <= enteredNumber6) {
  sum += k;
  k++;
}
alert(`Sum of all numbers from 1 to ${enteredNumber6} is ${sum}`);

//7) Напишіть програму, яка виводить на екран таблицю множення для числа 5, використовуючи цикл for.
let table = "";
for (let i = 1; i <= 10; i++) {
  table += `5 x ${i} = ${i * 5} \n`;
}
alert(table);

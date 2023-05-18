//1) задача про мудрого старого та шахи

let rice = BigInt(0);
for (let i = 0; i <= 63; i++) {
  rice += BigInt(2) ** BigInt(i);
}
let allWeight = (rice * 186n) / 10000n / 1000n;
console.log(`Weight of all rice on the board is ${allWeight} kg`);

//2) розрахувати і вивести за допомогою циклу 11-те число Фібоначчі, ряд починати з 0
let fibonachi = [0, 1];
for (let i = 1; i < 10; i++) {
  fibonachi[i + 1] = fibonachi[i - 1] + fibonachi[i];
}
console.log(`11-th Fibonachi number is ${fibonachi[10]}`);

//3) відсортувати масив за допомогою бульбашкового способу [5,1,9,4,2,7,3,8,6]
let sortArray = [5, 1, 9, 4, 2, 7, 3, 8, 6];
for (let i = 0; i < sortArray.length; i++) {
  for (let j = 1; j < sortArray.length - i; j++) {
    if (sortArray[j - 1] > sortArray[j]) {
      let tempNumber = sortArray[j];
      sortArray[j] = sortArray[j - 1];
      sortArray[j - 1] = tempNumber;
    }
  }
}
console.log(sortArray);

//4) Дано число n=1000. Діліть його на 2 стільки разів, поки результат ділення не стане менше 50. Яке число вийде? Порахуйте кількість ітерацій, необхідних для цього і запишіть їі в змінну num.
let n = 1000;
let num = 0;
while (n >= 50) {
  n /= 2;
  num++;
}
console.log(`n = ${n}, num = ${num}`);

//5) Якщо задано число n, вивести кількість парних чисел більше 0 та менше n
let numb = 100;
evenQuant = 0;
for (let i = 0; i < numb; i++) {
  if (i % 2 === 0) {
    evenQuant++;
  }
}
console.log(`Quantity of even numbers of ${numb} is ${evenQuant}`);

//6) Компанія по транспортуванню меблів заносить будь-які меблі на 1-й поверх безкоштовно, з 2-го по 4-й включно - по 20грн., з 5-го по 7-й включно - по 30грн., а з 8-го и вище - по 40грн. Спитайте у користувача, на який поверх треба занести меблі, и розрахуйте вартість заносу.
let floor = prompt("Enter floor");
let price;
switch (floor) {
  case "1":
    price = 0;
    break;
  case "2":
  case "3":
  case "4":
    price = 20;
    break;
  case "5":
  case "6":
  case "7":
    price = 30;
    break;
  default:
    price = 40;
    break;
}
console.log(`Floor price is ${price} uah`);
//7) за допомогою циклу розрахувати факторіал числа 5
let factorial = 1;
for (let i = 1; i <= 5; i++) {
  factorial *= i;
}
console.log(`5! = ${factorial}`);

//****) зробити з зірочок ромб
let size = 7;
let median = Math.ceil(size / 2);
for (let i = 0; i < size + 2; i++) {
  let str = "";
  if (i < median) {
    for (let k = 0; k < median - i; k++) {
      str += " ";
    }
    str += "*";
    for (let j = 0; j < i; j++) {
      str += "**";
    }
  } else {
    for (let k = 0; k < i - median; k++) {
      str += " ";
    }
    for (let j = 0; j < size - i + 1; j++) {
      str += "**";
    }
    str += "*";
  }
  console.log(str);
}

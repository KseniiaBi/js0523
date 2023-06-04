// 1) написати власну реалізацію функції endsWith(str, ending)
let file = "ergergeg.pdf";
let check = ".pdf";

function endsWith(str, ending) {
  if (str.length < ending.length) {
    return "Try again";
  } else {
    for (let i = 1; i <= ending.length; i++) {
      if (str.charAt(str.length - i) !== ending.charAt(ending.length - i)) {
        return "Try again";
      }
    }
  }
  return "OK!";
}

console.log(endsWith(file, check));

// 2) Дано рядок, що містить 6 цифр. Перевірити, що сума перших трьох дорівнює сумі останніх трьох

let strWithNum = "123321";

function checkSum(str) {
  let arr = str.split("");
  let firstNum = 0;
  let secondNum = 0;

  for (let i = 0; i < str.length / 2; i++) {
    firstNum += +arr[i];
    secondNum += +arr[arr.length - 1 - i];
  }
  return firstNum === secondNum ? "Equal!" : "Not equal!";
}

console.log(checkSum(strWithNum));

// 3) Написати функцію toCamelCase, яка приймає рядок в форматі border - left - color
// і повертає у форматі borderLeftColor. Спробуйте знайти два рішення


//1
let someStr = "border - left - color";

function camelCase(str) {
  str = str.split(" - ");
  let res = str[0];
  for (let i = 1; i < str.length; i++) {
    res += str[i][0].toUpperCase() + str[i].slice(1);
  }
  return res;
}

console.log(camelCase(someStr));

//2
function camelCase2(str) {
    str = str.split("- ").join("");
    let res = "";
    for (let i = 0; i < str.length; i++){
        str[i] == " " ? (res += str[++i].toUpperCase()) : (res += str[i]);
    }
    return res;
};

console.log(camelCase2(someStr));

//3
function camelCase3(str) {

    let res = str.split(" - ").map((string, index) => (index === 0 ? string : string.charAt(0).toUpperCase() + string.slice(1)));
    return res.join("");
}

console.log(camelCase3(someStr));
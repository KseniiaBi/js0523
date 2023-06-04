// 1) написати власну реалізацію функції endsWith(str, ending)
let endsWith = (str, ending) =>
  str.substr(str.length - ending.length) == ending ? true : false;
console.log(endsWith("Hello Oksana", "na"));

// 2) Дано рядок, що містить 6 цифр. Перевірити, що сума перших трьох дорівнює сумі останніх трьох
let checkStr = (str, position) =>
  str
    .substr(position, 3)
    .split("")
    .reduce((total, num) => Number(total) + Number(num));
let str = "123231";
checkStr(str, 0) === checkStr(str, 3)
  ? console.log("Equal")
  : console.log("Not equal");

// 3) Написати функцію toCamelCase, яка приймає рядок в форматі border-left-color і повертає у форматі borderLeftColor. Спробуйте знайти два рішення
//1
let toCamelCase = (name) =>
  name.replace(/-(\w?)/g, (match) => match[1].toUpperCase());
console.log(toCamelCase("border-left-color"));
//2
function toCamelCase2(name) {
  let newName = "";
  for (let i = 0; i < name.length; i++) {
    (name.at(i) != "-") ? newName += name.at(i) : newName += name.at(++i).toUpperCase();
  }
  return newName
}
console.log(toCamelCase2("border-left-color"));

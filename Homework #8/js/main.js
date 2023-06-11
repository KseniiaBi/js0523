// 1) Напишіть функцію, яка повертає двумірний масив з обʼєкту:
// [[key, value], [key, value]].   ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]

const fruits = { lemon: "yellow", lime: "green" };

function multiArray(obj) {
  return Object.entries(obj);
}

console.log(multiArray(fruits));

// 2) Вкоротіть рядок str, якщо його довжина більша за параметр num. Додайте в кінці рядка "...", якщо str більше за num.
// Три крапки мають враховуватись при перевірці довжини str.

let strForTest = "Ukrainians are the most powerful nation in the world";
let numForTest = 14;

function shortStr(str, num) {
  return str.length > num ? `${str.slice(0, num - 3)} ...` : str;
}

console.log(shortStr(strForTest, numForTest));

// 3) Знайти найдовше слово в реченні. Результатом виконання функції має бути довжина цього слова

function biggestWord1(string) {
  let wordsArr = string.split(" ");
  let result = wordsArr.reduce((check, curent) => {
    return check.length > curent.length ? check : curent;
  });

  return result.length;
}

console.log(biggestWord1(strForTest));

// А ще така ідея..

function biggestWord2(string) {
  let wordsArr = string.split(" ");
  return wordsArr.sort((a, b) => b.length - a.length)[0].length;
}

console.log(biggestWord2(strForTest));

function biggestWord3(string) {
  return Math.max(...string.split(" ").map((i) => i.length));
}

console.log(biggestWord3(strForTest));

// 4) Припустимо, ви написали твір і в ньому для позначення діалогів використовували одинарні лапки.
// Тепер ви хочете замінити лапки на подвійні, а одинарні залишити лише для скорочення слів типу aren't.
// Придумайте шаблон, який буде розрізняти ці два види використання лапок і використайте його у методі replace

let text = `'Don't stop and don't give up. Go to your goal. - he said.'`;

function changeText(text) {
  return text.replace(/(^|\s)'|'(\s|$)/gm, '"');
}

console.log(changeText(text));

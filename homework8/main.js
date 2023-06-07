// 1) Напишіть функцію, яка повертає двумірний масив з обʼєкту:  [[key, value], [key, value]].
//({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
let obj1 = { a: 1, b: 2 };
function makeArrFromObj(obj) {
  let newArr1 = [];
  for (const entry of Object.entries(obj)) {
    newArr1.push(entry);
  }
  return newArr1;
}
console.log(makeArrFromObj(obj1));

// 2) Вкоротіть рядок str, якщо його довжина більша за параметр num. Додайте в кінці рядка "...",
//якщо str більше за num. Три крапки мають враховуватись при перевірці довжини str.
let shorterStr = (str, num) =>
  str.length > num && num > 3 ? (newStr = str.slice(0, num - 3) + "...") : str;
console.log(shorterStr("I am glad to see you!", 15));

// 3) Знайти найдовше слово в реченні. Результатом виконання функції має бути довжина цього слова
function longestWordCount(str) {
  let lengthArr = str.split(" ").map((word) => word.length);
  return (maxWordLength = Math.max.apply(null, lengthArr));
}
console.log(longestWordCount("I am glad to see you Dany"));

// щe зробила варіант функції, що повертає масив слів, що містять найбільшу довжину
function longestWord(str) {
  let lengthArr = str.split(" ").map((word) => word.length);
  let maxWordLength = Math.max.apply(null, lengthArr);
  let arrOfIndexes = lengthArr.reduce((arrOfMaxIndexes, elem, index) => {
    if (elem == maxWordLength) {
      arrOfMaxIndexes.push(str.split(" ").at(index));
    }
    return arrOfMaxIndexes;
  }, []);
  return arrOfIndexes;
}
console.log(longestWord("I am glad to see you Dany"));

// 4) Припустимо, ви написали твір і в ньому для позначення діалогів використовували одинарні лапки.
//Тепер ви хочете замінити лапки на подвійні, а одинарні залишити лише для скорочення слів типу aren’t.
//Придумайте шаблон, який буде розрізняти ці два види використання лапок і використайте його у методі replace
let text = "'I have great news! We got the promotion we've been working so hard for.' John's eyes widened with excitement. 'Are you serious? That's fantastic!'";
console.log(text);
let newText = text.replace(/(?<!\w)'(?=\w)|(?<!\w)'(?!\w)/gi, '"');
console.log(newText);

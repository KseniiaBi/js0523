//1) Створіть об'єкт, що представляє студента, з властивостями, такими як ім'я, вік, курс і середній бал. Виведіть інформацію про студентів, чий середній бал вище певного значення.
let students = [
  { name: "John", age: 18, cource: 1, avarage: 94.5 },
  { name: "Mark", age: 20, cource: 3, avarage: 84.7 },
  { name: "Dan", age: 19, cource: 2, avarage: 90.8 },
  { name: "Kevin", age: 21, cource: 4, avarage: 74.2 },
  { name: "Emi", age: 18, cource: 1, avarage: 91.8 },
  { name: "Lili", age: 20, cource: 3, avarage: 84.5 },
];
function showStudets(number) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].avarage >= number) {
      console.log(
        `${students[i].name}, ${students[i].age}, ${students[i].cource} course has ${students[i].avarage}`
      );
    }
  }
}
showStudets(90);

//2) Створіть об'єкт, що представляє товар у магазині, з властивостями, такими як назва, ціна і кількість. Створіть кілька таких об'єктів і виведіть інформацію про товари з заданою ціною.
let item5 = { name: "Knife", price: 2.5, quantity: 61 };
let item1 = { name: "Plate", price: 3.99, quantity: 10 };
let item2 = { name: "Cup", price: 3.99, quantity: 18 };
let item3 = { name: "Fork", price: 1.5, quantity: 14 };
let item4 = { name: "Spoon", price: 1.5, quantity: 91 };

function showItems(price, ...argm) {
  if (argm.length != 0) {
    for (let i = 0; i < argm.length; i++) {
      if (argm[i].price == price)
        console.log(`${argm[i].name} price is ${price}`);
    }
  } else {
    console.error("Error");
  }
}
showItems(3.99, item1, item2, item3, item4, item5);

//3) Створіть об'єкт, що представляє книгу, з властивостями, такими як назва, автор і рік видання. Створіть масив таких об'єктів і відсортуйте його за роком видання.
let books = [
  { name: "book1", author: "aaa", year: 2023 },
  { name: "book2", author: "bbb", year: 1990 },
  { name: "book3", author: "ccc", year: 2017 },
  { name: "book4", author: "ddd", year: 1977 },
  { name: "book5", author: "eee", year: 2002 },
  { name: "book6", author: "ggg", year: 2020 },
  { name: "book7", author: "hhh", year: 2018 },
];
for (let i = 0; i < books.length; i++) {
  for (let j = 1; j < books.length - i; j++) {
    //debugger;
    if (books[j - 1].year > books[j].year) {
      let tempItem = books[j];
      books[j] = books[j - 1];
      books[j - 1] = tempItem;
    }
  }
}
console.log(books);

// 1) Створіть об'єкт, що представляє студента, з властивостями, такими як ім'я, вік, курс і середній бал.
// Виведіть інформацію про студента, чий середній бал вище певного значення.

const student = {
  name: "Petro",
  age: "25",
  course: "2",
  gpa: "95",
};

function aboutStudent(obj) {
  if (obj.gpa > 90) {
    return console.log(`Name: ${obj.name}. Age: ${obj.age}. Course: ${obj.course}. GPA: ${obj.gpa}`);
  } else {
    return console.log("The student's GPA is lower than 90");
  }
}

aboutStudent(student);

// 2) Створіть об'єкт, що представляє товар у магазині, з властивостями, такими як назва, ціна і кількість.
// Створіть кілька таких об'єктів і виведіть інформацію про товари з заданою ціною.

const firstGoods = {
  title: "Bread",
  price: "30",
  quantity: "50",
};

const secondGoods = {
  title: "Chocolate",
  price: "30",
  quantity: "50",
};

const thirdGoods = {
  title: "Milk",
  price: "35",
  quantity: "50",
};

function aboutGoods() {
    let goodsPrice = prompt("Enter the price:");
    let yourGoods = "";

    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i].price == goodsPrice) {
          yourGoods += `${i + 1} Title: ${arguments[i].title}. Price: ${arguments[i].price}. Quantity: ${arguments[i].quantity}. \n`;
        }
  };

  if (yourGoods.length != 0) {
    console.log(yourGoods)
  } else {
    console.log(`There are no goods with a price of ${goodsPrice}.`);
  };
};

aboutGoods(firstGoods, secondGoods, thirdGoods);

//3) Створіть об'єкт, що представляє книгу, з властивостями, такими як назва, автор і рік видання.
// Створіть масив таких об'єктів і відсортуйте його за роком видання.

const books = [
  { title: "For Whom the Bell Tolls", author: "Ernest Miller Hemingway", year: "1940" },
  { title: "The Sound and the Fury", author: "William Cuthbert Faulkner", year: "1929" },
  { title: "The Lord of the Rings", author: "John Ronald Reuel Tolkie", year: "1949" },
  { title: "Le Petit Prince", author: "Antoine Marie Roger de Saint-Exupéry", year: "1942" },
];

function sortBooks(arr) {
  for (let i = 0; i < arr.length - 1; i++)
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].year > arr[j + 1].year) {
        let next = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = next;
      }
    }

  return arr;
}

console.log(sortBooks(books));

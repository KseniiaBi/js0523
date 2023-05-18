//6) Компанія по транспортуванню меблів заносить будь-які меблі
// на 1 - й поверх безкоштовно,
// з 2 - го по 4 - й включно - по 20грн.,
// з 5 - го по 7 - й включно - по 30грн.,
// а з 8 - го и вище - по 40грн.
//Спитайте у користувача, на який поверх треба занести меблі,
// и розрахуйте вартість заносу.

let floor = +prompt('Enter the floor number, please');
let cost;
if (floor === 1) {
  cost = 0;
} else if (floor >= 2 && floor <= 4) {
  cost = 20;
} else if (floor >= 5 && floor <= 7) {
  cost = 30;
} else {
  cost = 40;
}
console.log(
  `The cost of moving furniture to the ${floor} floor is ${cost} UAH.`
);

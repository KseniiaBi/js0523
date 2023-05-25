//1) Дано масив  colors = ['magenta', 'cyan', 'firebrick', 'springgreen', ‘skyblue'] виведіть кольори з нього кожен виклик функції
console.log("---Task1");
let colors = ["magenta", "cyan", "firebrick", "springgreen", "skyblue"];
function showColors(colorArray) {
  let index = 0;
  return () => console.log(colorArray[index++]);
}
let showColor = showColors(colors);
for (let i=0; i<4; i++){
  showColor();
}

//2) Написати функцію, що сумує будь-яку кількість аргументів, що виглядатиме наступним чином  (2)(3)() => 5 (2)(3)(5)() => 10
console.log("---Task2");
function sum() {
  if (arguments.length == 0) {
    console.log("no arguments");
  } else {
    let sum = 0;
    for (elem of arguments) {
      sum += elem;
    }
    console.log(sum);
  }
}
sum();
sum(2, 3);
sum(2, 3, 5);
sum(2, 3, 5, 10, 22);

//3) Написати рекурсивну функцію, яка при кожному виклику генерує наступне число Фібоначчі.
console.log("---Task3");
function fibonachi() {
  let index = 0;
  let calculate = (number) => (number <= 1) ? number : calculate(number-1) + calculate(number-2);
  return () => calculate(index++);
}  
let nextFibNum = fibonachi();
for (let i=0; i<11; i++){
  console.log(nextFibNum());
}



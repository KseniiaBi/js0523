//--------------------------TASK 1---------------------------------------
//1) Дано масив  colors = ['magenta', 'cyan', 'firebrick', 'springgreen', ‘skyblue']
// виведіть кольори з нього кожен виклик функції

let colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

function getColor() {
  let index = 0;
  return function () {
    if (index === colors.length) {
      index = 0;
    }
    let indexColor = colors[index];
    index++;
    return console.log(indexColor);
  };
}

let selectedColor = getColor();
selectedColor();
selectedColor();
selectedColor();
selectedColor();
selectedColor();
selectedColor();
selectedColor();

// Наступні дві задачки вдалися не легко. Сам алгоритм обчислення
// я розумію як робити, а ось реалізація цього процесу в мене викликає багато помилок.

//--------------------------TASK 2---------------------------------------
//2) Написати функцію, що сумує будь-яку кількість аргументів,
//що виглядатиме наступним чином(2)(3)() => 5(2)(3)(5)() => 10

function sum(a) {
  if (a !== undefined) {
    let sumCurrent = a;

    function sumNext(b) {
      if (b !== undefined) {
        sumCurrent += b;
        return sumNext;
      } else {
        return sumCurrent;
      }
    }
    return sumNext;
  }
}

console.log(sum(5)(2)(3)());

//--------------------------TASK 3---------------------------------------
//3) Написати рекурсивну функцію, яка при кожному виклику генерує
//наступне число Фібоначчі.

function fibonachi() {
  let index = 0;

  function currentNumber(n) {
    if (n <= 1) {
      return n;
    }

    return currentNumber(n - 1) + currentNumber(n - 2);
  }

  return function () {
    let result = currentNumber(index);
    index++;
    console.log(result);
    return result;
  };
}

let currentFibbonachi = fibonachi();

currentFibbonachi();
currentFibbonachi();
currentFibbonachi();
currentFibbonachi();
currentFibbonachi();
currentFibbonachi();

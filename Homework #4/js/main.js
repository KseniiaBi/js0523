// 1) Дано масив  colors = ['magenta', 'cyan', 'firebrick', 'springgreen', ‘skyblue']
// виведіть кольори з нього кожен виклик функції.

let colors = ["magenta", "cyan", "firebrick", "springgreen", "skyblue"];
let colorIndex = 0;

function printColors(arr) {
    
  if (colorIndex < arr.length) {
    console.log(arr[colorIndex]);
    colorIndex++;
  } else {
    colorIndex = 0;
  }
}

printColors(colors);


// 2) Написати функцію, що сумує будь - яку кількість аргументів,
//     що виглядатиме наступним чином(2)(3)() => 5(2)(3)(5)() => 10
let numbers = [1, 2, 4, 6, 8, 9, 10, 10];

function sumNumbers(array) {
    let sum = 0;
    for (let arguments of array) {
        sum += arguments;
    }
    return sum;
}

console.log(sumNumbers(numbers));//50

// 3) Написати рекурсивну функцію, яка при кожному виклику генерує наступне число Фібоначчі.

// I don`t know)
// Нажаль, цього разу не було часу розібратись і подумати. Чекаю на рішення на лекіції))
// Думаю, що це задача із співбесіди)) 
function genFibonacci(currentNum = 1, nextNum = 2) {

    if (nextNum > 100) return;

    console.log(nextNum);
    
    let newNum = currentNum + nextNum;

    genFibonacci(nextNum, newNum);  
}

genFibonacci();


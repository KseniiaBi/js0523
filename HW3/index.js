// ДЗ:
// 1) Дано масив з числами. Числа можуть бути більше чи менше нуля Знайдіть суму додатніх елементів масиву.
const arr1 = [-1, 2, -9, 8, 3];

function arrToSumm() {
    let result = 0;
    for (let i = 0; i < arr1.length; i++) {
       
        if (arr1[i] > 0) {
          result += arr1[i]
        }
    }
    return result;
}

console.log(arrToSumm(arr1));

// 2) Дано масив  з числами, наприклад: [10, 20, 30, 50, 235, 3000].
//  Виведіть на екран тільки ті числа , котрі починаються на  1, 2 чи 5.

const arr2 = [10, 20, 30, 50, 235, 3000];

for (let index = 0; index < arr2.length; index++) {
    const element = arr2[index];
    
    let res = element.toString()[0]
    if (res == '1' || res == '2' || res == '5') {
        console.log(element);
    }
    
}


// 3) Дано масив чисел. Напишіть стрілкову функцію, котра повертає середнє арифметичне його елементів
const arr3 = [10, 20, 30, 50, 235, 3000, 500];

const arrow = (arr) => {
    let index = 0;
    let length = arr.length;

    for(let i = 0; i < arr.length; i++) {

        if (arr[i] > 0) {
            index += arr[i]
        }
    }

    let divide = index / length;

    return divide;
}

console.log(arrow(arr3));

// 4) Дано масив з числами. Перевірте чи є в ньому два однакових значення поспіль. Виведіть "так" чи "ні"

const arr4 = [10, 20, 30, 50, 50, 50, 235, 3000, 30001, 20, 351, 35];

function twoNum(arr) {
    for (let index = 0; index < arr.length; index++) {

        if (arr[index] == arr[index + 1]) {
            return 'так';
        };
    };

    return 'ні'; 
};
   
console.log(twoNum(arr4));


// 5) Скільки цілих чисел з діапазону 1-1000 містять цифру 3?  PS: 33 - одне число 


function numberThreeInRange (n) {

    let count = 0;

    for (let index = 1; index <= n; index++) {
        if (index.toString().includes('3')) {
          count++;
        }           
    }

    return count;
}

console.log(numberThreeInRange(1000));



// 6)  Напишіть стрілкову функцію isEven() яка параметром отримує ціле число и перевіряє: парне воно чи ні, повертає true або false. 

const isEven = n => {

    if (n % 2 == 0) {
      return  'true';
    } else {
       return 'false';
    };

};

console.log(isEven(7));


// 7) Рекурсією порахувати 11те число Фібоначчі

function fibonacci(n) {

    if (n == 0) {
        return 0;
    }

    if (n == 1) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
    
}

console.log(fibonacci(11));

// 8) Дано масив чисел. Виведіть послідовно його елементи, використовуючи рекурсію замість циклу

function arrayCount(arr, count = 0) {

    if(count < arr.length - 1) {
        return arr[count] + ' ' + arrayCount(arr, count + 1)
    } else {
        return arr[count]
    }
}

console.log(arrayCount(arr2));

// 9) Напишіть рекурсивну функцію getDigitsSum (digit - цифра), яка параметром приймає ціле число и повертає суму его цифр. 
// Якщо вийшло число більше 9, знову рахувати суму  (9385756493 -> 59 -> 16 -> 7)

 function getDigitsSum(n) {
    let sum = 0;
    let arrNum = (""+n).split('');
    
    if(arrNum.length == 1) {
        return n;
    }

    for (let index = 0; index < arrNum.length; index++) {
        const element = arrNum[index];
        sum += +element
        
    }

    return getDigitsSum(sum);
 }

console.log(getDigitsSum(1233));
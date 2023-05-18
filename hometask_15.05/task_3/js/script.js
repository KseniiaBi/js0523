//3) відсортувати масив за допомогою бульбашкового способу [5,1,9,4,2,7,3,8,6]

let array = [5, 1, 9, 4, 2, 7, 3, 8, 6];
for (let i = 0; i < array.length; i++) {
  if (array[i] > array[i + 1]) {
    let arr = array[i];
    array[i] = array[i + 1];
    array[i + 1] = arr;
  }
}
console.log(array);

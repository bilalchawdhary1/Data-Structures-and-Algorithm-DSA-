// Mastering Arrays
// Arrays are used to store multiple values in a single variable.
// They are a type of data structure that can hold a collection of items, which can be of the same or different types.
// Arrays are zero-indexed, meaning the first element is at index 0.
// Arrays is linear DS witch store multiple values in a continuos memory location.

// let arr = new Array(5);
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Number(prompt("Enter your's Number's here"));
// }
// console.log(arr);

// Sum of Array
let arr1 = [10, 20, 300, 40, 50, 300];
// let sum = 0;
// for (let i = 0; i < arr1.length; i++) {
//   sum += arr1[i];
// }
// console.log(sum);

//Find Max value in Array
let max = arr1[0];
for (let i = 0; i < arr1.length; i++) {
  if (max < arr1[i]) {
    max = arr1[i];
  }
}
// console.log(max);
//Find Min value in Array
let min = arr1[0];
for (let i = 0; i < arr1.length; i++) {
  if (min > arr1[i]) {
    min = arr1[i];
  }
}
// console.log(min);

//Find Max and Smax value in Array
let max1 = Math.max(arr1[0], arr1[1]);
let max2 = Math.min(arr1[0], arr1[1]);
for (let i = 2; i < arr1.length; i++) {
  if (max1 < arr1[i]) {
    max2 = max1;
    max1 = arr1[i];
  } else if (max2 < arr1[i] && max1 != arr1[i]) {
    max2 = arr1[i];
  }
}
// console.log(max1, max2);

// reverce Array
// let arr = [10, 20, 30, 40, 50, 60];
// let i = 0,
//   j = arr.length - 1;

// while (i <= j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }
// console.log(arr);
// 0 on the right site and 1 on the left side
let arrr = [0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1];
let i = 0,
  j = 0;

while (i < arrr.length) {
  if (arrr[i] == 0) {
    let temp = arrr[i];
    arrr[i] = arrr[j];
    arrr[j] = temp;
    j++;
  }
  i++;
}
console.log(arrr);

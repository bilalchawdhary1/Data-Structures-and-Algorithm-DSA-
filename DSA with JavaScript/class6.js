// Mastering Advance Array Problems
// 1 rotate 1 Element for left side in Array
let arr1 = [10, 20, 30, 40, 50, 60];
let copy = arr1[0]; // Store the first element
for (let i = 0; i < arr1.length - 1; i++) {
  arr1[i] = arr1[i] + 1; // Shift each element to the left
}
arr1[arr1.length - 1] = copy; // Place the first element at the end
console.log(arr1); // Print the modified array
// 2 rotate 1 Element for right side in Array
let arr2 = [10, 20, 30, 40, 50, 60];
let copy2 = arr2[arr2.length - 1]; // Store the last element
for (let i = arr2.length - 1; i > 0; i--) {
  arr2[i] = arr2[i - 1]; // Shift each element to the right
}
arr2[0] = copy2; // Place the last element at the start
console.log(arr2); // Print the modified array

// Mastering Advance Array Problems
// 1 rotate 1 Element for left side in Array
let arr1 = [10, 20, 30, 40, 50, 60];
let copy = arr1[0]; // Store the first element
for (let i = 0; i < arr1.length - 1; i++) {
  arr1[i] = arr1[i] + 1; // Shift each element to the left
}
arr1[arr1.length - 1] = copy; // Place the first element at the end
// console.log(arr1); // Print the modified array
// 2 rotate 1 Element for right side in Array
let arr2 = [10, 20, 30, 40, 50, 60];
let copy2 = arr2[arr2.length - 1]; // Store the last element
for (let i = arr2.length - 1; i > 0; i--) {
  arr2[i] = arr2[i - 1]; // Shift each element to the right
}
arr2[0] = copy2; // Place the last element at the start
// console.log(arr2); // Print the modified array

// 3 nasted loop
let arr3 = [10, 20, 30, 40, 50, 60];
for (let i = 0; i < arr3.length; i++) {
  for (let j = 0; j < arr3.length; j++) {
    // console.log(`i: ${i}, j: ${j}, value: ${arr3[i] + arr3[j]}`);
  }
}
// 4 rotate 1 Element for left side k time using nasted loop
// let arr4 = [10, 20, 30, 40, 50, 60];
// let k = prompt("Enter the number of times to rotate left:");
// k = k % arr4.length; // Normalize k to avoid unnecessary full rotations
// for (let i = 0; i < k; i++) {
//   let copy1st = arr4[0]; // Store the first element
//   for (let j = 0; j < arr3.length - 1; j++) {
//     arr4[j] = arr4[j + 1]; // Shift each element to the left
//   }
//   arr4[arr4.length - 1] = copy1st; // Place the first element at the end
// }
// console.log(arr4); // Print the modified array
// 5 rotate 1 Element for right side k time using nasted loop
// let arr4 = [10, 20, 30, 40, 50, 60];
// let k = prompt("Enter the number of times to rotate right:");
// k = k % arr4.length; // Normalize k to avoid unnecessary full rotations
// for (let i = 0; i < k; i++) {
//   let copy1st = arr4[arr4.length - 1]; // Store the last element
//   for (let j = arr4.length - 1; j > 0; j--) {
//     arr4[j] = arr4[j - 1]; // Shift each element to the right
//   }
//   arr4[0] = copy1st; // Place the last element at the start
// }
// console.log(arr4); // Print the modified array
// 6 rotate Element for left side k time using mode
// let arr5 = [10, 20, 30, 40, 50, 60];
// let temp = new Array(arr5.length);
// let k = 2; // Number of times to rotate left
// for (let i = 0; i < arr5.length; i++) {
//   // let newIndex = (i - k + arr5.length) % arr5.length; // Calculate the new index
//   // temp[newIndex] = arr5[i]; // Place the element in the new position
//   temp[i] = arr5[(i + k) % arr5.length];
// }
// console.log(temp); // Print the modified array
// // 7 rotate Element for right side k time using mode
// let arr6 = [10, 20, 30, 40, 50, 60];
// let temp2 = new Array(arr6.length);
// let k2 = 3; // Number of times to rotate right
// for (let i = 0; i < arr6.length; i++) {
//   // let newIndex = (i + k2) % arr6.length; // Calculate the new index
//   // temp2[newIndex] = arr6[i]; // Place the element in the new position
//   temp2[(i + k2) % arr5.length] = arr6[i];
// }
// console.log(temp2); // Print the modified array
// 8 rotate Element for left side k time using reverse Function
// let arr7 = [1, 2, 3, 4, 5, 6];
// let k = prompt("Enter the number of times to rotate right:");
// k = k % arr7.length; // Normalize k to avoid unnecessary full rotations
// function reverse(arr, start, end) {
//   while (start < end) {
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
//   }
//   console.log(arr7);
// }
// reverse(arr7, 0, k - 1); // Reverse the entire array
// reverse(arr7, k, arr7.length - 1); // Reverse the second part
// reverse(arr7, 0, arr7.length - 1); // Reverse the first part
// console.log(arr7); // Print the modified array
// 9 rotate Element for right side k time using reverse Function
// let arr8 = [1, 2, 3, 4, 5, 6];
// let k2 = prompt("Enter the number of times to rotate right:");
// k2 = k2 % arr8.length; // Normalize k to avoid unnecessary full rotations
// function reverse(arr, start, end) {
//   while (start < end) {
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
//   }
//   console.log(arr8);
// }
// reverse(arr8, 0, arr8.length - 1); // Reverse the entire array
// reverse(arr8, 0, k2 - 1); // Reverse the first part
// reverse(arr8, k2, arr8.length - 1); // Reverse the second part
// console.log(arr8); // Print the modified array
// 10 Remove Duplicates from Sorted Array by using function
/**
//  * @param {number[]} nums
//  * @return {number}
//  */

// var removeDuplicates = function (nums) {
//   let j = 1;
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] !== nums[i + 1]) {
//       nums[j] = nums[i + 1];
//       j++;
//     }
//   }
//   return j; // Return the new length of the array
//   nums.length = j; // Adjust the length of the array to remove duplicates
// };
// console.log(removeDuplicates([1, 1, 2])); // Output: 2, nums = [1, 2]
// //  11 Marge Sorted Array
// function mergeSortedArrays(arr1, arr2) {
//   let mergedArray = [];
//   let i = 0,
//     j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       mergedArray.push(arr1[i]);
//       i++;
//     } else {
//       mergedArray.push(arr2[j]);
//       j++;
//     }
//   }

//   // If there are remaining elements in arr1
//   while (i < arr1.length) {
//     mergedArray.push(arr1[i]);
//     i++;
//   }

//   // If there are remaining elements in arr2
//   while (j < arr2.length) {
//     mergedArray.push(arr2[j]);
//     j++;
//   }

//   return mergedArray;
// }
// // Example usage:
// let array1 = [1, 3, 5];
// let array2 = [2, 4, 6];
// console.log(mergeSortedArrays(array1, array2)); // Output: [1, 2, 3, 4, 5, 6]
// // 12 Merge 2 Sorted Array by using function
// function mergeSortedArraysInPlace(arr1, arr2) {
//   let i = arr1.length - 1; // Last index of arr1
//   let j = arr2.length - 1; // Last index of arr2
//   let k = arr1.length + arr2.length - 1; // Last index of merged array

//   // Resize arr1 to accommodate elements from arr2
//   arr1.length = k + 1;

//   while (j >= 0) {
//     if (i >= 0 && arr1[i] > arr2[j]) {
//       arr1[k] = arr1[i];
//       i--;
//     } else {
//       arr1[k] = arr2[j];
//       j--;
//     }
//     k--;
//   }
// }
// // Example usage:
// let array1InPlace = [1, 3, 5];
// let array2InPlace = [2, 4, 6];
// mergeSortedArraysInPlace(array1InPlace, array2InPlace);
// console.log(array1InPlace); // Output: [1, 2, 3, 4, 5, 6]

// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
// var merge = function (nums1, m, nums2, n) {
//   let i = m - 1; // Last index of nums1's initial elements
//   let j = n - 1; // Last index of nums2
//   let k = m + n - 1; // Last index of merged array

//   // Resize nums1 to accommodate elements from nums2
//   nums1.length = m + n;

//   while (j >= 0) {
//     if (i >= 0 && nums1[i] > nums2[j]) {
//       nums1[k] = nums1[i];
//       i--;
//     } else {
//       nums1[k] = nums2[j];
//       j--;
//     }
//     k--;
//   }

//   // No need to return anything, nums1 is modified in-place
//   console.log(nums1); // Print the modified nums1 array
//   return nums1; // Return the modified nums1 array for testing purposes
// };

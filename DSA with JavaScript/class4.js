// Pattern Programming
// 1. Write a program to print the following pattern:
// *
// **
// ***
// ****
// *****
let n = 5; // Number of rows
let pattern = ""; // Initialize an empty string to store the pattern
for (let i = 1; i <= n; i++) {
  // Loop through each row
  for (let j = 1; j <= i; j++) {
    // Loop to print stars in each row
    pattern += "*"; // Append a star to the pattern string
  }
  pattern += "\n"; // Move to the next line after each row
}
console.log(pattern); // Print the final pattern

// 2. Write a program to print the following pattern:
//1
//12
//123
//1234
//12345
let n1 = 5; // Number of rows
let pattern1 = ""; // Initialize an empty string to store the pattern
for (let i = 1; i <= n1; i++) {
  // Loop through each row
  for (let j = 1; j <= i; j++) {
    // Loop to print numbers in each row
    pattern1 += j; // Append the current number to the pattern string
  }
  pattern1 += "\n"; // Move to the next line after each row
}
console.log(pattern1); // Print the final pattern

// 3. Write a program to print the following pattern:
//A
//AB
//ABC
//ABCD
//ABCDE
let n2 = 5; // Number of rows
let pattern2 = ""; // Initialize an empty string to store the pattern
for (let i = 0; i < n2; i++) {
  // Loop through each row
  for (let j = 0; j <= i; j++) {
    // Loop to print letters in each row
    pattern2 += String.fromCharCode(65 + j); // Append the current letter to the pattern string
  }
  pattern2 += "\n"; // Move to the next line after each row
}
console.log(pattern2); // Print the final pattern

// 4. Write a program to print the following pattern:
//*****
//****
//***
//**
//*
let n3 = 5; // Number of rows
let pattern3 = ""; // Initialize an empty string to store the pattern
for (let i = n3; i >= 1; i--) {
  // Loop through each row in reverse order
  for (let j = 1; j <= i; j++) {
    // Loop to print stars in each row
    pattern3 += "*"; // Append a star to the pattern string
  }
  pattern3 += "\n"; // Move to the next line after each row
}
console.log(pattern3); // Print the final pattern

// 5. Write a program to print the following pattern:
//    *
//   ***
//  *****
// *******
//*********
let n4 = 5; // Number of rows
let pattern4 = ""; // Initialize an empty string to store the pattern
for (let i = 1; i <= n4; i++) {
  // Loop through each row
  for (let j = n4; j > i; j--) {
    // Loop to print spaces before stars
    pattern4 += " "; // Append a space to the pattern string
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    // Loop to print stars in each row
    pattern4 += "*"; // Append a star to the pattern string
  }
  pattern4 += "\n"; // Move to the next line after each row
}
console.log(pattern4); // Print the final pattern

// 6. Write a program to print the following pattern:
//     *
//    **
//   ***
//  ****
// *****
let n5 = 5; // Number of rows
let pattern5 = ""; // Initialize an empty string to store the pattern
for (let i = 1; i <= n5; i++) {
  // Loop through each row
  for (let j = n5; j > i; j--) {
    // Loop to print spaces before stars
    pattern5 += " "; // Append a space to the pattern string
  }
  for (let k = 1; k <= i; k++) {
    // Loop to print stars in each row
    pattern5 += "*"; // Append a star to the pattern string
  }
  pattern5 += "\n"; // Move to the next line after each row
}
console.log(pattern5); // Print the final pattern
// 7. Write a program to print the following pattern:

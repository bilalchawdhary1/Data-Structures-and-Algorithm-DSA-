// let amount = Number(prompt("Enter the amount:"));

// if (isNaN(amount) && amount < 0) {
//   console.log("Invalid amount");
// }
// if (amount > 0 && amount <= 100) {
//   console.log(amount); // 0% discount
// } else if (amount > 100 && amount <= 500) {
//   console.log(amount - Math.floor(amount * 0.05)); // 5% discount
// } else if (amount > 500 && amount <= 1000) {
//   console.log(amount - amount * 0.07); // 7% discount
// } else if (amount > 1000) {
//   console.log(amount - amount * 0.085); // 15% discount
// } else {
//   console.log("Invalid amount");
// }

// 2 electricity bills
// let units = Number(prompt("Enter the number of units:"));
// let bill = 0;
// if (isNaN(units) || units < 0) {
//   console.log("Invalid input");
// }
// if (units <= 100) {
//   bill = units * 4; // 4 per unit
// } else if (units > 100 && units <= 200) {
//   bill = 100 * 4 + (units - 100) * 6; // 6 per unit for next 200 units
// } else if (units > 200 && units <= 400) {
//   bill = 100 * 4 + 100 * 6 + (units - 200) * 8; // 6 per unit for above 300 units
// } else {
//   bill = 100 * 4 + 100 * 6 + 200 * 8 + (units - 400) * 13; // 13 per unit for above 400 units
// }
// console.log("Total bill: " + bill);

// 3 number palindrome
// let num = prompt("Enter a number:");
// let strNum = num.toString();
// let reversedStrNum = strNum.split("").reverse().join("");
// if (strNum === reversedStrNum) {
//   // palindrome
//   console.log(num + " is a palindrome");
// } else {
//   console.log(num + " is not a palindrome");
// }
/**
//  * @param {number} x
//  * @return {boolean}
//  */
let x = prompt("Enter a number:");
var isPalindrome = function (x) {
  let strNum = x.toString();
  let reversedStrNum = strNum.split("").reverce().join("");
  if (x === reversedStrNum) {
    return console.log(true);
  } else {
    return console.log(false);
  }
};

// Understanding Conditionals Here's

//1 Valid Vote a simple example of using conditionals in JavaScript
// to check if a person is eligible to vote based on their age.
// A person is eligible to vote if they are 18 years or older.
// let pmt = Number(prompt("waht's your age?"));

// if (isNaN(pmt)) {
//   console.log("Please enter a valid number.");
// } // A simple example of using conditionals in JavaScript
// else if (pmt >= 18) {
//   console.log("You are eligible to vote.");
// } //a simple example of using conditionals in JavaScript
// else {
//   console.log("You are not eligible to vote.");
// } // A simple example of using conditionals in JavaScript
// // console.log("Thank you for checking your eligibility to vote.");

// 2 Shop Discount
// to calculate the discount on a product based on its price.
// let price = Number(prompt("Enter the price of the product:"));
// if (isNaN(price)) {
//   console.log("Please enter a valid number.");
// } else if (price > 0 && price <= 5000) {
//   console.log(price);
//   console.log("No discount available.");
// } else if (price > 5000 && price <= 7000) {
//   console.log(price - Math.floor((price * 5) / 100));
//   console.log("Discount of 5% applied.");
// } else if (price > 7000 && price <= 9000) {
//   console.log(price - Math.floor((price * 10) / 100));
//   console.log("Discount of 10% applied.");
// } else if (price > 9000) {
//   console.log(price - Math.floor((price * 20) / 100));
//   console.log("Discount of 20% applied.");
// } else {
//   console.log("Please enter a valid price.");
// } // A simple example of using conditionals in JavaScript

// 3 Electricity Unit Count
// let unit = Number(prompt("Enetr Electricity Unit Here's")); //1200
// let amount = 0;
// if (unit > 400) {
//   amount = (unit - 400) * 13;
//   unit = 400;
// }
// if (unit > 200 && unit <= 400) {
//   amount += (unit - 200) * 8;
//   unit = 200;
// }
// if (unit > 100 && unit <= 200) {
//   amount += (unit - 100) * 6;
//   unit = 100;
// }
// amount += unit * 4;
// console.log(amount);

// // 4 INR Denominnation
// let amount = Number(prompt("Enetr your Amount Here's")); //1200
// if (isNaN(amount) || amount <= 0) {
//   console.log("Plase Enter a Valid Number");
// }
// if (amount >= 5000) {
//   console.log("5000 Note In Amount = " + Math.floor(amount / 5000));
//   amount = amount % 5000;
// }
// if (amount >= 1000) {
//   console.log("1000 Note In Amount = " + Math.floor(amount / 1000));
//   amount = amount % 1000;
// }
// if (amount >= 500) {
//   console.log("500 Note In Amount = " + Math.floor(amount / 500));
//   amount = amount % 500;
// }
// if (amount >= 100) {
//   console.log("100 Note In Amount = " + Math.floor(amount / 100));
//   amount = amount % 100;
// }
// if (amount >= 50) {
//   console.log("50 Note In Amount = " + Math.floor(amount / 50));
//   amount = amount % 50;
// }
// if (amount >= 20) {
//   console.log("20 Note In Amount = " + Math.floor(amount / 20));
//   amount = amount % 20;
// }
// if (amount >= 10) {
//   console.log("10 Note In Amount = " + Math.floor(amount / 10));
//   amount = amount % 10;
// }
// if (amount >= 5) {
//   console.log("5 coins" + Math.floor(amount / 5));
//   amount = amount % 5;
// }
// if (amount >= 2) {
//   console.log("2 coins" + Math.floor(amount / 2));
//   amount = amount % 2;
// }
// if (amount === 1) {
//   console.log("1 conis" + amount);
// }

// 5 Ternary Operator & Nested Ternary Operator
// Ternary Operator combination of  ? :
// Example here's of Ternary Operator
console.log(12 > 13 ? "ture" : "false");
// Example here's of Nested Ternary Operator
let num = -12;
console.log(num > 0 ? "Positive Number" : num < 0 ? "Nagitive Number" : "Zero");

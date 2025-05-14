// Master the Basics of js
// 1 let or var
// let is block scoped, var is function scoped
// let is not hoisted, var is hoisted
// let is not redeclarable, var is redeclarable
// let is not global, var is global
// let is not window scoped, var is window scoped
// let is not accessible before declaration, var is accessible before declaration

// 2 what is type conversion
// Type conversion is the process of converting a value from one type to another.
// For example, converting a string to a number, or a number to a string.
// Type conversion can be done using built-in functions like Number(), String(), and Boolean().

// 3 what is type coercion
// Type coercion is the automatic or implicit conversion of values from one type to another.
// For example, when adding a number and a string, JavaScript will convert the number to a string and concatenate them.

// 4 swap two numbers without using a third variable
let a = 5,
  b = 10;
a = a + b; // a = 15
b = a - b; // b = 5
a = a - b; // a = 10
console.log(a, b); // 10 5

// 5 pre and post in js
// Pre-increment: The variable is incremented before its value is used in the expression.
// Post-increment: The variable is incremented after its value is used in the expression.
let x = 5;
// unary oprater is a operator which takes only one operand
x = x++ + ++x; // x = 5 + 7 = 12
console.log(++x); // 6 (pre-increment)
console.log(x++); // 6 (post-increment)
console.log(x); // 7 (after post-increment)

// 6 math functions
// Math functions are built-in functions in JavaScript that perform mathematical operations.
console.log(Math.abs(-5)); // absolute value
console.log(Math.ceil(5.2)); // round up to nearest integer
console.log(Math.floor(5.8)); // round down to nearest integer
console.log(Math.round(5.5)); // round to nearest integer
console.log(Math.max(5, 10, 15)); // maximum value
console.log(Math.min(5, 10, 15)); // minimum value
console.log(Math.pow(2, 3)); // power of a number
console.log(Math.sqrt(25)); // square root
console.log(Math.random()); // random number between 0 and 1
console.log(Math.random() * 10); // random number between 0 and 10
console.log(Math.random() * 10 + 1); // random number between 1 and 10

// 7 Ganrate 4 Digit OTP
// OTP (One Time Password) is a password that is valid for only one login session or transaction
// It is used to enhance security and prevent unauthorized access to accounts or systems.
// OTPs are typically sent to the user's registered mobile number or email address and are valid for a short period of time.
// OTPs can be generated using various algorithms and can be in the form of numeric codes, alphanumeric codes, or QR codes.
// OTPs are commonly used in online banking, e-commerce, and other online services to verify the identity of the user and ensure secure transactions.
function generateOTP() {
  let otp = "";
  for (let i = 0; i < 4; i++) {
    otp += Math.floor(Math.random() * 10); // generate a random digit between 0 and 9
  }
  return otp;
}

console.log(generateOTP()); // example output: 1234
console.log(generateOTP()); // example output: 5678

// 8 Claculate the area and perimeter of a rectangle
// Area of a rectangle = length * width
// Perimeter of a rectangle = 2 * (length + width)
function calculateArea(length, width) {
  return length * width;
}

function calculatePerimeter(length, width) {
  return 2 * (length + width);
}

console.log(calculateArea(5, 10)); // example output: 50
console.log(calculatePerimeter(5, 10)); // example output: 30

// 9 Check if a number is even or odd
// An even number is divisible by 2, while an odd number is not divisible by 2.
function isEven(num) {
  return num % 2 === 0; // returns true if even, false if odd
}

function isOdd(num) {
  return num % 2 !== 0; // returns true if odd, false if even
}

console.log(isEven(4)); // example output: true
console.log(isOdd(5)); // example output: true

// 10 area of tryangle
// Area of a triangle = (base * height) / 2
function calculateTriangleArea(base, height) {
  return (base * height) / 2;
}

console.log(calculateTriangleArea(5, 10)); // example output: 25
console.log(calculateTriangleArea(10, 20)); // example output: 100

// area of tryangle by hero formula
// Hero's formula is a method for calculating the area of a triangle when the lengths of all three sides are known.
// It is named after the ancient Greek mathematician Hero of Alexandria.
// The formula is as follows:
// Area = sqrt(s * (s - a) * (s - b) * (s - c))
// where s is the semi-perimeter of the triangle, and a, b, and c are the lengths of the sides of the triangle.
function calculateTriangleAreaByHero(a, b, c) {
  let s = (a + b + c) / 2; // semi-perimeter
  return Math.sqrt(s * (s - a) * (s - b) * (s - c)); // area using Hero's formula
}

console.log(calculateTriangleAreaByHero(5, 10, 12)); // example output: 24.0
console.log(calculateTriangleAreaByHero(10, 20, 30)); // example output: 0.0 (not a valid triangle)
console.log(calculateTriangleAreaByHero(5, 5, 5)); // example output: 10.825317547305486 (equilateral triangle)
console.log(calculateTriangleAreaByHero(3, 4, 5)); // example output: 6.0 (right triangle)
console.log(calculateTriangleAreaByHero(7, 8, 9)); // example output: 26.832815729997478 (scalene triangle)

let num = Number(prompt("Enetr your num Here's")); //1200

if (isNaN(num) || num <= 0) {
  console.log("Plase Enter a Valid num");
} else {
  // 1 For Sum
  //   let sum = 0;
  //   for (let i = 1; i <= num; i++) {
  //     sum = sum + i;
  //   }
  // 2 For Factorial
  //   factorial means the product of all positive integers from 1 to n
  //   let fact = 1;
  //   for (let i = 1; i <= num; i++) {
  //     fact = fact * i;
  //   }
  //   console.log(fact);
  // 3 For Factors // Factors means how many number divide fully by given number
  //   for (let i = 1; i <= Math.floor(num / 2); i++) {
  //     if (num % i === 0) {
  //       console.log(i);
  //     }
  //   }
  //   console.log(num);
  //   4 For Prime Number
  //   let isPrime = true;
  //   if (num === 1) {
  //     console.log("1 is not a prime number");
  //   } else {
  //     for (let i = 2; i <= Math.floor(num / 2); i++) {
  //       if (num % i === 0) {
  //         isPrime = false;
  //         break;
  //       }
  //     }
  //     if (isPrime) {
  //       console.log(num + " is a prime number");
  //     } else {
  //       console.log(num + " is not a prime number");
  //     }
  //   }
  //   5 Sum of the digits
  //   let sum = 0;
  //   let temp = num;
  //   while (temp > 0) {
  //     let digit = temp % 10;
  //     sum += digit;
  //     temp = Math.floor(temp / 10);
  //   }
  //   console.log("Sum of the digits of " + num + " is " + sum);
  // 6 reverse of a number
  //   let reverse = 0;
  //   let temp = num;
  //   while (temp > 0) {
  //     let digit = temp % 10;
  //     reverse = reverse * 10 + digit;
  //     temp = Math.floor(temp / 10);
  //   }
  //   console.log("Reverse of " + num + " is " + reverse);
  // 7 Strong number ex 145 // if fictorial sum of the given number digits = origenal number it's called strong number.
  let sum = 0;
  let temp = num;
  while (temp > 0) {
    let lastDigit = temp % 10;
    let fact = 1;
    for (let i = 1; i <= lastDigit; i++) {
      fact = fact * i;
    }
    sum += fact;
    temp = Math.floor(temp / 10);
    console.log(fact);
  }
  console.log(sum);

  if (num === sum) {
    console.log("Strong Number");
  } else {
    console.log("Not Strong Number");
  }
}

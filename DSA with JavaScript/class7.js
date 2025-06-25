// Strings in JavaScript | DSA with JavaScript | Class 7
// Strings in JavaScript
// Strings are used to represent text data in JavaScript.
// They can be created using single quotes, double quotes, or backticks.
let singleQuoteString = "Hello, World!";
let doubleQuoteString = "Hello, World!";
let backtickString = `Hello, World!`;
// Backticks allow for multi-line strings and string interpolation.
let name = "John";
let greeting = `Hello, ${name}!`; // String interpolation
// console.log(singleQuoteString); // Output: Hello, World!
// console.log(doubleQuoteString); // Output: Hello, World!
// console.log(backtickString); // Output: Hello, World!
// console.log(greeting); // Output: Hello, John!
// String Methods
// String methods are built-in functions that allow you to manipulate and work with strings.
let exampleString = "Hello, World!";
// Length
console.log(exampleString.length); // Output: 13
// Accessing Characters
console.log(exampleString[0]); // Output: H
// String Methods
console.log(exampleString.toUpperCase()); // Output: HELLO, WORLD!
console.log(exampleString.toLowerCase()); // Output: hello, world!
console.log(exampleString.includes("World")); // Output: true
console.log(exampleString.indexOf("o")); // Output: 4
console.log(exampleString.slice(0, 5)); // Output: Hello
console.log(exampleString.replace("World", "JavaScript")); // Output: Hello, JavaScript!
console.log(exampleString.split(", ")); // Output: [ 'Hello', 'World!' ]
// String Concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
// console.log(fullName); // Output: John Doe
// Template Literals
let age = 30;
let personInfo = `Name: ${fullName}, Age: ${age}`;
// console.log(personInfo); // Output: Name: John Doe, Age: 30
// String Comparison
let str1 = "apple";
let str2 = "banana";
console.log(str1 < str2); // Output: true (based on lexicographical order)
console.log(str1 > str2); // Output: false (based on lexicographical order)
// String Iteration
for (let char of exampleString) {
  console.log(char); // Outputs each character in the string
}
// String Search
let searchString = "Hello, World!";
console.log(searchString.indexOf("World")); // Output: 7
console.log(searchString.lastIndexOf("o")); // Output: 8
console.log(searchString.search("World")); // Output: 7
// String Trimming
let whitespaceString = "   Hello, World!   ";
console.log(whitespaceString.trim()); // Output: "Hello, World!"
// String Conversion
let numString = "123";
let num = Number(numString);
console.log(num); // Output: 123
let strFromNum = String(num);
console.log(strFromNum); // Output: "123"
// String to Number Conversion
let floatString = "3.14";
let floatNum = parseFloat(floatString);
console.log(floatNum); // Output: 3.14
let intString = "42";
let intNum = parseInt(intString);
console.log(intNum); // Output: 42
// some details about parseFloat and parseInt
// parseFloat converts a string to a floating-point number.
// It can handle decimal numbers and returns a number.
// parseInt converts a string to an integer.
// It can handle both decimal and hexadecimal numbers, but it returns only the integer part.
// If the string cannot be converted, it returns NaN (Not a Number).
// Example of parseFloat and parseInt
let floatExample = "3.14abc";
let parsedFloat = parseFloat(floatExample);
console.log(parsedFloat); // Output: 3.14 (parses until it hits a non-numeric character)
let intExample = "42abc";
let parsedInt = parseInt(intExample);
console.log(parsedInt); // Output: 42 (parses until it hits a non-numeric character)
// If the string starts with a non-numeric character, both parseFloat and parseInt return NaN.
let invalidString = "abc123";
let invalidFloat = parseFloat(invalidString);
let invalidInt = parseInt(invalidString);
console.log(invalidFloat); // Output: NaN
console.log(invalidInt); // Output: NaN
// Summary
// Strings are essential for working with text data in JavaScript.
// They can be created using different quote styles and manipulated using various methods.
// Understanding string methods, concatenation, and conversion is crucial for effective string handling in JavaScript

// Common String Methods
// 1. charAt(index): Returns the character at the specified index.
console.log(exampleString.charAt(0)); // Output: H
// 2. concat(string1, string2, ...): Concatenates two or more strings.
let str01 = "Hello";
let str02 = "World";
console.log(str01.concat(" ", str02)); // Output: Hello World
// 3. endsWith(searchString): Checks if the string ends with the specified substring.
console.log(exampleString.endsWith("World!")); // Output: true
// 4. startsWith(searchString): Checks if the string starts with the specified substring.
console.log(exampleString.startsWith("Hello")); // Output: true
// 5. repeat(count): Returns a new string with the specified number of repetitions.
console.log("Hello ".repeat(3)); // Output: Hello Hello Hello
// 6. toString(): Converts the string to a string (useful for objects).
let obj = {name: "JavaScript"};
console.log(obj.toString()); // Output: [object Object]
// 7. valueOf(): Returns the primitive value of the string object.
let strObj = new String("Hello, World!");
console.log(strObj.valueOf()); // Output: Hello, World!
// 8. match(regexp): Searches the string for a match against a regular expression and returns an array of matches.
let regex = /World/;
console.log(exampleString.match(regex)); // Output: [ 'World', index: 7, input: 'Hello, World!', groups: undefined ]

//1 Print each character in new line
let exampleStr = "HelloWorld!";
for (let char of exampleStr) {
  console.log(char);
}
// Output:
// H
// e
// l
// l
// o
// W
// o
// r
// l
// d
// !
//2 Print in reverse order
let reverseStr = exampleStr.split("").reverse().join("");
console.log(reverseStr); // Output: !dlroWolleH
// explain how we can reverse a string
// To reverse a string in JavaScript, we can follow these steps:
// 1. Convert the string into an array of characters using the split() method.
// 2. Reverse the array using the reverse() method.
// 3. Join the reversed array back into a string using the join() method.
// This process effectively reverses the order of characters in the original string.
let str = "I am JavaScript developer"; // Example string
// 3. Print the string in reverse order
let reversedString = str.split("").reverse().join("");
console.log(reversedString); // Output: repoleved tpircSavaJ ma I
// reverse only the words in the string
let reverseWords = str.split(" ").reverse().join(" ");
console.log(reverseWords); // Output: developer JavaScript am I
// reverse only the words in the string
let reverseWordsOnly = str
  .split(" ")
  .map(word => word.split("").reverse().join(""))
  .join(" ");
console.log(reverseWordsOnly); // Output: I ma tpircSavaJ repoleved

// 4. Check the string is palindrome or not
function isPalindrome(str) {
  // Remove spaces and convert to lowercase
  let cleanedStr = str.replace(/\s+/g, "").toLowerCase();
  // Reverse the cleaned string
  let reversedStr = cleanedStr.split("").reverse().join("");
  // Check if the cleaned string is equal to the reversed string
  return cleanedStr === reversedStr;
}
// Example usage
let palindromeString = "A man a plan a canal Panama";
console.log(isPalindrome(palindromeString)); // Output: true
let nonPalindromeString = "Hello, World!";
console.log(isPalindrome(nonPalindromeString)); // Output: false

let str002 = "Hello";
let isPalindrome = str002 === str002.split("").reverse().join("");
console.log(isPalindrome); // Output: false (since "Hello" is not a palindrome)

// 5. Convert string characters to ASCII values
function stringToAscii(str) {
  let asciiValues = [];
  for (let char of str) {
    asciiValues.push(char.charCodeAt(0));
  }
  return asciiValues;
}
// Example usage
let asciiString = "Hello";
console.log(stringToAscii(asciiString)); // Output: [72, 101, 108, 108, 111]
// 6. Convert ASCII values back to string characters
function asciiToString(asciiArray) {
  let str = "";
  for (let ascii of asciiArray) {
    str += String.fromCharCode(ascii);
  }
  return str;
}
// Example usage
let asciiArray = [72, 101, 108, 108, 111];
console.log(asciiToString(asciiArray)); // Output: Hello
// 7 Toggle case of each character in the string
function toggleCase(str) {
  let toggledStr = "";
  for (let char of str) {
    if (char === char.toUpperCase()) {
      toggledStr += char.toLowerCase();
    } else {
      toggledStr += char.toUpperCase();
    }
  }
  return toggledStr;
}
// Example usage
let toggleString = "Hello World!";
console.log(toggleCase(toggleString)); // Output: hELLO wORLD!
// 8. Count the number of vowels in a string
function countVowels(str) {
  let vowelCount = 0;
  let vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }
  return vowelCount;
}
// Example usage
let exampleString2 = "Hello World!";
console.log(countVowels(exampleString2)); // Output: 3
// 9. Count the number of consonants in a string
function countConsonants(str) {
  let consonantCount = 0;
  let vowels = "aeiouAEIOU";
  for (let char of str) {
    if (char.match(/[a-zA-Z]/) && !vowels.includes(char)) {
      consonantCount++;
    }
  }
  return consonantCount;
}
// Example usage
let exampleString3 = "Hello World!";
console.log(countConsonants(exampleString3)); // Output: 7
// 10. Find the longest word in a string
function findLongestWord(str) {
  let words = str.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
// Example usage
let exampleString4 = "Hello World!";
console.log(findLongestWord(exampleString4)); // Output: "Hello"
// 11. Find the shortest word in a string
function findShortestWord(str) {
  let words = str.split(" ");
  let shortestWord = words[0];
  for (let word of words) {
    if (word.length < shortestWord.length) {
      shortestWord = word;
    }
  }
  return shortestWord;
}
// Example usage
let exampleString5 = "Hello World!";
console.log(findShortestWord(exampleString5)); // Output: "World!"
// 12. Count the number of words in a string
function countWords(str) {
  let words = str.trim().split(/\s+/); // Split by whitespace and remove extra spaces
  return words.length;
}
// Example usage
let exampleString6 = "Hello World! This is a test.";
console.log(countWords(exampleString6)); // Output: 7
// 13. Remove all vowels from a string
function removeVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, ""); // Use regex to remove vowels
}
// Example usage
let exampleString7 = "Hello World!";
console.log(removeVowels(exampleString7)); // Output: "Hll Wrld!"
// 14. Count the number of occurrences of a specific character in a string
function countCharacterOccurrences(str, char) {
  let count = 0;
  for (let c of str) {
    if (c === char) {
      count++;
    }
  }
  return count;
}
// Example usage
let exampleString8 = "Hello World!";
let characterToCount = "o";
console.log(countCharacterOccurrences(exampleString8, characterToCount)); // Output: 2
// 15. Count the number of characters how many times each character appears in a string
function countAllCharacterOccurrences(str) {
  let charCount = {};
  for (let c of str) {
    charCount[c] = (charCount[c] || 0) + 1; // how it works
    // If the character is not in the object, initialize it to 0 and then increment by 1
    // If it is already in the object, increment its count by 1
  }
  return charCount;
}
// Example usage
let exampleString9 = "Hello World!";
console.log(countAllCharacterOccurrences(exampleString9));
// Output: { H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1, '!': 1 }

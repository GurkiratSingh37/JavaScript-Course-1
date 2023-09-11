// trim()
// toUpperCase()
// toLowerCase()
// slice

// 1. trim() - is used to remove the extra spaces between before, between and after the string.
let firstName="  Gurkirat  ";

console.log(firstName.length);
firstName.trim();
console.log(firstName.length);

// but it gives the same length because the string is immutable, i.e. it will not change the existing string. It will give a new String.

let newFirstName=firstName.trim();
console.log(newFirstName.length);


// 2. toUpperCase() - change letters to upper case. It also gives us a new String.

console.log(newFirstName.toUpperCase());

// 3. toLowerCase()
console.log(newFirstName.toLowerCase());

// 4. slice()-In JavaScript, the slice() method is used to extract a portion of an array or a string and create a new array or 
// string containing the extracted elements. It does not modify the original array or string but returns a new one. 
// The slice() method takes two arguments: start and end, where start is the index at which to begin the extraction, 
// and end (optional) is the index at which to stop the extraction.

console.log(newFirstName.slice(2));

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const slicedFruits = fruits.slice(1, 4); // Returns ['banana', 'cherry', 'date']

// If the end index is omitted, slice() will extract elements from the start index to the end of the array.
const slicedFruitsToEnd = fruits.slice(2); // Returns ['cherry', 'date', 'elderberry']
console.log(slicedFruitsToEnd);


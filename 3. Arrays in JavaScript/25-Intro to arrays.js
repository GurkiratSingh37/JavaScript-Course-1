// intro to arrays
// reference type
// how to create arrays

// ordered collection of items

let fruits =["apple", "mango", "grapes"];

let numbers = [1, 2, 3, 4];
let mixed = [1, 212.3, "string", null, undefined];

console.log(mixed);
console.log(numbers);
console.log(fruits[2]);

// to check it's type
console.log(typeof(mixed)); // returns object WHY?!!

// So, inorder to confirm that it's an array we'll
console.log(Array.isArray(mixed));


let obj={}; // object literal
console.log(Array.isArray(obj));

// array indexing 


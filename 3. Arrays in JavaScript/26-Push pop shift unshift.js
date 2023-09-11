// array push pop
// array shift unshift

let fruits =["apple", "mango", "grapes"];

// 1. push() - array is mutable so it will change the array.
fruits.push("banana");
console.log(fruits); // this change doesn't happen with primitive data types - Strings

// 2. pop() - removes last element.
fruits.pop();
console.log(fruits);

let poppedFruit=fruits.pop();
console.log(fruits, poppedFruit);

// 3. unshift - unshift() method is used to add one or more elements to the beginning of an array. 
// It modifies the original array and returns the new length of the array after adding the elements.

fruits.unshift("banana");
console.log(fruits);

// 4. shift - shift() method is used to remove the first element from an array. It modifies the original array and returns the removed element.

fruits.shift();
console.log(fruits);


// DIFFERENCE BETWEEN PUSH & POP vs SHIFT & UNSHIFT
// 1. The push() method adds an element to the end of an array, and the pop() method removes the last element from the array.
// 2. Both operations have a time complexity of O(1) or constant time. This means that the time taken to perform push() or pop() 
   // does not depend on the size of the array. It is a constant time operation, regardless of how many elements the array contains.

// 1. The shift() method removes the first element from an array, and the unshift() method adds one or more elements to the beginning of an array.
// 2. Both operations have a time complexity of O(n) or linear time. This means that the time taken to perform shift() or unshift() 
//    is proportional to the number of elements in the array. If the array is large, these operations can take more time compared to push() and pop(), 
//    especially when moving all elements in the array to a new position.
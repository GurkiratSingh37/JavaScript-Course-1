// use const for creating array

const fruits = ["apple", "mango"];
fruits.push("banana");
console.log(fruits);

// 1. the const keyword is used to declare constants. When you declare an array using const, 
//  it means that the variable holding the array reference cannot be reassigned to a different array. 

// 2. However, it does not make the array immutable. You can still modify the elements of the array, such as adding or removing elements, 
//  even if the array itself is declared with const. e.g., add, remove, or modify elements) as long as you use methods like push, pop, splice, etc.
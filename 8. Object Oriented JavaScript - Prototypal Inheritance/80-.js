// Understanding Object Inheritance and '__proto__' in JavaScript

// Defining two objects 'obj1' and 'obj2'
const obj1 = {
    key1: "value1",
    key2: "value2"
};

const obj2 = {
    key3: "value3"
};

// Accessing a property from 'obj2' that doesn't exist
console.log(obj2.key1); // Outputs: undefined

// 1. To automatically check 'obj1' if a property is not available in 'obj2',
//    you can create objects with inheritance using 'Object.create()'.

// 1.1 Creating an empty object 'obj3' with 'obj1' as its prototype
const obj3 = Object.create(obj1);
obj3.key4 = "value4";

// When printing a property from 'obj3', it first checks 'obj3'.
console.log(obj3.key4); // Outputs: value4

// If a property is not found in 'obj3', it looks in the prototype chain.
console.log(obj3.key1); // Outputs: value1

// 1.2 '__proto__' and Prototype Chain:
// '__proto__' or '[[prototype]]' is a reference in each object to its prototype.
// In the console, '__proto__' shows the prototype of an object.

// 1.3 Note on '__proto__':
// '__proto__' and '[[prototype]]' are synonymous. They refer to the same concept.
// 'prototype' has a different meaning in JavaScript and is not related to '__proto__'.

// Accessing the '__proto__' of 'obj3' shows the reference to 'obj1'.
console.log(obj3.__proto__); // Outputs: { key1: 'value1', key2: 'value2' }

// 2. Now we will implement this knowledge of '__proto__' in example used priously in file '78' 
// 2.1 ---------------EXPLAINED INSIDE 79---------------------------

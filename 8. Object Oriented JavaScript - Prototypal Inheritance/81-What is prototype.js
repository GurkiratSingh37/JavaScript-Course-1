function hello(){
    console.log("Hello World");
}

// 1. In js, a function can be treated as an object. js function ===> function + object 
//    In JavaScript, a function is a first-class citizen and can be treated as an object.
//    It possesses both the behavior of a function and the characteristics of an object.


// The 'name' property of a function provides the function's name.
console.log("1. Function name:", hello.name); // Outputs: hello

// 2. You can add custom properties to functions, just like any other object.
hello.myOwnProperty = "very unique value";
console.log("2. Custom property:", hello.myOwnProperty); // Outputs: very unique value


// 3. Functions provide built-in properties like 'call', 'apply', and 'bind'.

// 4. ** A special property named 'prototype' is attached to functions.
//    This 'prototype' object is used for inheritance and method sharing.

// Accessing the 'prototype' property of the 'hello' function, which is initially an empty object {}.
console.log("3.",hello.prototype) // {} - this is given to us if we need to add any key-value pair inside this function we can add it by using this,

// 4.1 - Only functions provide the 'prototype' property.

// Adding properties and methods to the function's prototype.
hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz" ;
hello.prototype.sing = function(){
    return "lalala";
};
console.log("4.",hello.prototype);

// NOTE: The 'prototype' property is different from '__proto__'. '__proto__' creates a prototype chain,
// while 'prototype' is used for defining properties and methods that can be shared by instances created from the function.


// -------------------- NOW USE THIS prototype ON EXAMPLE WE'RE USING FROM PAST 3 FILES. EXPLAINED ON NEXT FILE 82 ---------------------------------

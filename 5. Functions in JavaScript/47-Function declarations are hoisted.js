// HOISTING

// 1. Function Declaration Hoisting:
// Function declarations are hoisted to the top of their containing scope, and they can be called before their actual declaration in the code.

foo(); // Outputs: "Hello, I am foo!"

function foo() {
  console.log("Hello, I am foo!");
}

//this will work in case of declaration

// 2. Function Expression Hoisting:
// Function expressions have their variable declarations hoisted, but the function assignment (defining the function) remains in its original place, 
// so you need to call them after the assignment to avoid errors.

var bar = function() {
    console.log("Hello, I am bar!");
  };
  
  bar(); // Outputs: "Hello, I am bar!"

  

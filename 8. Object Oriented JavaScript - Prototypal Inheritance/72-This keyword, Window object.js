// This keyword : Continued from 71-Methods.js
// Demonstrating the usage of the 'this' keyword and strict mode in JavaScript.

// 1. For example 
console.log(this); // Returns the 'window' document object.
console.log(window); // Returns the 'window' document object.

// 2. and i get window object when:
function myFunc(){
    console.log(this);
}
myFunc();

// 3. Why is this happening?
// This happens because the function "myFunc2()" becomes part of the 'window' object.
function myFunc2(){
    console.log("Hello World");
}
myFunc2();

// When we type window command on the console of the chrome and see that result we see that the myfunc() & myfunc2() are registered in that.
// So i can use window. ...  to call functions. : 
window.myFunc2(); 

// 4. So using this can create some problems so we use 'use strict' to enable strict mode.
// 4.1 - "use strict" is a directive in JavaScript that enables strict mode, 
//      which helps catch common coding mistakes and "silent" errors by enforcing a stricter set of rules. 
// 4.2 - This can help improve the quality and reliability of your code.
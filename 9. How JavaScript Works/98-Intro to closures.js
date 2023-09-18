// closures
// functions can return functions

// 1. A function can return another function and when we print that we'll get the inner function.
function outerFunction(){
    function innerFunction(){
        console.log("Hello World");
    }
    return innerFunction;
}

const ans = outerFunction; // saves outer function
console.log(ans);
ans();

console.log('----------------------------');

const ans2 = outerFunction(); // saves inner function
console.log(ans2);
ans2();

console.log('-----------------------------');

// 2. We take another Example.

function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }
    return printName;
}

const ans3 = printFullName("Gurkirat", "Singh");
// console.log(ans3);
ans3();


// BUT!!!!!!!!!!!!, There are a lot of things going on here..... Written in readme.md - 98.

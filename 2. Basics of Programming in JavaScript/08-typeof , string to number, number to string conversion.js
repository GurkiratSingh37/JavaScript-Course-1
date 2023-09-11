// type of operator

// data types (primitive data types)
// string "Gurkirat"
// number 2, 4, 5, 6
// booleans
// undefined
// null
// BigInt
// Symbol

let age=16;
console.log(typeof(age)); // returns number

let a;
console.log(typeof(a)); // returns undefined

let b=null;
console.log(typeof(b)); // returns object

// convert number to string.
console.log(typeof(age+ "")); // by just adding a "" number can be converted into String.

// convert string to number.
let myAge=  +"34";
console.log(typeof(myAge));


//--------------------------------------------------------------------------------------------------

// we can avoid all this by just type Casting the data types
let newAge="18";
newAge=Number(newAge);
console.log(typeof(newAge));


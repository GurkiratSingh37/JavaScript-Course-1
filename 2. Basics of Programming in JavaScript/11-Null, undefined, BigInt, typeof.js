// 1. undefined

let firstName; // gives error of initializing when used "const"
console.log(typeof(firstName));

// 2. null

let myFirstName = null;
console.log(typeof(myFirstName));
// it gives object as type of "myFirstName" which is wrong. It is an error or bug in Js but they cannot change it as if they did then 
// the already made frameworks and programs using this will also have to change which is a lot of hectic work.


// 3. bigInt
// there is a limit to store a length of number
console.log(Number.MAX_SAFE_INTEGER); // return 9007199254740991

// we can use BigInt by type casting.
let myNumber=BigInt(123463523564532613725);
console.log(typeof(myNumber), myNumber);

let newMyNumber=123463523564532613725n;
console.log(typeof(newMyNumber), newMyNumber);

let a=34;
console.log(myNumber + a); // returns error - Cannot mix BigInt and other types, use explicit conversions


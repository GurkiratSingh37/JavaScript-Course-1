// rules for naming variables

// you cannot start with number
// example
// 1value (invalid)
// valuel (valid)

// var 1value=10; // (gives Invalid or unexpected token)

var value1=20;
console.log(value1 + 10);
console.log(value1 - 10);
console.log(value1 * 10);
console.log(value1 / 10);
console.log(value1 ** 2); // power

// you can use only undersore _ or dollar symbol
// first_name (valid)
// _firstname (valid)

var first_name="Gurkirat";
var _firstname="Singh";

console.log(first_name);
console.log(_firstname);

// first$name (valid)
// $firstname (valid)

var first$name="Gurkirat";
var $firstname="Singh";

console.log(first$name);
console.log($firstname);

// you cannot use spaces
// first name (invalid)

// var first name="Gurkirat"; // not valid
var first_name="Gurkirat"; // snake case writing
var firstName="Singh"; // camel case writing
var FirstName="Singh"; // pascel case writing

// convention
// start with small letter and use camelCase
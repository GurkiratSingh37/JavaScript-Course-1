
// Creating an array 'numbers'
let numbers = [1, 2, 3];
console.log(numbers);

// 1. When we use the dot notation after 'numbers', we see various functions like map(), lastIndexOf(), splice(), etc.
// From where are these coming from???? It's coming from its '__proto__'. YESSsss, you can see on console of chrome when you print the list.
// These functions are accessible through the array's '__proto__' property, which is the prototype of arrays.

// BUTT!!! Earlier we talked about that only functions has prototype
// It might seem contradictory since we earlier said only functions have prototypes, but arrays are a special type of object,
// and they inherit their methods from Array.prototype.

// 1.2 Creating arrays using the 'new' keyword
let numbers2 = new Array(1,2,3);

// So what is this new keyword doing
// The 'new' keyword is used to create objects from constructors. In the case of arrays,
// it constructs a new array object and initializes it with the arguments passed to the constructor.

// The two methods of creating arrays (literal notation and 'new' keyword) are essentially equivalent.

// NOTE ****-> the new keyword calls array constructor and set's the new arrays proto equal to the the array contructor's prototype.

// 1.3 - we can see all of the prototype functions.
console.log(Object.getPrototypeOf(numbers));


// 1.4 - Array has a prototype of array
console.log(Array.prototype);

// while function has a prototype of object.
function hello(){
    console.log("hello");
}
console.log(hello.prototype); // return {} - as we learned earlier free space/empty object, onto which we can add anything
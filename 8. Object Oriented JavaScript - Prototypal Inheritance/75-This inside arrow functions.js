// Understanding 'this' Inside Regular Functions and Arrow Functions

// 1. In Regular Functions:
const user1 = {
    firstName: "Gurkirat Singh",
    age: 23,
    about: function() {
        console.log(this.firstName, this.age);
    }
}

user1.about(); // Outputs: Gurkirat Singh 23

// 2. In Case of Arrow Functions:
const user2 = {
    firstName: "Gurkirat Singh",
    age: 23,
    about: () => {
        console.log(this.firstName, this.age); // This is incorrect!
    }
}

user2.about(); // Outputs: undefined undefined
// Arrow functions capture 'this' from their surrounding context (lexical scoping).
// Unlike regular functions, 'this' inside an arrow function does not refer to the object it belongs to.
// In this case, 'this' refers to the global object (e.g., 'window' in browsers).
// The arrow function 'about' takes 'this' from one level up, which is the global context in this case.

// It's important to note the difference in behavior between regular functions and arrow functions when it comes to 'this'.

// Use arrow functions carefully, especially when working with object methods that rely on 'this'.
// Understanding the 'class' Keyword in JavaScript

// Traditional constructor function 'CreateUser'
function CreateUser(firstName, lastName, email, age, address, about, is18) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}

// Adding shared methods to the prototype of 'CreateUser'
CreateUser.prototype.about = function() {
    console.log(`${this.firstName} is ${this.age} years old.`);
};

CreateUser.prototype.is18 = function() {
    return this.age >= 18;
};

// Creating instances using the 'CreateUser' constructor
const user1 = new CreateUser("Gurkirat", "Singh", "huntrsingh@gmail.com", 16, 'mohali');
const user2 = new CreateUser("HuNtR", "Singh", "huntrsingh@gmail.com", 18, 'mohali');

// Classes in ES6

// 1.1 Internally, classes work similarly to constructor functions with prototype methods
class CreateUser2 {
    constructor(firstName, lastName, email, age, address, about, is18) {
        console.log("Constructor called!!!");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    // Adding shared methods directly to the class
    about() {
        console.log(`${this.firstName} is ${this.age} years old.`);
    }
    is18() {
        return this.age >= 18;
    }
}

// Creating instances using the 'class' syntax
const user3 = new CreateUser2("Gurkirat", "Singh", "huntrsingh@gmail.com", 16, 'mohali');
console.log(user3.is18());

// 1.2 The 'constructor' method is called every time the 'new' keyword is used with the class.
// It initializes the object and can return an object (though not common).

// 1.3 - to see the prototype of 'user3'.
console.log(Object.getPrototypeOf(user3));

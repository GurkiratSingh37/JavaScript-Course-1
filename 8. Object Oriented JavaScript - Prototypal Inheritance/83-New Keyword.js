// Understanding the 'new' Keyword in JavaScript

// Constructor function 'createUser'
function createUser(firstName, age){
    this.firstName=firstName;
    this.age=age;
}

// 1. c) Continued: Adding a method to the prototype of the constructor function
createUser.prototype.about = function(){
    console.log(this.firstName, this.age);
}

// 1. Now i will call this function using new keyword

// Using the 'new' keyword to create an object from the constructor function
// When using 'new', the constructor function behaves as a class constructor in object-oriented programming.

// 'user1' will become an object
const user1 = new createUser("Gurkirat", 6);

// So new keyword is doing 3 things here.
// a) Creates an empty object ({}), and 'this' refers to this new empty object. We added out firstname and age to that empty object.
// b) return this i.e. the created object.
// c) Automatically associates the prototype of the constructor function with the new object.

// AS, privously we have to bind the prototype with the function 'Object.create(createUser2.prototype);', we don't need to do that here. 
/* function createUser2(firstName, lastName, email, age, address, about, is18) {
    const user = Object.create(createUser2.prototype); // 1.2 - Now we have to pass the function's prototype
    user.firstName = firstName;
*/
// "new" automatically does that for us.

// If a property or method is not found in 'user1', JavaScript looks in the prototype chain for it.

// The 'new' keyword simplifies the process of creating objects with prototypes.

// So, proto will led us to the prototype, if it doesn't find anything in the function that the user is asking for.

// 2. using the previous example:
function createUser2(firstName, lastName, email, age, address, about, is18) {
    const user = Object.create(createUser2.prototype); 
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    return user;
}

createUser2.prototype.about = function(){
    console.log(`${this.firstName} is ${this.age} years old.`);
}

createUser2.prototype.is18 = function(){
    return this.age >= 18;
}

const user2 = createUser2("Gurkirat", "Singh", "huntrsingh@gmail.com", 16, 'mohali');
const user3 = createUser2("HuNtR", "Singh", "huntrsingh@gmail.com", 18, 'mohali');

console.log("2.",user2);
console.log("3.",user2.about());

//---------------------------------------------------------------------------------------

// NOW 
function CreateUser3(firstName, lastName, email, age, address, about, is18) { // 2.1
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}

CreateUser3.prototype.about = function(){
    console.log(`${this.firstName} is ${this.age} years old.`);
}

CreateUser3.prototype.is18 = function(){
    return this.age >= 18;
}

const user4 = new  CreateUser3("Gurkirat", "Singh", "huntrsingh@gmail.com", 16, 'mohali');
const user5 = new CreateUser3("HuNtR", "Singh", "huntrsingh@gmail.com", 18, 'mohali');

console.log("4.", user4);

// 2.1 Now this createUser3 is a constructor function.
    // Now how will the user will get to know that he has to use new keyword to create a object with this constructor function.
    // We'll have to captitalize it's first character 

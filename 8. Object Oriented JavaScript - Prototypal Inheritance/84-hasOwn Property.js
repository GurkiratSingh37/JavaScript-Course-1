// Using hasOwnProperty to Filter Out Inherited Properties

// Defining the constructor function 'CreateUser3'
function CreateUser3(firstName, lastName, email, age, address, about, is18) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}

// Adding shared methods to the prototype of 'CreateUser3'
CreateUser3.prototype.about = function() {
    console.log(`${this.firstName} is ${this.age} years old.`);
};

CreateUser3.prototype.is18 = function() {
    return this.age >= 18;
};

// Creating instances using the 'CreateUser3' constructor
const user4 = new CreateUser3("Gurkirat", "Singh", "huntrsingh@gmail.com", 16, 'mohali');
const user5 = new CreateUser3("HuNtR", "Singh", "huntrsingh@gmail.com", 18, 'mohali');

// 1.1 We can print the keys that 'user4' has:
for (let key in user4) {
    console.log(key);
}

// When iterating through properties using 'for...in', inherited properties from the prototype are also included.
// If you only want to print the keys that are specific to the instance and not inherited, you can use 'hasOwnProperty'.

// Filtering out inherited properties using 'hasOwnProperty'
for (let key in user4) {
    if (user4.hasOwnProperty(key)) {
        console.log(key);
    }
}

// The 'hasOwnProperty' method checks whether a property belongs to the object itself and not its prototype chain.
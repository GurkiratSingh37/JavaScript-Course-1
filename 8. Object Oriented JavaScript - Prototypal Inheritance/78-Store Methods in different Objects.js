// Creating Objects with Shared Methods to Optimize Memory Usage

// Function to create a user object with individual methods
function createUser(firstName, lastName, email, age, address, about, is18) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function() {
        console.log(`${this.firstName} is ${this.age} years old.`);
    };
    user.is18 = function() {
        return this.age >= 18;
    };
    return user;
}

// Create user objects using the 'createUser' function
const user1 = createUser("Gurkirat", "Singh", "huntrsingh@gmail.com", 16, 'mohali');
const user2 = createUser("HuNtR", "Singh", "huntrsingh@gmail.com", 16, 'mohali');

// 1. The problem with the above approach is that every time an object is created,
//    the 'about' and 'is18' functions are duplicated in memory.

// To address this, you can store shared methods in an object and use their references in the 'createUser' function.

// Shared methods object
const userMethods = {
    about: function() {
        console.log(`${this.firstName} is ${this.age} years old.`);
    },
    is18: function() {
        return this.age >= 18;
    }
};

// Function to create a user object using shared methods
function createUser2(firstName, lastName, email, age, address, about, is18) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about; // Assigning references to shared methods
    user.is18 = userMethods.is18;

    return user;
}

// Create user objects using the 'createUser2' function with shared methods
const user3 = createUser2("Gurkirat", "Singh", "huntrsingh@gmail.com", 16, 'mohali');
const user4 = createUser2("HuNtR", "Singh", "huntrsingh@gmail.com", 18, 'mohali');

// Test the 'is18' method
console.log(user4.is18()); // Outputs: true
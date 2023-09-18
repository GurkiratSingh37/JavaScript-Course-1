// Using Prototypes to Create Objects with Shared Methods and Properties

// Shared methods object
const userMethods = {
    about: function() {
        console.log(`${this.firstName} is ${this.age} years old.`);
    },
    is18: function() {
        return this.age >= 18;
    }
};

// Function to create user objects using shared methods
function createUser(firstName, lastName, email, age, address, about, is18) {
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    return user;
}

const user1 = createUser("Gurkirat", "Singh", "huntrsingh@gmail.com", 16, 'mohali');
const user2 = createUser("HuNtR", "Singh", "huntrsingh@gmail.com", 18, 'mohali');

console.log("1.",user1); 
console.log("2.",user1.about());

// 1. As we study in previous file every function has a prototype i.e. empty object {}.
// 1.1 - So we will use the prototype of 'createUser2' to add all of the functions we are using from "userMethods".

// Using the prototype property to add shared methods to a constructor function

// Constructor function to create user objects
function createUser2(firstName, lastName, email, age, address, about, is18) {
    const user = Object.create(createUser2.prototype); // 1.2 - Now we have to pass the function's prototype
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

const user3 = createUser2("Gurkirat", "Singh", "huntrsingh@gmail.com", 16, 'mohali');
const user4 = createUser2("HuNtR", "Singh", "huntrsingh@gmail.com", 18, 'mohali');

console.log("3.",user3); // return all the key-value pairs & '__proto__' of "userMethods2". We can see that in console of chrome.
console.log("4.",user3.about()); 
// NOTE ******* - we are getting undefined after getting the result because we are using console.log()
// The issue is with this line: user3.about(). The about function itself doesn't return anything, and you're trying to log its return value,
//  which is undefined. Additionally, the about function itself contains a console.log statement, 
//  so it will log the message "Gurkirat is 16 years old." when it's called.

// 1.2 - Now if it doesn't find the value in 'createUser2' then it will look into the prototype. (just like in userMethods was it's proto)

// BUT!!!! you will question what's the difference of adding 'userMethod' functions like this prototype or the above one.
// The key difference between the two approaches is that using the prototype directly
// helps in maintaining a clear separation between constructor and shared methods.
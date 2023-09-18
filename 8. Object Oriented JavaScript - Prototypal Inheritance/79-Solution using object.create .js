const userMethods = {
    about: function() {
        console.log(`${this.firstName} is ${this.age} years old.`);
    },
    is18: function() {
        return this.age >= 18;
    }
};

function createUser(firstName, lastName, email, age, address, about, is18) {
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

const user1 = createUser("Gurkirat", "Singh", "huntrsingh@gmail.com", 16, 'mohali');
const user2 = createUser("HuNtR", "Singh", "huntrsingh@gmail.com", 18, 'mohali');

console.log(user1.is18());


// NOW, we can even correct or make it more efficient.... using the knowledge of __proto__ from file "80-.js".

// 1. 

const userMethods2 = {
    about: function() {
        console.log(`${this.firstName} is ${this.age} years old.`);
    },
    is18: function() {
        return this.age >= 18;
    }
};

function createUser2(firstName, lastName, email, age, address, about, is18) {
    const user = Object.create(userMethods2);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    return user;
}

const user3 = createUser2("Gurkirat", "Singh", "huntrsingh@gmail.com", 16, 'mohali');
const user4 = createUser2("HuNtR", "Singh", "huntrsingh@gmail.com", 18, 'mohali');

console.log(user3); // return all the key-value pairs & '__proto__' of "userMethods2". We can see that in console of chrome.
console.log(user3.about());

// 1.1 - This is known as "proto chaining"

// WE WILL DISCUSS PROTO, PROTOYPE, CLASS IN THIS AND NEXT FILES.

const user={
    firstName: "Gurkirat",
    lastName: "Singh",
    email: "sgurkirat3788@gmail.com",
    age: 22,
    address: "EH 184 A, MTS Nagar, Jalandhar",
    about: function(){
        console.log(`${this.firstName} is ${this.age} years old.`);
    },
    is18: function(){
        return this.age >= 18;
    }
}

// 1. We want to create multiple objects of the same type as above and we'll create and a function for that :-
function createUser(firstName, lastName, email, age, address, about, is18){
    const user={};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        console.log(`${this.firstName} is ${this.age} years old.`);
    },
    user.is18 = function(){
        return this.age >= 18;
    }
    return user;
}

const user1 = createUser("Gurkirat", "Singh", "huntrsingh@gmail.com", 16, 'mohali');
console.log(user1);
console.log(user1.is18());

// THERE ARE MANY PROBLEMS IN THIS FILE. WE WILL SOLVE THIS IN NEXT FILE.
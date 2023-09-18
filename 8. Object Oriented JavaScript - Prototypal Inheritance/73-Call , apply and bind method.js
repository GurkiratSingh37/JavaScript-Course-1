function hello(){
    console.log("1. Hello World");
}

// we can call this function like:
hello();

// -----------oR------------
hello.call(); // works the same


// CALL, APLLY & BIND:

// 1. -
const user1 ={
    firstName: "Gurkirat Singh",
    age: 23,
    about: function(){
        console.log("2.",this.firstName, this.age);
    }
}

user1.about();

const user2 ={
    firstName: "Gurkirat",
    age: 22
}

// 1.1 -Borrow 'about()' from user1 and use it for user2
user1.about.call(user2); // call() will take 'this' as an argument and we can pass user2. So "this" will represent user2 as an arg.

// 1.2 - NOTE** -> We have to pass an argument inside 'call()' even if called from an object. If nothing is passed it will return undefined.
user1.about.call();

// 2. Now if i pass some arguments in about function
const user3 ={
    firstName: "Gurkirat Singh",
    age: 23,
    about: function(hobby, favMusician){
        console.log("3.",this.firstName, this.age, hobby, favMusician);
    }
}
const user4 ={
    firstName: "Gurkirat",
    age: 22
}

user3.about.call(user4, "Guitar", "Alan"); // it will take 1st args as calling the 'this' function and other two as the parameter of that function "about()".

// ------------------------------------------------------------------------------------------------------------------------------------------
// APPLY :-
// It is same as call(). call() also uses apply() internally. It's just that in apply you don't need to pass parameters individually, 
// You can pass array of parameters.

function about2(hobby, favMusician){
    console.log("4.",this.firstName, this.age, hobby, favMusician);
}

const user5 ={
    firstName: "Gurkirat Singh",
    age: 23
}

about2.apply(user5, ["Guitar", "Alan"]);

// BIND:-
// The 'bind()' method returns a new function with the specified context and parameters.
function about3(hobby, favMusician){
    console.log("5.",this.firstName, this.age, hobby, favMusician);
}

const user6 ={
    firstName: "Gurkirat Singh",
    age: 23
}

const func=about3.bind(user5, "Guitar", "Alan");
func();

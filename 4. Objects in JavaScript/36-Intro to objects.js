// objects
// reference type
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

// how to create objects

const person={name:"Gurkirat", age:22}; // object literal
console.log(typeof(person), person);

// how to access data from objects
console.log(person.name);

const newPerson={
    name:"Gurkirat", 
    age:22,
    hobbies:["guitar", "sleeping", "listening music"]
};
console.log(newPerson.hobbies);


// how to add key value pair to objects
person.gender="male";
console.log(person);

//-------------------------------------------------------------------

//Note:
console.log(person["name"]); // we have to put it in a string in order to access the value.


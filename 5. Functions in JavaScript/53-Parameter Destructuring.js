// param destructuring

// mostly used with object
// used mostly in REACT

const person ={
    firstName: "Gurkirat",
    gender: "male"
}

function printDetails(obj){
    console.log(obj.firstName);
    console.log(obj.gender);
}

printDetails(person);

// Now  if we know an object is coming as params, we can destructor it.

function printDetails2({firstName, gender}){
    console.log(firstName);
    console.log(gender);
}

printDetails2(person);
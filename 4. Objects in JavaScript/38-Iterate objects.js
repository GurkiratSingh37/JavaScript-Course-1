// how to iterate objects

const newPerson={
    name:"Gurkirat", 
    age:22,
    "person hobbies":["guitar", "sleeping", "listening music"]
};

// 1. for in loop :

// to print keys
for(let key in newPerson){
    console.log(key);
}

// to print values
for(let key in newPerson){
    console.log(newPerson[key]); // not "newPerson.key" it will look for key named "key"
}

console.log();

// to print key - value pairs
for(let key in newPerson){
    // console.log(key,newPerson[key]); // or
    console.log(`${key} : ${newPerson[key]}`);
}


// 2. Object.keys :

Object.keys(newPerson);
Object.values(newPerson); // these both returns array then we can use "for of" loop.

for(let key of Object.keys(newPerson)){
    console.log(key);
    console.log(newPerson[key]); // to get values for specific key.
}


// truthy and falsy values

// 1. falsy values
// All of the falsy values are:
// false, "", null, undefined, 0

let firstName=""

if(firstName){
    console.log(firstName);
} else{
    console.log("Empty falsy"); 
}

// 2. truthy values
// "abc", 1, -1

let age=-1
if(age){
    console.log(age);
} else{
    console.log("Empty falsy"); 
}
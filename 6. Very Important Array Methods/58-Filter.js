// filter method:
// 1. The filter method in JavaScript is used to create a new array containing elements from the original array that pass a 
// specific filtering condition. 

// 2. It does not modify the original array but returns a new array containing only the elements that satisfy the given condition.
// The callback of filter method should always return boolean value.

const numbers=[1,3,6,8,2];

// eg. to filter odd or even numbers.

function isEven(num){
    if(num%2===0){
        return true;
    }
}

const evenNum=numbers.filter(isEven); // add those numbers in array for which callback function returns true.
console.log(evenNum);

// ---------------------OR--------------------

console.log(numbers.filter((num)=>{
    return num%2===0?true:false;
}));

const users = [
    {userId: 1, firstName: "Mamta", gender:"female"},
    {userId: 2, firstName: "Ishita", gender:"female"},
    {userId: 3, firstName: "Nandini", gender:"female"},
    {userId: 4, firstName: "Gupta", gender:"female"},
    {userId: 4, firstName: "Gurkirat", gender:"male"}
];

console.log(users.filter((user)=>{
    // Inside the if block, there is a return statement with user.gender. 
    // However, the return value of the callback function is used to determine whether the user object should be included in the filtered result.
    if(user.firstName=="Mamta"){
        return user.gender;
    }
}));
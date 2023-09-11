// MAP:
// In JavaScript, map is an array method that creates a new array by applying a provided callback function to each element of the original array. 
// It returns a new array with the results of the callback function applied to each element in the same order as the original array.

const numbers = [3,4,5,6];

function squ(num){
    return num*num;
}

numbers.map(squ); // it will return an array.
// -------------------------------------------- OR -------------------------------------------------------

const squaredNum=numbers.map((num)=>{
    return num*num;
});

console.log(squaredNum);

// ANOTHER EXAMPLE
const users =[
    {userld: 1, firstName: 'harshit', gender: 'male'},
    {userld: 2, firstName: 'mohit', gender: 'male'},
    {userld: 3, firstName: 'nitish', gender: 'male '} 
]

console.log(users.map((user)=>{
    return user.firstName;
}));
// important array methods

const number = [1,2,3,4,5];

function multiplyBy2(num, index){
    console.log("Index is",index, "& Number is",num);
}

// multiplyBy2(number[0], 0);

// it will be quite hectic to pass numbers one by one to function.
// So, what will do is we'll use for loop.

// for(let i=0;i<number.length;i++){
//     multiplyBy2(number[i],i);
// }

// INSTEAD of all this we can use foreach:
//**  It will take input as a callback */

number.forEach(multiplyBy2);// think of it as a loop that will run for each element in the array.

// For each element in the array, the callback function is executed, and you can perform some action on each element within the callback.

// IT CAN USED WITH ANONYMOUS FUNCTIONS i.e. no need to define a function earlier.
number.forEach((num, index)=>{ // foreach will pass arguments to the parameters.
    console.log("Index is",index, "& Number is",num);
})

const users =[
    {userld: 1, firstName: 'harshit', gender: 'male'},
    {userld: 2, firstName: 'mohit', gender: 'male'},
    {userld: 3, firstName: 'nitish', gender: 'male '} 
]

for(let user of users){
    console.log(user.userld); // to print userId.
}

users.forEach((d)=>{ // for each will call this callback function for each element.
    console.log(d.userld);
});

// NOTE:
// 1. forEach is useful when you want to perform a task on each element of an array without creating a new array (for which you might use map) or 
// when you don't need to return a new value (unlike map, reduce, etc.).

// 2. Keep in mind that forEach does not return anything and is not chainable. If you need to perform operations and collect results, 
// you might want to use other array methods like map, filter, reduce, etc.

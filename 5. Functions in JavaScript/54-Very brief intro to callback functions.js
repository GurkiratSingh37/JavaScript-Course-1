// callback functions:
// 1. A callback function is a function that is passed as an argument to another function and is executed 
// after the completion of that function or at a specified event.

// 2. Callbacks are commonly used in asynchronous programming, where certain operations take time to complete, 
// such as fetching data from a server or reading a file. Instead of blocking the program's execution and waiting for these operations to complete, 
// we can pass a callback function to be executed when the operation finishes.

function myFunc2(){
    console.log("Inside my func 2");
}

function myFunc(callback){
    callback(); // calling passed function
}

myFunc(myFunc2);

// Another Way

function myFunc4(Name){
    console.log(`My Name is ${Name}`);
}

function myFunc3(callback){
    callback("Gurkirat"); // calling passed function
}

myFunc3(myFunc4);
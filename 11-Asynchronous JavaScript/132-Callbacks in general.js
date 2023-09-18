// understand callbacks.

/*
function myFunc(callback){
    console.log("Function is doing task 1");
    callback();
}
function myFunc2(){
    console.log("Function is doing task 2");
}
myFunc(myFunc2);
*/

function myFunc(callback){
    console.log("Function is doing task 1");
    callback();
}

myFunc(() => {
    console.log("Function is doing task 2");
});

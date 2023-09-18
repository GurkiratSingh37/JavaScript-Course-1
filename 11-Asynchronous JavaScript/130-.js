// synchronous programming vs asynchronous programming
// synchronous programming
// synchronous programming single threaded 

/*
console.log("script start");

for (let i=1; i<10000; i++){
    console.log("inside for loop")
}

console.log("script end");
*/

// asynchronous programming

// setTimout()
/*
console.log("script start");

function hello(){
    console.log("Hello World!");
}

setTimeout(hello, 1000); // args:- function, delay-time

console.log("script end");
*/
//--------------------------------OR-------------------------------
/*
console.log("script start");

setTimeout(() => {
    console.log("Hello World!");
}, 1000); // args:- function, delay-time

console.log("script end");
*/

// Now, another example.
console.log("script start");

setTimeout(() => {
    console.log("Hello World!");
}, 0);

for (let i=1; i<10000; i++){
    console.log(".....")
}

console.log("script end");
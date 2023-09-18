// Promise.resolve
// Promise chaining

const myPromise = Promise.resolve(5);
myPromise.then(value=>{
    console.log(value);
})


// chain a promise

function myPromise2(){
    return new Promise((resolve, reject)=>{
        resolve("foo"); // will return "foo" when resolved which it will
    })
}

myPromise2().then((value)=>{
    console.log(value);
    value+="bar";
    return value; // internally :- return Promise.resolve(value)
})
.then(value=>{
    console.log(value);
})
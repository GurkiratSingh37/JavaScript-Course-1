// Promise

console.log("script start");
const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

// promise 
const friedRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
        resolve({value:"friedrice"});
    }else{
        reject("could not do it");
    }
})

/*
// consume
friedRicePromise.then((myfriedrice)=>{
    // when promise get's resolved
    console.log("let's eat", myfriedrice);
    }, 
    // when promise get's rejected
    (error)=>{
        console.log(error);
})
*/

// consume
friedRicePromise.then((myfriedrice)=>{
    // when promise get's resolved
    console.log("let's eat", myfriedrice);
    })
    .catch((error)=>{
        console.log(error);
    })

setTimeout(()=>{
    console.log("hello from settimeout")
},0)

for(let i = 0; i <=100; i++){
    console.log(Math.random(), i);
}
    
console.log("script end!!!!");
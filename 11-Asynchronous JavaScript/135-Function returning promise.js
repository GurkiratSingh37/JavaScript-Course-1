// Function returning promise

const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

function ricePromise(){
    new Promise((resolve,reject)=>{
        if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
            resolve({value:"friedrice"});
        }else{
            reject("could not do it");
        }
    })
}

ricePromise().then((myfriedrice)=>{
    // when promise get's resolved
    console.log("let's eat", myfriedrice);
    })
    .catch((error)=>{
        console.log(error);
    })
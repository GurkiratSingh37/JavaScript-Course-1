// Promise and settimeout

// I want to resolve / reject promise after 2 seconds

function myFunction(){
    return new Promise((resolve, reject)=>{
        const value = true;
        setTimeout(()=>{
            if(value === true){
                resolve();
            } else{
                reject();
            }
        }, 2000)
    })
}

myFunction().then(()=>{
    console.log("Resolved");
})
.catch(()=>{
    console.log("Rejected");
})
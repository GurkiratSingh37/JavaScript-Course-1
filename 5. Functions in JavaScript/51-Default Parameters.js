// default parameters

// EARLIER
function addTwo(a,b){
    if (typeof b === "undefined"){
        b=1;
    }
    return a+b;
}

const ans = addTwo(4) ;
console.log(ans);

// NOW
function addTwo2(a,b=1){ // no need of if. We can define default value while declaring function parameters.
    return a+b;
}

const ans2 = addTwo2(4) ;
console.log(ans2);
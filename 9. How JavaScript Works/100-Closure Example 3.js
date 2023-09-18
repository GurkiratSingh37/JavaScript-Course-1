// Closure Example 3

function myFunction(power){
    return function(num){
        return Math.pow(num, power); // or return num ** power
    }
}

const square = myFunction(2); // saves the 'function(num)'
const ans = square(2);
console.log(ans);


// NOTE*** :- This function can be further easily made:
const myFunction2 = (power) => {
    return (num) => {
        return Math.pow(num, power);
    }
}

// -------------------------OR--------------------------------

const myFunction3 = (power) => {
    return (num) =>  Math.pow(num, power);
}

// -------------------------OR--------------------------------

const myFunction4 = (power) => (num) => Math.pow(num, power);
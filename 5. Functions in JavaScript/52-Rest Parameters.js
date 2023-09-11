// rest parameters

// Traditionally we have to declare how to many parameters are there in function declaration.
function myFunc(a,b,c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}

myFunc(3,4,6,98,5,3,1);


// NOW : 1.

function myFunc2(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
    console.log(`c is: `,c); // gives array
}

myFunc2(3,4,6,98,5,3,1);

// 2.

function addAll(...num){
    console.log(num);
    console.log(Array.isArray(num)); // return TRUE.
}
addAll(2,3,56,3,1);

// now i can use loop inside it.
function addAll2(...num){
    let total=0;
    for(let n of num){
        total+=n;
    }
    return total;
}
console.log(addAll2(2,3,56,3,1));

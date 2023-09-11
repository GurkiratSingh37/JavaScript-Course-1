// block scope vs Function scope

{
    // this is a block
}

// let and const are block scope

{
    const firstName="Gurkirat";
    console.log(firstName);
}
// console.log(firstName); //**  cannot access const and let data type's variables that are defined inside a scope. */

{
    var firstName2="Gurkirat - 2";
    console.log(firstName2);
}

{
    console.log(firstName2);
}

// var is function scope

function myApp(){
    if (true) {
        var firstName= "Gurkirat";
        console.log(firstName);
    }
    if (true) {
        console.log(firstName);
    }
    console.log(firstName) ;
}

myApp();


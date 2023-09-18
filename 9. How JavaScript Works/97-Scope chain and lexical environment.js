// Scope chain and lexical environment

const lastName = "Singh";

const printName = function(){
    const firstName = "Gurkirat";
    console.log(firstName);
    console.log(lastName);
}

printName();
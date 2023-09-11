// LEXICAL SCOPE:
// When a variable is accessed in a particular part of the code, the JavaScript engine looks for that variable's declaration in the current scope. 
// If it doesn't find the declaration, it looks in the outer containing scope, and it continues this process until it reaches the global scope.

function myApp(){

    const myVar="value1";

    function myFunc(){
        const myVar="value68+1";
        console.log("Inside myFunc ", myVar); // js will look for myVar value inside it's own function first
        // If not available then it will check it's lexical environment.
        
        const myFunc2 = function (){
            console.log("Inside myFunc2", myVar);
        };

        myFunc2();
    };
    const myFunc2 = function (){};
    const myFunc3 = ()=>{};

    console.log(myVar);
    myFunc();
}

myApp();
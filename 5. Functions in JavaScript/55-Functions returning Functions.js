// function returning function

function myFunc(){
    function hello(){
        console.log("hello World");
    }
    return hello;
}

const ans= myFunc();
console.log(ans); 

// vaiable has become function SOooooo

ans();
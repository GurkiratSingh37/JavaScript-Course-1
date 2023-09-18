// Closure Example 4

function func(){
    let count=0;
    return function(){
        if(count < 1){
            console.log(`Hi!!!, You called me.`);
            count++;
        } else{
            console.log(`You called me again..... STOP!!!!!`);
        }
    }
    
}

const myFunc = func();
myFunc();
myFunc();
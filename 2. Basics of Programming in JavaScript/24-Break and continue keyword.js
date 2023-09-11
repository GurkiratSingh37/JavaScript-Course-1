// break keywork - stops the execution inside a loop

for(let i=0;i<10;i++){
    if(i===5){
        break;
    }
    console.log(i);
}

// continue keyword - it skips all of the code below it.

for(let i=0;i<10;i++){
    if(i===5){
        continue;
    }
    console.log(i);
}
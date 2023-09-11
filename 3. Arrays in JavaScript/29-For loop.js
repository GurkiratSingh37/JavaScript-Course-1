// for loop in array

let fruits =["apple", "mango", "grapes", "banana"];

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i].toUpperCase());
}

for(let fruit in fruits){
    console.log(fruit);
}
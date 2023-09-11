// how to clone array
// how to concatenate two arrays

// 1. As we know, array is a reference type, so we can do 1 thing if we want to have a copy of an array we can use slice() method.
let array1=["item1", "item2"];

let array2=array1.slice(0);
array1.push("item3");
console.log("array1",array1);
console.log("array2",array2);

// 2. or we can concat it

let array3=[].concat(array1);
array1.push("item4");
console.log("array1",array1);
console.log("array3",array3);

// 3. using spread operator.

let array4=[...array1];
array1.push("item5");
console.log("array1",array1);
console.log("array4",array4);

// array destructing

// eg. we want to store these values in a variable 
const myArray=["value1", "value2", "value3"];
let var1=myArray[0];
let var2=myArray[1];

// 1. THERE is a shortut way of doing this
let [myVar1, myVar2] = myArray;
console.log("myVar1:", myVar1);
console.log("myVar2:", myVar2);

// now we can change value of these variables as they are defined with let and not const.

// 2. We can also skip values if want
let [newMyVar1, , newMyVar3] = myArray;
console.log("newMyVar1:", newMyVar1);
console.log("newMyVar3:", newMyVar3);

// 3. Now I want to store last two elements of array in a new array.
let myNewArray=myArray.slice(2);

// or 
let [myNewVarr1, myNewVarr2, ...myNewArr]=myArray;
console.log("myNewVarr1:", myNewVarr1);
console.log("myNewVarr2:", myNewVarr2);
console.log("myNewArr:", myNewArr);
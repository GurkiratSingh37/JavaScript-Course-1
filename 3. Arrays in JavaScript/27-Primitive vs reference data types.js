// primitve vs reference data types

// 1. primitive types
let num1=5;
let num2=num1;
console.log("value of num1 is",num1);
console.log("value of num2 is",num2);

num1++;

console.log("Aftr incrementing num1");
console.log("value of num1 is",num1);
console.log("value of num2 is",num2); // value of num2 doesn't changes.

// reference types
// array
let array1=["item1", "item2"];
let array2=array1;
console.log("array1",array1);
console.log("array2",array2);

array1.push("item3");

console.log("After pushing one element in array1");
console.log("array1",array1);
console.log("array2",array2);



// EXPLANATION

// 1.  When we increment num1 with num1++, it does not change the value of num2. 
//     Since primitive types are immutable, each variable has its own independent copy of the value stored in memory.

// Note:
// Primitive types, such as numbers, booleans, and strings, are stored on the stack because they have a fixed size and are relatively small. 
// When you declare a primitive variable, its value is directly stored on the stack.


// 2.   When we assign array1 to array2 (let array2 = array1;), we are not creating a new copy of the array. 
//      Instead, both variables array1 and array2 are pointing to the same array in memory.
//  Therefore, when we modify array1 by pushing "item3" (array1.push("item3");), it also changes the content of array2. 
//  This is because both variables refer to the same array in memory. Changes made to the array through one variable are reflected in the other variable.

// Note:
// When you create an object or array, the actual data is stored on the heap, and the variable holds a reference (memory address) 
// to the location of the data on the heap.
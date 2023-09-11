// fill method
// value, start, end

// 1. eg. I want to fill an array of length '10' with "-1" values

const myArray=new Array(10).fill(-1);
console.log(myArray);

// 2. Suppose I want to fill 3rd and 4th element of the array with 0

const arr=[1,2,3,4,5,6,7,8];
arr.fill(0, 2, 4); // (value, start, end)
console.log(arr);
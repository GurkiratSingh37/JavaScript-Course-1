// REDUCE:
// 1. reduce is an array method used to accumulate the values of an array into a single value. 
// It iterates through the array and applies a callback function to each element and the previously accumulated result, 
// producing a final single output value.

const numbers = [1,2,3,4,5];

// to understand reduce method we'll take an example:
//** aim: sum of all the numbers in array */

const sum=numbers.reduce((acc,curr)=>{
    return acc+curr
});

console.log(sum);

// accumulator,  currentValue,  return
//  1              2             3
//  3              3             6
//  6              4             10
//  10             5             15


// IN CASE OF OBJECTS,

const userCart=[
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 30000},
    {productId: 3, productName: "tv", price: 25000}
]

console.log(userCart.reduce(({price:accPrice}, {price:currPrice})=>{
    return accPrice+currPrice;
}));

// passing a initial value of accumulator = 0
console.log(userCart.reduce((acc, {price:currPrice})=>{
    console.log("accPrice:",acc, " , currPrice:",currPrice)
    return acc+currPrice;
},0));

//---------------OR------------------

console.log(userCart.reduce((acc, currPrice)=>{
    console.log("accPrice:",acc, " , currPrice:",currPrice)
    return acc+currPrice.price;
},0));
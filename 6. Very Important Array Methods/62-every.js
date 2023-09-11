// Every method

const numbers = [2,4,6,8,10];

// we want to check that every element in the array is even:

const ans=numbers.every((num)=>num%2 === 0);
console.log(ans);

// callback function ————> true / false (boolean)
// every method ————> true / false (boolean)

// NOTE-> If a single false condition comes then it will return false.


// REAL-WORLD EXAMPLE:

const userCart=[
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 25000}
]

// check every product < 30000

console.log(userCart.every(product=>product.price<30000));
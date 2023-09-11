// SORT

// 5, 9, 1200, 400, 3000
// 5, 9, 400 ,1200, 3000 (expected)

const numbers = [5, 9, 1260, 3090]
numbers.sort() ;
console.log(numbers); // return [1260, 3090, 5, 9] cause array is treating it as a string.
// then it will sort it according to the ASCII code.

const userNames = ["Gurkirat", "Aryan", "Ayush", "Hardik"];
userNames.sort() ;
console.log(userNames); //sorting in the right order. NOTE: Capital letters comes first in order of ASCII number i.e. 'ABC' before 'abc'

//ASCENDING
const numbers2=[5,9,1200,410,3000];
numbers2.sort((a,b)=>{
    return a-b;
});

console.log(numbers2);

// 1200, 410
// a-b ---> 790
// a-b ---> postive (greater than 0) ---> b,a
// 410, 1200

//DESCENDING
const numbers3=[5,9,1200,410,3000];
numbers3.sort((a,b)=>{
    return b-a;
});

console.log(numbers3);

// price lowToHigh HighToLow
const products = [
    {productld:1, produceName:"p1", price:300},
    {productld:1, produceName:"p2", price:300},
    {productld:1, produceName:"p3", price:200},
    {productld:1, produceName:"p4", price:800},
    {productld:1, produceName:"p5", price:500}
]

// lowToHigh
products.sort((a,b)=>{
    return a.price-b.price
});

console.log(products);// it changes the original array.

// In order to save it in a new array and not to do any change in the original.

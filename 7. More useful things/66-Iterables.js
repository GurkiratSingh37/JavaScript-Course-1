// Iterables 
// On which we can perform for-of loop i.e. Strings, array are iterable.

// Strings
const firstName = "Gurkirat";
for(let ch of firstName){
    console.log(ch);
}

// Arrays:
const myArray = ['item1', 'item2', 'item3'];
for(let item of myArray){
    console.log(item);
}

// Are objects iterable? - > NOOOooooo
/*
const user1={'key1': 'value1', 'key2': 'value2'};
for(let user of user1){
    console.log(user);  }*/ // return TypeError: user1 is not iterable.


// Array like object (i.e. Strings) - that have length property and we can access them with their indexes:
const firstName2 = "Gurkirat";
console.log(firstName2.length);
console.log(firstName2[2]);



// testing array of objects
const userCart=[
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 25000}
]

for(let item of userCart){
    console.log(item);
}
// Optional Chaining

// 1. As we Know, we can access elements in the object by using their keys.
const user = {
    firstName: "harshit",
    address: {houseNumber: '1234'}
}

console.log(user.firstName);
console.log(user.address);

// 2. But if we comment out address and then access the address first:
const user2 = {
    firstName: "harshit",
    // address: {houseNumber: '1234'}
}

console.log(user2.firstName);
console.log(user2.address); // returns -> undefined.

/* console.log(user2.address.houseNumber); */ // returns error -> TypeError: Cannot read properties of undefined (reading 'houseNumber')

// SO, this is the example that if a value doesn't yet exist in the object but comes later on and we don't want to see this error.
// What we can do is '?.'
console.log(user2?.address?.houseNumber); // returns -> undefined not an error

// It checks that if 'user2' exists then proceed further and check 'address' exists or not if not then return "undefined".
// 1 - Before we go into maps.

const person={
    firstName: "Gurkirat",
    age: 22,
    1:"one"
}
// 1.1 - We can access 'firstName' by using these ways.
console.log(person.firstName);
console.log(person["firstName"]);

// 1.2 - Now, the keys in objects (object literal) are stored as either "Strings" or "Symbol".
// to get keys "typeof()".
for(let key in person){
    console.log(typeof key);
}

//-----------------------------------------------------------------

// 2. Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed ike objects

// different between maps and objects

// objects can only have string or symbol as key

// in maps you can use anything as key
// like array, number, string


const person2 = new Map();
person2.set('firstName', 'Gurkirat');
person2.set('age', 7);
person2.set(1, 'one');
console.log(person2); // in maps you can use anything as key like array, number, string

// to access data
console.log(person2.get('firstName'));
console.log(person2.get('age'));

// to access keys
/* console.log(person2.keys()); */ // return map.iterator which we can loop
for(let key of person2.keys()){
    console.log(key, typeof key);
}

// 2.1 - As it is iterable we can use for-of loop with this and not with objects.

for(let key of person2){
    console.log(key);
    console.log(Array.isArray(key)); // gives out  true
}

// to destructure the array 
for(let [key, value] of person2){
    console.log(key, value);
}

// Spread Operator

// - Just like in array where we have used spread operator:
const arr1=[1,2,3];
const arr2=[4,5,6];

const myArray=[...arr1, ...arr2];
console.log(myArray);

// const newArray=[...123456789]; // not iterable change it to string
// console.log(newArray);

const newArray2=[..."123456789"]; // now it is iterable as we have changed it to string. 
console.log(newArray2);

// spread operator in OBJECTS.

// 1.
const obj1={
    key1: "value1",
    key2: "value2"
}

const obj2={
    key3: "value3",
    key4: "value4"
}

const obj3={...obj1, ...obj2}; // if "obj2" has same key as "obj1" then the value of "obj2" will be shown as it it added after obj1.
console.log(obj3);

// 2.
const newObject = {..."abc"}; // index of this string "abc" will become their keys.
console.log(newObject) ;


// NOTE :
// If same key has been assigned with a new value later on, it will override the previous one.

const objNote={
    key1: "value1",
    key2: "value2",
    key1: "value3"
}
console.log(objNote);
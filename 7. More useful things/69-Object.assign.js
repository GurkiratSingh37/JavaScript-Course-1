// clone using Object.assign

const obj={
    key1:'value1',
    key2:'value2'
}

const obj2=obj;

// REMEMBER ** : These 'obj' & 'obj2' will point towards the same object in the memory.
// So, if we add another key in obj:
obj.key3='value3';
console.log(obj);
console.log(obj2); // also shows 'key3'.

// Now to clone it, earlier we have learned spread operator ...

const obj3={
    key1:'value1',
    key2:'value2'
}

const obj4={...obj3};
obj3.key3='value3';
console.log(obj3);
console.log(obj4); // This won't show 'key3'.

// --------------------------OR--------------------------------------------

// We can use Object.assign
const obj5 = Object.assign(obj3);
console.log();
// Sets (it is iterable)
// store data
// sets also have its own methods
// No index—based access
// Order is not guaranteed
// unique items only (no duplicates allowed)

const numbers = new Set([1,2,3,3]); // can store iterables, SOooo array can be stored
console.log('numbers: ',numbers); // returns - { 1, 2, 3 } (No duplicates)

// we can also add elements in this by doing:
const items=['item1', 'item2', 'item1']
numbers.add(items);
console.log('numbers: ',numbers);

// NOTE **-> if I assign a variable an array then we cannot add the same array again.
// BUTT!!!!. if we add array without first initializing the array then.

const numbers2 = new Set([1,2,3]);
numbers2.add(['item1', 'item2']);
numbers2.add(['item1', 'item2']);
console.log('numbers2: ', numbers2);

// It will show both array having same elements by adding them as this way because both of them are different array in memory. (different address).


// 2. Set has some methods:
const numbers3 = new Set([1,2,3]);
if(numbers3.has(1)){
    console.log('1 is present');
} else{
    console.log('1 is not present');
}


// 3. As Set is iterable
const numbers4=new Set(['item1', 'item2', 'item1']);
numbers4.add(1);
numbers4.add(2);
numbers4.add(3);
numbers4.add(4);
numbers4.add(5);

for(let num of numbers4){
    console.log(num);
}


// For Example: I want to get unique elements from array.
const myArray = [1,2,4,4,5,6,5,6];
const unique = new Set(myArray);
console.log(unique);
console.log(unique.size);
// splice method - If you want to delete or insert in between the array. changes the original array
// start, delete, insert

const myArray = ['item1', 'item2', 'item3'];

// Delete: eg. 'item2'. Return the deleted item
myArray.splice(1, 1); // (position=1, how many delete=1, insert=null)
console.log(myArray);

// insert:
myArray.splice(1, 0, 'inserted item');
console.log(myArray);

// Insert & delete
myArray.splice(1, 2, 'inserted1', 'inserted2');
console.log(myArray);
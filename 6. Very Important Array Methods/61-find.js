// find method : take input as a callback function

const myArray = ["Hello", "cat", "dog", "lion"];

function isLength3(string){
    return string.length === 3;
}
const ans = isLength3("dog");
console.log(ans);

// We can use "myArray.find()"

const ans2 = myArray.find(isLength3); // calling another function
//--------------------OR------------------

const ans3 = myArray.find((data)=>data.length === 3); // we can directly define a arrow function so need to call another function.
console.log(ans3);


// REAL-WORLD Example

const users=[
    {userId: 1, userName: "Gurkirat"},
    {userId: 2, userName: "Nanu"},
    {userId: 3, userName: "Nane"},
    {userId: 4, userName: "Naniya"},
    {userId: 5, userName: "Guddi"},
];

// I want user that has id = 3

const res=users.find((d)=>d.userId===3 );
console.log(res.userName);

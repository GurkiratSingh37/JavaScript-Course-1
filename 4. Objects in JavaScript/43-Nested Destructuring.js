// nested destructuring

const users =[
    {userId: 1, firstName: 'harshit', gender: 'male'},
    {userId: 2, firstName: 'mohit', gender: 'male'},
    {userId: 3, firstName: 'nitish', gender: 'male '} 
]

const [user1, user2, user3]=users;
console.log(user1); // gives whole object.

// now to get userId or any other key-vair pair. destructor object.
const[{firstName: user1FirstName}, , {gender}]=users;
console.log(user1FirstName, gender);
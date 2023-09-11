// objects inside array
// very useful in real world applications

const users =[
    {userld: 1, firstName: 'harshit', gender: 'male'},
    {userld: 2, firstName: 'mohit', gender: 'male'},
    {userld: 3, firstName: 'nitish', gender: 'male '} 
]

console.log(users);

// iterating
for(let user of users){
    console.log(user.userld);
}
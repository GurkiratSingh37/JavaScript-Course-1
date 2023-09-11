// difference between dot and bracket notation

const newPerson={
    name:"Gurkirat", 
    age:22,
    "person hobbies":["guitar", "sleeping", "listening music"]
};

//- if there is some space in "key" of the object like above then "person hobbies" 
//  then it will be difficult to access the property like 'person.person hobbies'.
console.log(newPerson["person hobbies"]);

// Now, we want to add key from the variable like below
const key="email";

newPerson.key="sgurkirat3788@gmail.com"; // but this add key with the name "key" not 'email'.

// THIS WILL WORK 
newPerson[key]="sgurkirat3788@gmail.com";
console.log(newPerson);
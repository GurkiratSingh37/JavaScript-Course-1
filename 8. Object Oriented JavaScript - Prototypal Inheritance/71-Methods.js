// methods:
// function inside object

// 1. For Example,
const person={
    firstName: "Gurkirat",
    age: 8,
    about:function(){
        console.log(`Person name is ${firstName} and age is ${age}`);
    }
}
/* person.about(); */ // returns -> ReferenceError: firstName is not defined

/** 2. We will use 'this' keyword which takes value at the runtime
 * 2.1 - When @about key that is a function is called by using it's object i.e. @person (person.about()), 
 *       @this, inside @about () will be the object @person itself. We can prove this by calling @this, inside the console.log ()
 */
const person2={
    firstName: "Gurkirat",
    age: 8,
    about:function(){
        console.log(this);
    }
}
person2.about();


const person3={
    firstName: "Gurkirat",
    age: 8,
    about:function(){
        console.log(`Person name is ${this.firstName} and age is ${this.age}`);
    }
}
person3.about();

// 3. Another Case:

function personInfo(){
    console.log(`Person name is ${this.firstName} and age is ${this.age}`);
}

const person4={
    firstName: "Gurkirat Singh",
    age: 23,
    about: personInfo // not calling like 'personInfo()' rather just assigning the value of the function name to it.
}

const person5={
    firstName: "Hardik",
    age: 22,
    about: personInfo
}

const person6={
    firstName: "Yuvi",
    age: 23,
    about: personInfo
}

person4.about();
person5.about();
person6.about();
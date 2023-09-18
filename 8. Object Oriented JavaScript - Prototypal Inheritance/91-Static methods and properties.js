// Static methods and properties

// 1. - Earlier used Example:
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){ // using 'get'
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }

    eat(){
        return `${this.firstName} is eating`;
    }

    isOld(){
        return this.age<18?true:false;
    }
}

// 1.1 - So, All of these methods are related to my object/instance that i create using "new" keyword.
const person1=new Person("Gurkirat", "Singh", 16);
console.log(person1.isOld());

// 1.2 - but there are methods that can be called even without creating an object.
// 1.3 - Those methods are made using 'static' keyword.

class Person2{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static callInfo(){ // can be called even without an object because it is static
        return `this is person class`;
    }
    static desc = "static property";
    get fullName(){ // using 'get'
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }

    eat(){
        return `${this.firstName} is eating`;
    }

    isOld(){
        return this.age<18?true:false;
    }
}

console.log(Person2.callInfo());

// 1.4 - can even make properties static.
console.log(Person2.desc);
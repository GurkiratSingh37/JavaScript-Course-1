// getters & setters.

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person("Gurkirat", "Singh", 22);
console.log(person1);
console.log(person1.fullName());

// 1. Now, as we know we can access a property by just specifying it's name without using "()":
console.log(person1.firstName); // accessing property "firstName" without ().

// 1.1 - But i have to use "()" in order to use a function.
console.log(person1.fullName());



// 2. - But what if wanted to access the function just like a property...????
// YESSss, we can use this by using 'get'

class Person2{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){ // using 'get'
        return `${this.firstName} ${this.lastName}`;
    }
}

const person2 = new Person2("Gurkirat", "Singh", 22);
console.log(person2);
console.log(person2.fullName); // accessing without "()".

// 3. Now i want set it's name.

class Person3{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){ // using 'get'
        return `${this.firstName} ${this.lastName}`;
    }

    setName(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person3 = new Person3("Gurkirat", "Singh", 22);
console.log(person3);

console.log(person3.firstName); 
console.log(person3.lastName); 
person3.setName("huntr", "singh");
console.log(person3.firstName); 
console.log(person3.lastName);



// 4. Now what if i want to change it's firstName & lastName by just doing this: person3.fullName = "HUNTR SINGH".
// 4.1 - we can use 'set', which willset the fullName.
class Person4{
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
}

const person4 = new Person4("Gurkirat", "Singh", 22);
person4.fullName = "HUNTR SINGH"
console.log(person4);
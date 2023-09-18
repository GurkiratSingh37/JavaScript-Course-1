// super keyword.

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isOld(){
        return this.age<18?true:false;
    }
}

class Dog extends Animal{

}

const ayush = new Dog('ayush', 20); // REMEMBER - 'ayush' is an instance of the class i.e. 'object'.
console.log(ayush);

// 1. - Now Suppose i want to add another property i.e. speed.
// 1.1 And we are using parent class constructor to add properties but it doesn't have the speed one.
// So, we to make out own constructor in class 'Dog'.
// And we just need to add a property for speed. For the 'name' and 'age' we can use/call parent class constructor by using "super()".

class Dog2 extends Animal{
    constructor(name, age, speed){
        super(name, age);
        this.speed = speed;
    }

    run(){
        return `${this.name} is running at a speed of ${this.speed}kmph.`; 
    }
}

const ayush2 = new Dog2('ayush', 20, 45);
console.log(ayush2);
console.log(ayush2.run());
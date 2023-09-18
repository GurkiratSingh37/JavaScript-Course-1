// Method Overriding - same method exist in base/parent class.

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
    constructor(name, age, speed){
        super(name, age);
        this.speed = speed;
    }

    run(){
        return `${this.name} is running at a speed of ${this.speed}kmph.`; 
    }
}

const ayush = new Dog('ayush', 20, 45);
console.log(ayush);
console.log(ayush.run());
console.log(ayush.eat());

// 1. Now suppose you want to access "eat()" function, 
// BUT!!! child class i.e. 'Dog2' doesn't have one so it will look inside the parent class now.

// 1.1 - But if the child class has one then it will basically override the parent class one.
class Dog2 extends Animal{
    constructor(name, age, speed){
        super(name, age);
        this.speed = speed;
    }

    run(){
        return `${this.name} is running at a speed of ${this.speed}kmph.`; 
    }

    eat(){
        return `Modified: ${this.name} is eating`;
    }
}

const ayush2 = new Dog2('ayush', 20, 45);
console.log(ayush2);
console.log(ayush2.run());
console.log(ayush2.eat());
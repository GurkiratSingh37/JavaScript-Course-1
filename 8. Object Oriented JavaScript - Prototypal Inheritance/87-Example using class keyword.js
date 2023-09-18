// Example to explain/practise 'class' keywrd.

// 1. - make a class named "Animal".
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

const animal1 = new Animal('Tom', 20);
console.log(animal1);
console.log(animal1.isOld());


// 2. Now make a class named "dog".
class Dog{
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

const ayush = new Dog('ayush', 20);
console.log(ayush);
console.log(ayush.isOld());

// 3. BUT!!! class "Animal" & "Dog" are doing the same thing.
// 3.1 - We can use "extends" keyword with the class in which we want to use properties as the parent class.
// 3.2 - to explain this we will create a class "Cat" which will 'extends' from class "Animal".

class Cat extends Animal{

}

const ayush2 = new Cat('ayush2', 19);
console.log(ayush2);
console.log(ayush2.isOld());
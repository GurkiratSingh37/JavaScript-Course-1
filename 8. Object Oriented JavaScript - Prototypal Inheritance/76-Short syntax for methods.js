const user1 = {
    firstName: "Gurkirat Singh",
    age: 23,
    about: function() {
        console.log(this.firstName, this.age);
    }
}

user1.about();

const user2 = {
    firstName: "Gurkirat Singh",
    age: 23,
    about() {
        console.log(this.firstName, this.age);
    }
}

user2.about(); // returns Gurkirat Singh 23. Same as in case of user1
// Defining an object 'user1' with properties and a method.

const user1 = {
    firstName: "Gurkirat Singh",
    age: 23,
    about: function() {
        console.log(this.firstName, this.age);
    }
}

// Avoid doing this! Demonstrating a common misconception.

// Previously, we called the 'about()' method like this:
// user1.about();

// Let's explore the behavior of using a function reference.

// We might attempt to store a reference to the 'about' function in a variable.
const myFunc = user1.about;

// However, invoking 'myFunc()' leads to unexpected results.
myFunc(); // Returns -> undefined, undefined

/**   This occurs because the value of 'this' within a function depends on how it is called.
* @myFunc () is now decoupled from the 'user1' object, leading to a detached context.
* The 'this' keyword inside 'about()' refers to the object to its left of the dot when called using 'user1.about()'.
* When calling @myFunc (), the context is lost, and 'this' becomes the global object (usually 'window' in browsers) or 'undefined' in strict mode.
* In this case, 'this.firstName' and 'this.age' become undefined, hence the unexpected output.
* It's important to understand how 'this' behaves in JavaScript to avoid such pitfalls.
* Always ensure that you call methods in the appropriate context to maintain expected behavior.
*/
// Nested if-else

// Let's create a game. guessing a number.

let winningNumber=18;
let userGuess=prompt("Guess a number");

console.log(typeof(userGuess), userGuess);
// 1. it gives a string and not a number

// 2. so in order to convert it into a number
let newUserGuess=+prompt("Guess a number");
console.log(typeof(newUserGuess), newUserGuess);

if(newUserGuess === winningNumber){
    console.log("You Guesses right!!!");
} else{
    if(newUserGuess<winningNumber){
        console.log("Guessed too low");
    } else{
        console.log("Guessed too high");
    } 
} 
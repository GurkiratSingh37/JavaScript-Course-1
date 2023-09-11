// FUNCTION EXPRESSION

// function singHappyBirthday(){
//     console.log("happy birthday to you......");
// }

// just like the upper function we can use variable and assign a function to it and it a function expression. 

const singHappyBirthday=function(){
    console.log("happy birthday to you......");
}

const sumThreeNumbers= function (number1, number2, number3) {
    return number1 + number2 + number3;
}

const isEven=function (num){
    num%2===0?console.log("even"):console.log("odd");
}

const getFirstChar = function (char){

    return char[0];

    //----------------OR---------------

    // return char.charAt(0);
}

const findNum = function (num, target){
    for(let i of num){
        if(i===target){
            console.log(i,num.indexOf(i));
        }
    }
}

const findTarget= function (array, target) {
    for(let i= 0; i<array. length; i++){
        if (array [i] === target) {
            return i;
        }
    return -1;
    }
}

singHappyBirthday();
console.log(sumThreeNumbers(2,3,5));
isEven(24);
console.log(getFirstChar("char"));
findNum([2,7,9,3,6],6);
console.log(findTarget([2,7,9,3,6],6));
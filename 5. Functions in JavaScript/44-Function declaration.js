function singHappyBirthday(){
    console.log("happy birthday to you......");
}
function sumThreeNumbers(number1, number2, number3) {
    return number1 + number2 + number3;
}
const returnedValue = sumThreeNumbers(2, 3, 5)
console.log(returnedValue);

// 1. isEven
// input : 1 number
// output : true , false

function isEven(num){
    // if(num%2===0){
    //     console.log("even");
    // } else{
    //     console.log("odd");
    // }

    //-------------OR---------------

    num%2===0?console.log("even"):console.log("odd");
}

isEven(9);


// 2. function
// input : string
// output: firstCharacter

function getFirstChar(char){

    return char[0];

    //----------------OR---------------

    // return char.charAt(0);
}

console.log(getFirstChar("char"));


// 3. function
// input : array, target (number)
// output: index of target if target present in array

function findNum(num, target){
    for(let i of num){
        if(i===target){
            console.log(i,num.indexOf(i));
        }
    }
}

console.log(findNum([65,35,79,43,44],79));


function findTarget(array, target) {
    for(let i= 0; i<array. length; i++){
        if (array [i] ===target) {
            return i;
        }
    return -1;
    }
}
const myArray = [2,7,9,3,6];
findTarget(myArray);
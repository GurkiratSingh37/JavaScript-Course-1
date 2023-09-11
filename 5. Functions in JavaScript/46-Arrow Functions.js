// ARROW FUNCTIONS

// const singHappyBirthday=function(){
//     console.log("happy birthday to you......");
// }

const singHappyBirthday = () => {
    console.log("happy birthday to you......");
}

const sumThreeNumbers= (number1, number2, number3)=> {
    return number1 + number2 + number3;
}

const isEven= (num) => {
    num%2===0?console.log("even"):console.log("odd");
}

const getFirstChar = char=> char[0];

const findNum = (num, target) => {
    for(let i of num){
        if(i===target){
            console.log(i,num.indexOf(i));
        }
    }
}

const findTarget= (array, target) => {
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
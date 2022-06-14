console.log("*******App js*********");

const Number1 = document.getElementById("number1");
const Number2 = document.getElementById("number2");

const Result = document.getElementById("result");

function multiplyBy() {
   num1 = Number1.value;
   num2 = Number2.value;
    Result.innerHTML = num1 * num2;
}

function divideBy() {
    num1 = Number1.value;
    num2 = Number2.value;
    Result.innerHTML = num1 / num2;
}


//! Second Solution

// const Number1 = document.getElementById("number1");
// const Number2 = document.getElementById("number2");

// const Btn1 = document.querySelector(".btn1");
// const Btn2 = document.querySelector(".btn2");

// const Result = document.getElementById("result");

// Btn1.onclick = function (){
//     num1 = Number1.value;
//     num2 = Number2.value;
//     Result.innerHTML = num1 * num2;
// }

// Btn2.onclick = function(){
//     num1 = Number1.value;
//     num2 = Number2.value;
//     Result.innerHTML = num1 / num2;
// }
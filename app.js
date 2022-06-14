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
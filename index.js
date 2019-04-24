//1. Make buttons - 10 digits, 4 operators, decimal, clear, equals (17 total)
//     give classes based on type (5 types)
//     give each a value
//2. Event handlers
//      get buttons by class
//      make each number console.log its value
//      once that works, make each button add its value as a string to a string
//      and console.log that
//3. Output
//      make a div to show what had been on the console.
//4. Operators
//      addition: adds the current "output" to the previous and stores in a third
//      variable

let output = "";
let operand = 0;
let display = document.querySelector(".display");

let clear = document.querySelector(".clear");
clear.addEventListener("click", handleClear);

let numbers = [...document.querySelectorAll(".number")];
numbers.map(number => (number.textContent = number.value));
numbers.map(number => number.addEventListener("click", handleNumber));

let add = document.querySelector(".add");
add.addEventListener("click", handleAdd);

let subtract = document.querySelector(".subtract");
subtract.addEventListener("click", handleSubtract);

let multiply = document.querySelector(".multiply");
multiply.addEventListener("click", handleMultiply);

let divide = document.querySelector(".divide");
divide.addEventListener("click", handleDivide);

let equals = document.querySelector(".equals");
equals.addEventListener("click", handleEquals);

function handleNumber() {
  output += this.value;
  display.textContent = output;
}

function handleClear() {
  output = "";
  display.textContent = 0;
  operand = 0;
}

function handleAdd() {
  operand += Number(output);
  console.log(operand);
  output = "";
}

function handleSubtract() {
  console.log("subtract");
}

function handleMultiply() {
  console.log("multiply");
}

function handleDivide() {
  console.log("divide");
}

function handleEquals() {
  display.textContent = operand;
}

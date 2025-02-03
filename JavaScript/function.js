function printName() {
  console.log("Hello Cherry!");
}
printName();
function printCounting() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
printCounting();
//Parameter & arguments:

function numb(num) {
  console.log("printing num: ", num);
}
numb(5);
//Get Average:
function getAvg(num1, num2) {
  let avg = (num1 + num2) / 2;
  console.log("Average: ", avg);
}
getAvg(3, 7);

//return functions:
function returnSum(a, b, c) {
  let sum = a + b + c;
  return sum;
}
let ans = returnSum(1, 2, 3);
console.log("Printing Sum: ", ans);

function getMyname(fName, lName) {
  let fullName = fName + " " + lName;
  return fullName;
  //unreachable statements after return :
  let a = 10;
  console.log(a);
}
let fullname = getMyname("Cherry", "Codes");
console.log("Full name: ", fullname);

//function through variable:

const multiply = function (a, b) {
  return a * b;
};
console.log("Printing multiplication: " + multiply(2, 20));

//arrow function;

let getExp = (a, b) => {
  return a ** b;
};
console.log("The value is: ", getExp(1, 2));

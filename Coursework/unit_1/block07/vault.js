let numOne = 1; // declare variable one
let numTwo = 39; // declare variable two
let numThree = 41; // declare variable three

const combinationOne = (numOne * 10); // first arithmetic operation
const combinationTwo = (numOne + numTwo); // second arithmetic operation
const combinationThree = (numThree - numOne * 2); // third arithmetic operation

let combinationCode = combinationOne + ' - ' + combinationTwo + ' - ' + combinationThree; // generate lock code

console.log("You have received this message because you have been chosen to open an important vault. Here is the secret combination: " + combinationCode); // display message to viewer

alert("You have received this message because you have been chosen to open an important vault. Here is the secret combination: " + combinationCode); // display pop-up
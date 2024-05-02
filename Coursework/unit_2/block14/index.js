// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  return numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }

  return sum;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  let sum = 0;
  let mean = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }

  mean = sum / numbers.length;
  return mean;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  let minNum = 0;
  for (let i = 0; i < numbers.length; i++) {
    // if the current number is less than minNum then the current number is the min
    if (numbers[i] < minNum) {
      minNum = numbers[i];
    }
  }

  return minNum;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  let maxNum = 0;
  for (let i = 0; i < numbers.length; i++) {
    // if the current number is more than maxNum then the current number is the max
    if (numbers[i] > maxNum) {
      maxNum = numbers[i];
    }
  }

  return maxNum;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  let minNum = 0;
  let maxNum = 0;

  for (let i = 0; i < numbers.length; i++) {
    // if the current number is less than minNum then the current number is the min
    if (numbers[i] < minNum) {
      minNum = numbers[i];
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    // if the current number is more than maxNum then the current number is the max
    if (numbers[i] > maxNum) {
      maxNum = numbers[i];
    }
  }

  return maxNum - minNum;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  const evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 == 0) {
      evenNumbers.push(numbers[i]);
    }
  }

  return evenNumbers;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  const oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 !== 0) {
      oddNumbers.push(numbers[i]);
    }
  }

  return oddNumbers;
}

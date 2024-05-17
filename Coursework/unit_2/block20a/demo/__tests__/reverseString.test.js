// 👉 STEP 1:  Import reverseString from reverse-string.js
const { reverseString } = require("../index");
//👉 STEP 2: Add a describe() block for the function we will test
describe("reverseString", () => {
  //👉 STEP 3: Add a happy path test for the function
  test("reverses single-word strings", () => {
    expect(reverseString("pancake")).toEqual("ekacnap");
  });
  //👉 STEP 3: Add a sad path test for the function
});

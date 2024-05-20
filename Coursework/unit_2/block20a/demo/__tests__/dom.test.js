/**
 * @jest-environment jsdom
 */

// 👉 STEP 1:  Import onReverseButtonClick from index.js
const { onReverseButtonClick } = require("../index");
// 👉 STEP 2:  Import getByRole and fireEvent from the DOM testing library
const { getByRole, fireEvent } = require("@testing-library/dom");

/**
 * Resets the document to its initial state before each test.
 */
function resetDOM() {
  document.body.innerHTML = 
  <main>
    <h1>String Reverser</h1>
    <label>
      Type something:
      <input type="text" />
    </label>
    <button>Reverse!</button>
    <label>
      Output:
      <output></output>
    </label>
  </main>;
  document
    .querySelector("button")
    .addEventListener("click", onReverseButtonClick);
}

// 👉 STEP 2:  Create a describe() block for the function we will test
describe("onReverseButtonClick", () => {
  // 👉 STEP 3:  call the resetDOM function beforeEach test
  beforeEach(() => {
    resetDOM();
    //call 2nd function
  });

  // 👉 STEP 4: Create a test for the happy path
  // See https://www.w3.org/TR/html-aria/#docconformance
  test("reverses the input one-word string", () => {
    //grab the input
    const input = getByRole(document, "textbox");
    //grab the output
    const output = getByRole(document, "status");
    //grab the button
    const btn = getByRole(document, "button");

    input.value = "hello";
    fireEvent.click(btn);
    expect(output.textContent).toEqual("olleh");
  });

  // 👉 STEP 4: Create a test for the sad path
  test("reverses the input string with punctuation", () => {
    //grab the input
    const input = getByRole(document, "textbox");
    //grab the output
    const output = getByRole(document, "status");
    //grab the button
    const btn = getByRole(document, "button");

    input.value = "hello!!!!";
    fireEvent.click(btn);
    expect(output.textContent).toEqual("!!!!olleh");
  });
});
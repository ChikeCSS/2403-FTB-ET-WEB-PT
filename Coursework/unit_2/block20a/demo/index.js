/**
 * Iterates backward through the given string
 * to build a new string in reverse order.
 * @param {String} str
 * @returns {String} the reverse of the given string
 */
function reverseString(str) {
  let output = "";
  for (let i = str.length - 1; i >= 0; i--) {
    output += str[i];
  }
  return output;
}

/**
 * Updates the output element with the reverse of the input element's value.
 */
function onReverseButtonClick() {
  const input = document.querySelector("input");
  const output = document.querySelector("output");
  output.textContent = reverseString(input.value);
}

// Since we're testing in both the browser and Node.js, we need to check
// whether we're in Node.js before exporting anything.
if (typeof module !== "undefined") {
  module.exports = { onReverseButtonClick, reverseString };
} else {
  document
    .querySelector("button")
    .addEventListener("click", onReverseButtonClick);
}

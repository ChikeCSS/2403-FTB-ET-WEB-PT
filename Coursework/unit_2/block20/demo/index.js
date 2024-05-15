const state = {
  numbers: [],
  total: 0,
};

/**
 * 👉 STEP 1: Grab the `form`, `output` and div with a class of `total`
 * from the html document and save them to variables
 */

/**
 * 👉 STEP 2: Add an event listener to the form element which will wait for
 * a submit event and call the function `addNumber`
 *
 * Listening for `submit` is almost always better than the button `click`
 */

/**
 * 👉 STEP 3: Add an event listener to the total element which will wait for
 * a click event and call the function `onNumberClick`
 *
 * This function uses event bubbling:
 *      we attach the event listener to the parent so that we don't have to attach it to each child
 */

/**
 * 👉 STEP 4: Complete the function so that it renders an array of numbers separated by commas to the element passed
 *
 * Note: This will be used in the addNumber function
 *
 *
 * @param {Number[]} numberBank - array of integers
 * @param {Object} element - DOM element to replace the children of
 */
function renderNumbers(numberBank, element) {}

/**
 * 👉 STEP 5: Complete the function so that it adds the submitted number from the form into `numbers`, clears the form, and re-renders the page.
 *
 * Hint: Make sure to check it's a number before adding it into `numbers`
 *
 * Note: use renderNumbers to re-render the page
 *
 * @param {Event} event the deepest element that was clicked
 */
function addNumber(event) {}

/**
 * 👉 STEP 6: Complete the function so that it updates the class of the event target to `active`
 *
 * Note: There are css styles applied to this class so the style of the
 * number should toggle on and off when clicking the total number
 *
 * @param {Event} event the deepest element that was clicked
 */
function onNumberClick(event) {}

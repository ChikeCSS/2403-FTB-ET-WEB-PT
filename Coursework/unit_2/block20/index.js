//create numbers array
const state = {
  numbers: [],
  odds: [],
  evens: [],
};

//grab & list queries
const form = document.querySelector("form");
console.log(form);
const output = document.querySelector("output");
console.log(output);
const sortOne = document.getElementById("sortOne");
console.log(sortOne);
const sortAll = document.getElementById("sortAll");
console.log(sortAll);
const idOdds = document.querySelectorAll("output");
console.log(idOdds);
const idEvens = document.querySelectorAll("output");
console.log(idEvens);

//add listeners
form.addEventListener("submit", addNumber);
sortOne.addEventListener("click", sortOdds);
sortAll.addEventListener("click", () => {
  sortOdds();
  sortEvens();
});

//render numbers (e.g. [1, 2, 3] --> "1, 2, 3")
function renderNumbers(numberBank, element) {
  const commaNumberBank = numberBank.join(", ");
  element.replaceChildren(commaNumberBank);
}

//add number to number bank
function addNumber(event) {
  event.preventDefault();
  //get the number from the form
  const number = form.elements.number.value;

  //check if it's actually a number
  console.log(parseInt(number));
  if (parseInt(number)) {
    //add number to our state
    state.numbers.push(number);
    console.log(state.numbers);

    //re-render on numbers on page
    renderNumbers(state.numbers, output);
  }

  //clear form
  form.elements.number.value = null;
}

//add odd numbers to odds array
function sortOdds(event) {
  for (let i = 0; i < state.numbers.length; i++) {
    if (state.numbers[i] % 2 === 1 && !state.odds.includes(state.numbers[i])) {
      state.odds.push(state.numbers[i]);
    }
  }

  //console log that odds array is functioning
  console.log(state.odds);

  //re-render on numbers on page
  renderNumbers(state.odds, idOdds[1]);
}

//add even numbers to evens array
function sortEvens(event) {
  for (let i = 0; i < state.numbers.length; i++) {
    if (state.numbers[i] % 2 === 0 && !state.evens.includes(state.numbers[i])) {
      state.evens.push(state.numbers[i]);
    }
  }

  //console log that evens array is functioning
  console.log(state.evens);

  //re-render on numbers on page
  renderNumbers(state.evens, idEvens[2]);
}

//prevent page from refreshing
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

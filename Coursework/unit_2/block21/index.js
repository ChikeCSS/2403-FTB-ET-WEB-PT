//cohort
const COHORT = "2403-ftb-wt-web-pt";
// API URL
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/recipes`;

/**
 * 👉 STEP 1: Create an object called state that holds an array for party objects
 */
const state = {
  parties: [],
};

/**
 * 👉 STEP 2: Complete the function so that it:
 *    - uses `fetch` to make a GET request to the API
 *    - turns the response into json
 *    - stores the json of parties into state
 *    - calls `renderAllParties`
 */
const fetchAllParties = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    state.parties = data.data;

    renderAllParties();
  } catch (error) {
    console.log(error);
  }
};

/**
 * 👉 STEP 3: Complete the function so that it:
 *    - uses `fetch` to make a POST request to the API sending the data passed in the body of the request
 *    - turns the response into json
 *    - calls `fetchAllParties`
 *
 * Note: date isn't used in this API but you will need to know how to work with it in the workshop
 */

/**
 * 
 * JS  {
        name, 
        imageUrl: image_url,
        description,
 } -----

 JSON.STRINGIFY 

  --> JSON {
        "name": "whatever name", 
        "imageUrl": "image_url/path",
        "description": "Some good description",
 }
 */
const createNewParty = async (name, image_url, description, date) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name, //shorthand when variable is same name as key of object
        imageUrl: image_url,
        description,
        // date: new Date(date).toISOString()
      }),
    });
    await fetchAllParties();
  } catch (error) {
    console.log(error);
  }
};

/**
 * 👉 STEP 4: Complete the function so that it:
 *    - uses `fetch` to make a DELETE request to the API to delete a party with the id passed to the function
 *    - calls `fetchAllParties`
 */
const removeParty = async (id) => {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    await fetchAllParties();
  } catch (error) {
    console.log(error);
  }
};

// render all parties on the page
const renderAllParties = () => {
  const partiesContainer = document.getElementById("parties-container");
  const partyList = state.parties;

  if (!partyList || partyList.length === 0) {
    partiesContainer.innerHTML = "<h3>No parties found</h3>";
    return;
  }

  //resets html of all parties
  partiesContainer.innerHTML = "";

  //creates a card for each party
  partyList.forEach((party) => {
    const partyElement = document.createElement("div");
    partyElement.classList.add("party-card");
    partyElement.innerHTML = `
            <h4>${party.name}</h4>
            <p>${party.imageUrl}</p>
            <p>${party.description}</p>
            <button class="delete-button" data-id="${party.id}">Remove</button>
        `;
    partiesContainer.appendChild(partyElement);

    const deleteButton = partyElement.querySelector(".delete-button");
    //add event listener to the delete button so we can delete a party
    deleteButton.addEventListener("click", (event) => {
      try {
        event.preventDefault();
        removeParty(party.id);
      } catch (error) {
        console.log(error);
      }
    });
  });
};

//  adds a listener to our form so when we submit the form we create a new party
const addListenerToForm = () => {
  const form = document.querySelector("#new-party-form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    await createNewParty(
      form.name.value,
      form.imageUrl.value,
      form.description.value,
      form.date.value
    );

    //clears the form after we create the new party
    form.name.value = "";
    form.imageUrl.value = "";
    form.description.value = "";
    form.date.value = "";
  });
};

//initial function when the page loads
const init = async () => {
  //gets all the parties from the API
  await fetchAllParties();
  //adds a listener to the form so we can add a party when the user submits the form
  addListenerToForm();
};

init();

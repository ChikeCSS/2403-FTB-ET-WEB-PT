// Use the API_URL variable to make fetch requests to the API.
// Replace the placeholder with your cohort name (ex: 2109-UNF-HY-WEB-PT)
const cohortName = "2403-FTB-ET-WEB-PT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

const state = {
  players: [],
};

/**
 * Fetches all players from the API.
 * @returns {Object[]} the array of player objects
 */
const fetchAllPlayers = async () => {
  try {
    // TODO
    const response = await fetch(`${API_URL}/players`);
    const result = await response.json();
    console.log(result);
    state.players = result.data;
    console.log(result.data);
    renderAllPlayers(result.data);
    return state.players;
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
  }
};

/**
 * Fetches a single player from the API.
 * @param {number} playerId
 * @returns {Object} the player object
 */
const fetchSinglePlayer = async (playerId) => {
  try {
    // TODO
    const response = await fetch(`${API_URL}/players/${playerId}`);
    const result = await response.json();
    console.log(result);
    state.players = result.data;
    console.log(result.data);
    renderSinglePlayer(result.data);
    return state.players;
  } catch (err) {
    console.error(`Oh no, trouble fetching player #${playerId}!`, err);
  }
};

/**
 * Adds a new player to the roster via the API.
 * @param {Object} playerObj the player to add
 * @returns {Object} the player returned by the API
 */
const addNewPlayer = async (playerObj) => {
  try {
    // TODO
    await fetch(`${API_URL}/players/${playerId}`, {
      method: "POST",
    });
    await fetchAllPlayers();
  } catch (err) {
    console.error("Oops, something went wrong with adding that player!", err);
  }
};

/**
 * Removes a player from the roster via the API.
 * @param {number} playerId the ID of the player to remove
 */
const removePlayer = async (playerId) => {
  try {
    // TODO
    await fetch(`${API_URL}/players/${playerId}`, {
      method: "DELETE",
    });
    await fetchAllPlayers();
  } catch (err) {
    console.error(
      `Whoops, trouble removing player #${playerId} from the roster!`,
      err
    );
  }
};

/**
 * Updates `<main>` to display a list of all players.
 *
 * If there are no players, a corresponding message is displayed instead.
 *
 * Each player is displayed in a card with the following information:
 * - name
 * - id
 * - image (with alt text of the player's name)
 *
 * Additionally, each card has two buttons:
 * - "See details" button that, when clicked, calls `renderSinglePlayer` to
 *    display more information about the player
 * - "Remove from roster" button that, when clicked, will call `removePlayer` to
 *    remove that specific player and then re-render all players
 *
 * Note: this function should replace the current contents of `<main>`, not append to it.
 * @param {Object[]} playerList - an array of player objects
 */
const renderAllPlayers = (playerList) => {
  // TODO
  const playersContainer = document.getElementById("players-container");
  const playerList = state.players;

  if (!playerList || playerList.length === 0) {
    playersContainer.innerHTML = "<h3>No players found</h3>";
    return;
  }

  //resets html of all players
  playersContainer.innerHTML = "";

  //creates a card for each player
  playerList.forEach((player) => {
    const playerElement = document.createElement("div");
    playerElement.classList.add("player-card");
    playerElement.innerHTML = `
    <h4>${player.name}</h4>
    <p>${player.id}</p>
    <p>${player.breed}</p>
    <img src="${player.imageUrl}" alt="${player.name}">
    <p>${player.teamname}</p>
    <button class="delete-button" data-id="${player.id}">Remove</button>
        `;
    playersContainer.appendChild(playerElement);

    const deleteButton = playerElement.querySelector(".delete-button");
    //add event listener to the delete button so we can delete a player
    deleteButton.addEventListener("click", (event) => {
      try {
        event.preventDefault();
        removePlayer(player.id);
      } catch (error) {
        console.log(error);
      }
    });
  });
};

/**
 * Updates `<main>` to display a single player.
 * The player is displayed in a card with the following information:
 * - name
 * - id
 * - breed
 * - image (with alt text of the player's name)
 * - team name, if the player has one, or "Unassigned"
 *
 * The card also contains a "Back to all players" button that, when clicked,
 * will call `renderAllPlayers` to re-render the full list of players.
 * @param {Object} player an object representing a single player
 */
const renderSinglePlayer = (player) => {
  // TODO

  const playersContainer = document.getElementById("players-container");
  const player = state.players;

  if (!player || player.length === 0) {
    playersContainer.innerHTML = "<h3>No player found</h3>";
    return;
  }

  //resets html of all players
  playersContainer.innerHTML = "";

  //creates a card for each player
  const playerElement = document.createElement("div");
  playerElement.classList.add("player-card");
  playerElement.innerHTML = `
            <h4>${player.name}</h4>
            <p>${player.id}</p>
            <p>${player.breed}</p>
            <img src="${player.imageUrl}" alt="${player.name}">
            <p>${player.teamname}</p>
            <button class="delete-button" data-id="${player.id}">Remove</button>
        `;
  playersContainer.appendChild(playerElement);

  const deleteButton = playerElement.querySelector(".delete-button");
  //add event listener to the delete button so we can delete a player
  deleteButton.addEventListener("click", (event) => {
    try {
      event.preventDefault();
      removePlayer(player.id);
    } catch (error) {
      console.log(error);
    }
  });
};

/**
 * Fills in `<form id="new-player-form">` with the appropriate inputs and a submit button.
 * When the form is submitted, it should call `addNewPlayer`, fetch all players,
 * and then render all players to the DOM.
 */
const renderNewPlayerForm = () => {
  try {
    // TODO
    const form = document.querySelector("#new-player-form");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      await createNewPlayer(
        form.name.value,
        form.id.value,
        form.breed.value,
        form.imageUrl.value,
        form.teamname.value
      );

      //clears the form after we create the new recipe
      form.name.value = "";
      form.id.value = "";
      form.breed.value = "";
      form.imageUrl.value = "";
      form.teamname.value = "";
    });
    addNewPlayer();
  } catch (err) {
    console.error("Uh oh, trouble rendering the new player form!", err);
  }
};

/**
 * Initializes the app by fetching all players and rendering them to the DOM.
 */
const init = async () => {
  console.log(state.players);
  const players = await fetchAllPlayers();
  renderAllPlayers(players);

  renderNewPlayerForm();
};

// This script will be run using Node when testing, so here we're doing a quick
// check to see if we're in Node or the browser, and exporting the functions
// we want to test if we're in Node.
if (typeof window === "undefined") {
  module.exports = {
    fetchAllPlayers,
    fetchSinglePlayer,
    addNewPlayer,
    removePlayer,
    renderAllPlayers,
    renderSinglePlayer,
    renderNewPlayerForm,
  };
} else {
  init();
}

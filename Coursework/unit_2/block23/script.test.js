const {
  fetchAllPlayers,
  fetchSinglePlayer,
  addNewPlayer,
  removePlayer,
  renderAllPlayers,
  renderSinglePlayer,
  renderNewPlayerForm,
} = require("./script");

describe("fetchAllPlayers", () => {
  // Make the API call once before all the tests run
  let players;
  beforeAll(async () => {
    players = await fetchAllPlayers();
  });

  test("returns an array", async () => {
    expect(Array.isArray(players)).toBe(true);
  });

  test("returns players with name and id", async () => {
    players.forEach((player) => {
      expect(player).toHaveProperty("name");
      expect(player).toHaveProperty("id");
    });
  });
});

// TODO: Tests for `fetchSinglePlayer`
describe("fetchSinglePlayer", () => {
  let players;
  beforeAll(async () => {
    players = await fetchSinglePlayer();
  });
});

// TODO: Tests for `addNewPlayer`
describe("addNewPlayer", () => {
  let players;
  beforeAll(async () => {
    players = await addNewPlayer();
  });
});

// (Optional) TODO: Tests for `removePlayer`
describe("removePlayer", () => {
  let players;
  beforeAll(async () => {
    players = await removePlayer();
  });
});
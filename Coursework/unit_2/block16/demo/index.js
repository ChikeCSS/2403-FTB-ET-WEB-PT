import { gamesData } from "./games.js";

//Array / Object Review

//👉 STEP 0.1:How to to see the keys of the first object in the gamesData array?
console.log(Object.keys(gamesData[0]));

//👉 STEP 0.2:How to to see the values of the first object in the gamesData array?
console.log(Object.values(gamesData[0]));
/**
 * 👉 STEP 1: Get the games sold in 2006
 */
const sales06 = gamesData.filter((game) => {
  return game.Year_of_Release === "2006";
});

/**
 * 👉 STEP 2: Find out how many games have the genre of 'Adventure' that were sold in 2006
 */
let adventureGames = sales06.filter((game) => game.Genre === "Adventure");
console.log("adventureGames", adventureGames);

/**
 * 👉 STEP 3: Create a function called getYears that
 * takes `data` as an argument and returns an array
 * containing the years within the dataset
 */
function getYears(data) {
  return data.map((game) => {
    return game.Year_of_Release;
  });
}
//test the function
const yearsData = getYears(gamesData);
console.log("getYears\n", yearsData);

/**
 * 👉 STEP 4: Check if there is a game sold in 2005 using .find
 */
const gameSold05 = yearsData.find((year) => year === "2005");
console.log("gameSold05", gameSold05);

/**
 * 👉 STEP 5: Check if there is a game sold in 1997 using .includes
 */
const game97 = yearsData.includes("1997");
console.log("game97", game97);

/**
 * 👉 STEP 6: create a function called parseSales
 * that takes `data` as an argument and
 * updates the sales as float numbers instead of strings
 *
 * hint: use .forEach method
 */
const parseSales = (data) => {
  data.forEach((obj) => {
    obj.NA_Sales = parseFloat(obj.NA_Sales);
    obj.EU_Sales = parseFloat(obj.EU_Sales);
    obj.JP_Sales = parseFloat(obj.JP_Sales);
    obj.Other_Sales = parseFloat(obj.Other_Sales);
    obj.Global_Sales = parseFloat(obj.Global_Sales);
  });
};

//test function
// console.log(
//   "type of data for Global_Sales\n",
//   typeof gamesData[0].Global_Sales
// );
parseSales(gamesData);
// console.log(
//   "type of data for Global_Sales after parseSales\n",
//   typeof gamesData[0].Global_Sales
// );

/**
 * 👉 STEP 7: Create a function called getSales
 * that takes `data` as an argument and returns
 * the totla global sales of the games
 *
 * hint: use .reduce method
 */
function getSales(data) {
  return data.reduce((total, obj) => {
    return total + obj.Global_Sales;
  }, 0);
}

//test the function
console.log("games Sales", getSales(gamesData));
console.log("adventure games Sales", getSales(adventureGames));

/**
 * 👉 STEP 8: Create a function called lastHalf
 * that takes `data` as an argument and returns
 * the last half of the array
 *
 * hint: use .slice method
 */
function lastHalf(data) {
  return data.slice(data.length / 2);
}
const lastHalfGamesData = lastHalf(gamesData);
console.log("lastHalfGamesData", lastHalfGamesData);

/**
 * 👉 STEP 9: Create a function called lowecaseGenres
 * that takes `data` as an argument and returns
 * a new array with lowercase genres
 *
 *  hint: use .map method
 */
const lowercaseGenres = (data) => {
  return data.map((game) => {
    return {
      ...game,
      Genre: game.Genre[0].toLowerCase() + game.Genre.slice(),
      // String --> string
      // 0
    };
  });
};

// console.log("lowercaseGenres\n", lowercaseGenres(gamesData)[0].Genre);
// console.log("original data is unchanged\n", gamesData[0].Genre);

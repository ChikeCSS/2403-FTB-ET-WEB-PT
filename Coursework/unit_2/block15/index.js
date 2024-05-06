// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter a list of comma-separated froyo flavors (no spaces)",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// Split the string of flavors into an array of strings.
const flavorArray = userInputString.split(",");

// Print array to verify functionality.
console.log(flavorArray);

// Create empty array for observed flavors.
const observedFlavors = {};

for (let i = 0; i < flavorArray.length; i++) {
  const currentFlavor = flavorArray[i];
  if (observedFlavors[currentFlavor]) {
    // Add + 1 to the current flavor
    observedFlavors[currentFlavor] = observedFlavors[currentFlavor] + 1;
  } else {
    // Current flavor is assigned to 1 (otherwise would be undefined)
    observedFlavors[currentFlavor] = 1;
  }
}

// Console log observed flavors
console.log(observedFlavors);

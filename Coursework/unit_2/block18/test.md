<!-- PART ONE -->
# Unit Test:
A function called "multiplication" that returns the product of the two input numbers.

## Expectations: 
* takes an array of numbers
* returns the product of the numbers in the array
    - product should also be a number
* should throw an error if you pass an array of strings instead of numbers
* should work with negative numbers

## Test Specs:
1. Expect `multiplication([2, 3])` to return 6
2. Expect `multiplication(["2", "3",])` to return an error
3. Expect `multiplication([2, -3])` to return -6
4. Expect `multiplication()` to return 0

<!-- PART TWO -->
# Unit Test:
A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.

## Expectations: 
* takes 2 arrays of integers
* returns a single array that only contains the odd numbers from both of the arrays
    - should be in ascending order
* should throw an error if you pass an array of strings instead of integers
* should throw an error if you pass floats instead of integers
* multiples of the same odd number in the arrays should not repeat

## Test Specs:
1. Expect `concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])` to return [-1, 1, 3, 9, 15]
2. Expect `concatOdds(["3", "2", "1"], ["9", "1", "1", "1", "4", "15", "-1"])` to return an error
3. Expect `concatOdds([3.2, 2.1, 1.9], [9.1, 1.1, 1.1, 1.4, 4.15, 15.1, -1.3])` to return an error
4. Expect `concatOdds()` to return 0

<!-- PART THREE -->
# Functional Test:
A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.

## Expectations: 
* The user doesn't have an empty cart when checking out
* The user will be prompted to add one or more items if not
* The user is already logged in if they have an account
* The user will first be asked to login or create an account before checking out as guest

## Test Specs:
GIVEN I am a new user or an unlogged-in existing user visiting the site

WHEN my cart is empty
AND I click the checkout button
THEN I see an error message prompting me to add one or more items

WHEN I'm not signed in
AND I click the checkout button
THEN I see a pop-up first asking to login or create an account before checking out as guest

WHEN I enter only a valid email
AND I click the checkout button
THEN I see an error message prompting me to enter valid email and/or password

WHEN I enter only a valid password
AND I click the checkout button
THEN I see an error message prompting me to enter valid email and/or password
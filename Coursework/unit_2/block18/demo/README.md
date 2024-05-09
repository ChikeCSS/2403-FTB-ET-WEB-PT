# Block 18: Testing 
Guided in-class project for Block 18: Testing.

In this project we will learn about testing methods 

## Objectives
* Compare the benefits and drawbacks of automated testing and test-driven development to manual testing/QA.
* Explain the differences between unit, acceptance, functional, integration, and UI layer tests
* Interpret pre-defined unit test specifications written in a JavaScript testing framework (Mocha/Jest/Jasmine, pick one).

## Introduction
One of the first steps for many TDD projects is determining which tests need to be written for a project, feature, or piece of code. These range from unit tests (at a very low level, what result we should expect from calling a specific function or piece of code), to functional tests (what does our website or app need to do when a user performs some action).

In this demo, we are going to write instructions for tests, often known as test specifications, or test specs, for a prompt found in [test.md](./test.md). 

We won't be writing tests within this module but if you're curious how our unit tests would look in code check out [test.js](./test.js). 

You can run the unit test by going to the `block_18_testing/demo` folder in your terminal and running `npm i` (to install depedencies) followed by `npm run test`
"use strict";

// Functions /////
// Write the function.
function logger() {
  console.log("My name is Danny");
}

// Calling or running or invoking the
// function which can receive and return data.
// a sort of machine like a food processor.
logger();

// Function with parameters
function fruitProcessor(apples, oranges) {
  const juice = `I'll have a juice with ${apples} apples and ${oranges} oranges`;
  // return the value from the const.
  // console.log(apples, oranges);
  return juice;
}
// Return data.
const myJuice = fruitProcessor(1, 2);
console.log(myJuice);

const appleOrangeJuice = fruitProcessor(3, 3);
console.log(appleOrangeJuice);

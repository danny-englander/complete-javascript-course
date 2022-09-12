"use strict";

// First function
function cutFruitPieces(fruit) {
  return fruit * 3;
}

// Function calling the first cutFruitPieces function within.
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `I'll have a juice with ${applePieces} 🍎 apple pieces and ${orangePieces} 🍊 orange pieces`;
  // return the value from the const.
  return juice;
}

console.log(fruitProcessor(2, 3));

"use strict";

// Define player vars.
// Player 1
const player0 = document.querySelector(".player--0");
const name0 = document.getElementById("name--0");
const currentScore0 = document.getElementById("current--0");

// Player 2
const player1 = document.querySelector(".player--1");
const name1 = document.getElementById("name--1");
const currentScore1 = document.getElementById("current--1");

// Define buttons.
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Dice
const diceEL = document.querySelector(".dice");

// Scores.
const score0EL = document.getElementById("score--0");
const score1EL = document.getElementById("score--1");

// Set the initial score text content to 0.
// Starting states.
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add("hidden");

// Rolling the dice.
btnRoll.addEventListener("click", function () {
  // 1. generate a random dice roll.
  // display dice
  // check for a rolled one.
  // Define the random dice roll, 1-6.
  const dice = Math.trunc(Math.random() * 6) + 1;

  // Display the dice roll.
  diceEL.classList.remove("hidden");

  if (dice === 1) {
    console.log("I rolled a 1");
  }

  // Set the dice number image displayed on click to match the number rolled.
  diceEL.setAttribute("src", `dice-${dice}.png`);

  console.log(dice);
});

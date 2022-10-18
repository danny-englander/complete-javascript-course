"use strict";

// Define player vars.
// Player 1

const playerEL = document.querySelector(".player");
const playerActiveEL = document.querySelector(".player--active");

const player0EL = document.querySelector(".player--0");
const name0EL = document.getElementById("name--0");
const current0EL = document.getElementById("current--0");

// Player 2
const player1EL = document.querySelector(".player--1");
const name1EL = document.getElementById("name--1");
const current1EL = document.getElementById("current--1");

// Define buttons.
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Dice
const diceEL = document.querySelector(".dice");

// Scores.
const score0EL = document.getElementById("score--0");
const score1EL = document.getElementById("score--1");

// Starting scores array for each player, 0 points for each side.
const scores = [0, 0];
// Define the current score
let currentScore = 0;
// Active player starts at the first player, player 1 (0)
let activePlayer = 0;

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

  // if (
  //   playerEL.classList.contains("player--active") &&
  //   playerEL.classList.contains("player--0")
  // ) {
  //   console.log("the current player is player 1");
  // } else {
  //   console.log("the current player is player 2");
  // }

  // Set the dice number image displayed on click to match the number rolled.
  diceEL.src = `dice-${dice}.png`;

  // If a 1 is rolled.
  if (dice !== 1) {
    console.log("I did not roll a 1");
    // Define the new current score.
    currentScore += dice;
    console.log("curr score", currentScore);
    // Update the player score as you roll the dice.
    // TODO: FIXME: this will have to be changed later for each player.
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;

    // Switch to the next player when a 1 is rolled.
  } else {
    // Switch to the new active player with a ternary operator.
    // if the active player is 0, then make the current player 1 and vice-versa.
    activePlayer = activePlayer === 0 ? 1 : 0;
    console.log("The active player is now player", activePlayer);
    // Reset the current score to zero when the player switches after a 1 is rolled..
    currentScore = 0;

    document
      .getElementById(`player--${activePlayer}`)
      .classList.add("player--active");
  }

  console.log(dice);
});

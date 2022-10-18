"use strict";

// Define player vars.
// Global player/
const playerEL = document.querySelector(".player");
const playerActiveEL = document.querySelector(".player--active");

// Player 1
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

// Custom function for player switching and updating.
const switchPlayer = function () {
  // set the active player's current score back to zero before we switch
  // to the new active player as per below.
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  // Reset the current score to zero when the player switches after a 1 is rolled..
  currentScore = 0;
  // Switch to the new active player with a ternary operator.
  // if the active player is 0, then make the current player 1 and vice-versa.
  activePlayer = activePlayer === 0 ? 1 : 0;
  console.log("The active player is now player", activePlayer);
  // Switch the active player background using toggle.
  player0EL.classList.toggle("player--active");
  player1EL.classList.toggle("player--active");
};

// Rolling the dice.
btnRoll.addEventListener("click", function () {
  // 1. generate a random dice roll.
  // display dice
  // check for a rolled one.
  // Define the random dice roll, 1-6.
  const dice = Math.trunc(Math.random() * 6) + 1;

  // Display the dice roll.
  diceEL.classList.remove("hidden");

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
  }

  // Switch to the next player when a 1 is rolled.
  else {
    switchPlayer();
  }

  console.log(dice);
});

// Hold button click functionality.
btnHold.addEventListener("click", function () {
  // Add the current score to the total score of the active player.
  // Finish the game.
  // Check if player's score is >= 100, otherwise, switch to the next player.
  // scores[1] = scores[1] + currentScore;
  scores[activePlayer] = scores[activePlayer] + currentScore;

  // Set the current player's score to the new total as per scores[activePlayer] + currentScore.
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  // Switch to the next player.
  switchPlayer();
});

// New game button click functionality.
btnNew.addEventListener("click", function () {
  // Reset the total scores to 0 for each player.
  score0EL.textContent = 0;
  score1EL.textContent = 0;
  // Hide the dice.
  diceEL.classList.add("hidden");

  // Reset the active player to player 0 (player 1)
  player0EL.classList.add("player--active");
  player1EL.classList.remove("player--active");
});

"use strict";
// Define the message element.
const message = document.querySelector(".message");
const btnAgain = document.querySelector(".again");
const highscoreEl = document.querySelector(".highscore");
// Score elements
// score value.
let score = 20;
// highscore (starts at 0)
let highscore = 0;
// score element
const scoreEL = document.querySelector(".score");
const checkBtn = document.querySelector(".check");

// Secret number generator
// this generates a number between 1 and 20.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const number = document.querySelector(".number");
// console.log(secretNumber);

// Custom function for messages.
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Check button event listener.
// 2 arguments, click and function.
// so it is like a function with a click that does not get called
// anywhere else.
// The function is only called when the click happens.
checkBtn.addEventListener("click", function () {
  // Define the guess input value.
  const guess = Number(document.querySelector(".guess").value);
  // console.log(typeof guess, guess);

  // if no input, send a message.
  if (!guess) {
    displayMessage("🚫 Choose a number!");
  }

  // When the guess = the secret number.
  else if (guess === secretNumber) {
    displayMessage("🎉 That is correct, you won!!");
    // Make the number = to the random secret number we define.
    number.textContent = secretNumber;
    document.body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // Update the highscore value.
    if (score > highscore) {
      highscore = score;
      // Set the new highscore.
      highscoreEl.textContent = highscore;
    }
  }

  // When the guess is wrong either way, high or low.
  else if (guess !== secretNumber) {
    if (score > 1) {
      // Use a ternary here for the refactor.
      displayMessage(
        guess > secretNumber
          ? "⬆️ Your guess is too high"
          : "⬇️ Your guess is too low"
      );

      score--;
      scoreEL.textContent = score;
    }
    //
    else {
      displayMessage("💥 You lost the game");
      scoreEL.textContent = 0;
    }
  }
});

btnAgain.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("❓Start guessing...");
  scoreEL.textContent = score;
  document.querySelector(".guess").value = "";
  number.textContent = "?";
  number.style.width = "15rem";
  document.body.style.backgroundColor = "#222";
});

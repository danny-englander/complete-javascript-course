"use strict";
// Define the message element.
const message = document.querySelector(".message");
const btnAgain = document.querySelector(".again");

// Score elements
// score value.
let scoreVal = 20;
// score element
const score = document.querySelector(".score");
const checkBtn = document.querySelector(".check");

// Secret number generator
// this generates a number between 1 and 20.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const number = document.querySelector(".number");
console.log(secretNumber);

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
    message.textContent = "🚫 Choose a number!";
  }

  // When the guess = the secret number.
  else if (guess === secretNumber) {
    message.textContent = "🎉 That is correct, you won!!";
    // Make the number = to the random secret number we define.
    number.textContent = secretNumber;
    document.body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  }

  // When the guess > the secret number.
  else if (guess > secretNumber) {
    if (scoreVal > 1) {
      message.textContent = "⬆️ Your guess is too high";
      scoreVal--;
      score.textContent = scoreVal;
    }
    //
    else {
      message.textContent = "💥 You lost the game";
      score.textContent = 0;
    }
  }

  // When the guess < the secret number.
  else if (guess < secretNumber) {
    if (scoreVal > 1) {
      message.textContent = "⬇️ Your guess is too low";
      scoreVal--;
      score.textContent = scoreVal;
    }
    //
    else {
      message.textContent = "💥 You lost the game";
      score.textContent = 0;
    }
  }
});

btnAgain.addEventListener("click", function () {
  message.textContent = "❓ Start guessing...";
  score.textContent = 20;
  document.querySelector(".guess").value = "";
  document.body.style.backgroundColor = "#222";
  number.textContent = "?";
  number.style.width = "15rem";
});

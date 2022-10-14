"use strict";
// Define the message element.
const message = document.querySelector(".message");

// Score elements
// score value.
let scoreVal = 20;
// score element
const score = document.querySelector(".score");

const checkBtn = document.querySelector(".check");

// Secret number generator
// this generates a number between 1 and 20.
const secretNumber = Math.trunc(Math.random() * 20) + 1;
const number = document.querySelector(".number");

number.textContent = secretNumber;
// console.log(number);

// Check button event listener.
// 2 arguments, click and function.
// so it is like a function with a click that does not get called
// anywhere else.
// The function is only called when the click happens.
checkBtn.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // console.log(typeof guess, guess);
  // if no input, send a message.
  if (!guess) {
    message.textContent = "🚫 Choose a number!";
  } else if (guess === secretNumber) {
    message.textContent = "🎉 That is correct, you won!!";
  } else if (guess > secretNumber) {
    if (scoreVal > 1) {
      message.textContent = "⬆️ Your guess is too high";
      scoreVal--;
      score.textContent = scoreVal;
    } else {
      message.textContent = "💥 You lost the game";
    }
  } else if (guess < secretNumber) {
    if (scoreVal > 1) {
      message.textContent = "⬇️ Your guess is too low";
      scoreVal--;
      score.textContent = scoreVal;
    } else {
      message.textContent = "💥 You lost the game";
    }
  }
});

"use strict";
// Define the message element.
const message = document.querySelector(".message");
// Update the string.

// Define various elements.

const score = document.querySelector(".score");

// guess = 20;
const checkBtn = document.querySelector(".check");

// Secret number generator
// this generates a number between 1 and 20.
const randomNumber = Math.trunc(Math.random() * 20) + 1;
const number = document.querySelector(".number");

number.textContent = randomNumber;
// console.log(number);

// Check button event listener.
// 2 arguments, click and function.
// so it is like a function with a click that does not get called
// anywhere else.
// The function is only called when the click happens.
checkBtn.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // console.log(typeof guess, guess);
  // message.textContent = "🎉 Correct Number!";

  // if no input, send a message.
  if (!guess) {
    message.textContent = "🚫 Choose a number!";
  } else if (guess === randomNumber) {
    message.textContent = "🎉 That is correct!!";
  } else if (guess <= randomNumber) {
    message.textContent = "⬇️ Sorry too low";
  } else if (guess >= randomNumber) {
    message.textContent = "⬆️ Sorry too high";
  }
});

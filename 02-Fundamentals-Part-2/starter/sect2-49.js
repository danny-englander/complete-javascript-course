"use strict";

// "While" loops ////////////////////

// Regular for loop for comparison.
// for (let rep = 1; rep <= 5; rep++) {
//   console.log(`For Lifting weights repetition ${rep} 🏋️‍♂️`);
// }

// keep loop running while the condition is true.
// This is the same as the above traditional for loop.
// The while loop is a little more versatile than the for loop.
let rep = 1;
while (rep <= 5) {
  // console.log(`While Lifting weights repetition ${rep} 🏋️‍♂️`);
  rep++;
}

// rolled dice game.
// trunc rounds off the number to a whole number
// >> Returns the integral part of the a numeric expression, x, removing any fractional digits.
// * 6 for all the numbers of a dice. (1-6)
// increment by 1.
// random Returns a pseudorandom number between 0 and 1.
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

// This keeps on rolling the dice until a 6 is rolled.
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  // Keep the loop going to roll.
  dice = Math.trunc(Math.random() * 6) + 1;
  // if a 6 is rolled...
  if (dice === 6) console.log("Loop ended, you rolled a 6!!");
}

"use strict";

// Looping backwards and loops within loops
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// loop over the array backwards
for (let i = jonas.length - 1; i >= 0; i--) {
  // This will now render the array backwards.
  // I am guessing this would come in handy at times.
  console.log(i, jonas[i]);
}

// Loop inside a loop!!! /////////////////////////////
// 3 different exercises and repeat each 5 times.
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    // Outer loop variable is available within the inner loop.
    console.log(`Exercise ${exercise}: Lifting weights rep ${rep} 🏋️‍♂️`);
  }
}

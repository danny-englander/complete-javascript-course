"use strict";

// Loops
// For loop keeps running while condition is true.
// Basic ES5 loop.
for (let rep = 1; rep <= 5; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
  false,
  0,
];

// Create an empty array
const types = [];
// Dynamic for loop without specifying the length.
for (let i = 0; i < jonas.length; i++) {
  // Ready from the jonas array.
  console.log(jonas[i], typeof jonas[i]);
  // Define types as typeof jonas.

  // Filling types array.
  // types[i] = typeof jonas[i];
  // You can also do the above a cleaner way with push.
  // This will print out the types.
  types.push(typeof jonas[i]);
}

// Log the types array outside the loop!! :)
console.log(types);

// Define a new array to store birth years.
const years = [1991, 2007, 1969, 2020];
// Empty array to push in data into within the loop.
const ages = [];
for (let i = 0; i < years.length; i++) {
  // push the age calc into the array.
  // calc individually and then render the array outside the loop.
  // This is pretty similar to PHP!!!
  ages.push(2022 - years[i]);
  // Continue and break.
  console.log("--- Only Strings ---");
  // basically the !== to skips anything but strings with the continue afterwards
  // Continue exists the current iteration.
  if (typeof jonas[i] !== "string") continue;
  // This will now only log strings as per above.
  console.log(jonas[i], typeof jonas[i]);
  /*
  Jonas string
  Schmedtmann string
  teacher string
  */
}

console.log("--- Break with Number ---");
for (let i = 0; i < years.length; i++) {
  // This will now stop after the first number is found.
  if (typeof jonas[i] === "number") break;
  // prints any strings up to the point at which there is a number
  /*
  Jonas string
  Schmedtmann string
  */
  console.log(jonas[i], typeof jonas[i]);
}

console.log(ages);

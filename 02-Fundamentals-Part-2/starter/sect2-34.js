"use strict";
// Declarations can be called before b/c of hoisting.
const age1 = calcAge1(1963);
// Function declaration
function calcAge1(birthYear) {
  return 2022 - birthYear;
}

// Function expression when you define a var at the function level.
//expressions are preferred b/c of promoting a better structure.
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calcAge2(1963);

console.log(age1, age2);

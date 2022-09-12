"use strict";
// Arrow functions / ES6.
// Arrow functions do not get the so-called "this" keyword.
// Simple arrow function.
const calcAge3 = (birthYear) => 2022 - birthYear;

const age3 = calcAge3(1963);
console.log(age3);

const yrsUntilRetirement = (birthYear, firstName) => {
  // Need the braces and return when more than 1 line of code.
  const age = 2022 - birthYear;
  const retirement = 70 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yrsUntilRetirement(1963, "Danny"));
console.log(yrsUntilRetirement(1968, "Jane"));

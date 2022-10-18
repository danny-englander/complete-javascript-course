"use strict";

// JS Scoping examples.
function calcAge(birthYear) {
  const age = 2022 - birthYear;
  // firstName is a global scope so it works here.
  console.log(firstName);

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);

    // Block scope
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh and you are a millenial ${firstName}`;
      console.log(str);
    } else {
      var millenial = false;
      const str = `Oh and you are not a millenial ${firstName}`;
      console.log(str);
    }
    // Old style ES5 var is available outside of the block scope above.
    // var variables do not care about blocks at all.
    console.log(millenial);
  }

  printAge();
  return age;
}

// Global const is hoisted so that a function above it recognizes it.
const firstName = "Danny";

// This will cause an error as age is from an inner scope.
// console.log(age);

// This won't work either as it's a scope within a scope
// printAge();

calcAge(1963);

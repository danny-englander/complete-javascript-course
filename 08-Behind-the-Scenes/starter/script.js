"use strict";

// JS Scoping examples.
function calcAge(birthYear) {
  const age = 2022 - birthYear;
  // firstName is a global scope so it works here.
  console.log(firstName);

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log("orig output:", output);

    // Block scope
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh and you are a millenial ${firstName}`;
      console.log(str);
    } else {
      // Local scope supersedes global scope here.
      // So JS looks in the local scope first and will
      // not perform a global scope lookup.
      const firstName = "Johnny";
      // Not a millenial.
      var millenial = false;
      const str = `Oh and you are not a millenial ${firstName}`;
      console.log(str);

      // This will not be available outside this scope.
      function add(a, b) {
        return a + b;
      }
      // This works here as it is immediately outside its scoped function.
      console.log("2 + 3 =", add(2, 3));
      output = "new Output!!";
    }
    console.log(output);
    // Old style ES5 var is available outside of the block scope above.
    // var variables do not care about blocks at all.
    console.log(millenial);

    // This will only work here if strict mode is off which we do not want to do. ^^^
    // console.log("2 + 3 =", add(2, 3));
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

"use strict";

// birthYear is a local var and has noting to do with the one below.
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

// Function expression.
const yrsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    // Note, the return immediately exists the function.
    console.log(`${firstName} can retire in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} retired ${retirement} years ago`);
    return -1;
  }
};

console.log(yrsUntilRetirement(1991, "Danny"));
console.log(yrsUntilRetirement(1970, "Mike"));

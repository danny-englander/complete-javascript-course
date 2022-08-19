const age = 15;
const isOldEnough = age >= 18;
const yearsLeft = 18 - age;

// if statement boolean.
// control structure.
if (isOldEnough) {
  console.log("Sarah can start driving 🚗!");
} else {
  console.log(
    `Sarah cannot start driving 🛑! She has ${yearsLeft} years remaining before she can drive.`
  );
}

const birthYear = 1963;
// Declare an empty var first
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

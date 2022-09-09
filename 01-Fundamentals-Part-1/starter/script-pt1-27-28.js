// Expressions.
3 + 4;
1991;
true && false;

// Statement.
if (23 > 10) {
  // The string here is an expression within a statement.
  const str = "23 is bigger";
}

const me = "Danny";
// Statement.
console.log(`I'm ${2037 - 1991} years old ${me}`);

// Ternary or conditional operator (3 parts).
// condition / if / else = 3 parts
const age = 15;
age >= 18
  ? console.log("I like to drink wine🍷")
  : console.log("I like to drink water 💦");

// Operator as an Expression
const drink = age >= 18 ? "wine🍷" : "water 💦";

console.log(drink);

// Ternary is much shorter rather than if / else
let drink2;
if (age >= 18) {
  drink2 = "wine🍷";
} else {
  drink2 = "water 💦";
}

console.log(drink2);

// Ternary can also be used in template literal! (if / else cannot!)
console.log(`I'd like to drink some ${age >= 18 ? "wine🍷" : "water 💦"}`);

//Ternary is not a direct replacement in all instances for if /else -- you will still need if / else at times.

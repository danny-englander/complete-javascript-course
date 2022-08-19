// Part 1 lesson 17
const firstName = "Danny";
const job = "developer";
const birthYear = 1963;
const now = 2022;

const age = now - birthYear;

// old way of concatenating
const danny = "I'm " + firstName + ", a " + age + " year old " + job + "!";
// template literal strings introduced in ES6.
const dannyNew = `I'm ${firstName}, a ${age} year old ${job}!`;
console.log(danny);
console.log(dannyNew);
console.log(`a string`);

// Multiline string (old).
console.log("string with \n\
multiple \n\
lines");

// template literal multiline
console.log(`string
with
multi lines`);

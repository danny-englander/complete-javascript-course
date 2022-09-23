"use strict";

// Arrays /////////////

// Literal array syntax.
const friends = ["Michael", "Steven", "Peter"];
// Array function syntax.
const y = new Array(1991, 1984, 2008, 2019);
console.log(friends[1]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

// Mutate part of the array.
// Note, primitive values are immutable but array values are not
// Thus, we can do this.
friends[2] = "Jay";
console.log(friends);

// ... but you cannot wholesale replace an entire array
// friends = ["Bob", "Alice"];

// An array within an array
const danny = ["Danny", "Englander", 2022 - 1963, "developer", friends];

console.log(danny);
console.log(danny.length);

const calcAge = (birthYear) => 2022 - birthYear;

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log("age1, 2, 3", age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log("ages", ages);

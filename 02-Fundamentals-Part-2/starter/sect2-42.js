"use strict";

// Introduction to Objects

// The issue with the array below is, there is no way to call array keys by name only
// by index number. Objects solve this issue.
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

console.log(jonasArray);

// ******* Use arrays for ordered predictable data and objects
// for unstructured data as per below.
// **********************************************

// Define an object key / value pairs.
// each key is called a property.
// This is the object literal syntax.
const danny = {
  firstName: "Danny",
  lastName: "Englander",
  age: 2022 - 1963,
  job: "Software Engineer",
  friends: ["David", "Donna", "Steven"],
};

console.log(
  `My name is ${danny.firstName} ${danny.lastName}. I'm ${danny.age} years old. My friend's names are ${danny.friends}. I work as a ${danny.job}.`
);

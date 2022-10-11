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

/*
Operator precedence
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
Member Access	left-to-right	… . …
Computed Member Access	n/a	… [ … ]
*/

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

// This uses the "dot" notation.
console.log(
  `My name is ${danny.firstName} ${danny.lastName}. I'm ${danny.age} years old. My friend's names are ${danny.friends}. I work as a ${danny.job}.`
);

// This uses the "bracket" notation.
console.log(
  `My name is ${danny["firstName"]} ${danny["lastName"]}. I'm ${danny["age"]} years old. My friend's names are ${danny["friends"]}. I work as a ${danny["job"]}.`
);

// Here we concatenate to form the key name
const nameKey = "Name";
// Any expression can go into the square brackets so this is
// an advantage of the brackets notation.
// This will really come in handy at times.
// Dot notation is cleaner so each have their
// advantages.
console.log(danny["first" + nameKey]);
console.log(danny["last" + nameKey]);

// Prompt input example.
const interestedIn = prompt(
  "What do you want to know about Danny? Choose firstName, lastName, age, friends, and job"
);

// Using bracket notation, the prompt does a lookup on the object
// extracting the data from the string entered.
// Determine if a valid property has been input or not
if (danny[interestedIn]) {
  console.log(danny[interestedIn]);
} else {
  console.log(
    "Please enter a valid string:  firstName, lastName, age, friends, job"
  );
}

// We can also assign new properties in the process with
// either the dot notation or the brackets type
danny.location = "Boston";
danny["twitter"] = "@danny_englander";

console.log(danny);

// Challenge
// Danny has 3 friends and his best friend's name is David.
console.log(
  `${danny["firstName"]} has ${danny["friends"].length} friends and his best friend's name is ${danny["friends"][0]}`
);

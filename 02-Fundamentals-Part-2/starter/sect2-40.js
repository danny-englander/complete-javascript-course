"use strict";

// Array operations (Methods on arrays)
const friends = ["Michael", "Steven", "Peter"];

// Push is a method so it is like running a function.
// add the element to the array.
const newLength = friends.push("Jay");
// Mutates the original array
console.log(friends);
console.log(newLength);

// add elements to the beginning fo the array with unshift.
friends.unshift("John");

// Remove elements , pop is for removing last one.
friends.pop(); // Last
const popped = friends.pop();

console.log(popped);
console.log(friends);

// Remove elements , shift is for removing first one.
friends.shift();
console.log(friends);

// return index number.
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("foo")); // -1 does not exist

// ES6 checking for whether or not an element exists in an array.
friends.push(23);
console.log(friends.includes("Steven")); // true
console.log(friends.includes("foo")); // false
console.log(friends.includes(23)); // true
console.log(friends.includes("23")); // false

if (friends.includes("Peter")) {
  console.log("You have a friend called Peter");
} else {
  console.log("No friend called Peter");
}

friends.includes("Steven")
  ? console.log("You have a friend called Steven")
  : console.log("No friend called Steven");

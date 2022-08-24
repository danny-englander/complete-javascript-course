// 5 falsy values
// 0,  '', undefined, null, Nan

// truthy values
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("hello")); // true
console.log(Boolean({})); // true // Empty object
console.log(Boolean("")); // false (empty string)

const money = 100;
if (money) {
  // 0 is false so this is "if false"
  console.log("don't spend it all ;)");
} else {
  // true
  console.log("You should get some money");
}

let height;
if (height) {
  console.log("Yay, height is defined.");
} else {
  console.log("Boo, height is undefined.");
}

// Equality comparison operators
const age = "18";
// Equality operator strict ===
// This will be false
if (age === 18) console.log("You're 18");

// loose operator ==
// more forgiving, avoid this is much as possible.
// This will be true (loose)
if (age == 18) console.log("You're 18");

const fave = Number(prompt("what's your fav number?"));
// console.log(typeof fave);

if (fave === 23) {
  console.log("cool 23 is an amazing number");
} else if (fave === 7) {
  console.log("cool 7 is an amazing number");
} else {
  console.log("not 23 or 7");
}

// Different comparison operator
if (fave !== 23) {
  console.log("why not 23");
}

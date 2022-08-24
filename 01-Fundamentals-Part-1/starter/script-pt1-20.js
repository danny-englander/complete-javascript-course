// Type conversion, you actually do the conversion yourself
const inputYear = "1991";
console.log(inputYear);
// Convert string to number using Number
strToNum = Number(inputYear);
console.log(strToNum + 18);
// This will print NaN as it cannot convert letters to a number
console.log(Number("Jonas"));
// This prints number but it is invalid.
console.log(typeof NaN);
// Convert number to string.
console.log(String(23));

// Type coercion
// plus sign + 23 + gets converted to a string.
console.log("I am " + 23 + "years old");
// minus sign, multiply, and division get converted to a number
console.log("23" - "10" - 3);
console.log("23" * 2);
console.log("23" / 2);

let n = "1" + 1; // 11
n = n - 1; // 11 -1
console.log("n", n); // =  10

let y = "100" - 1; // 99
y = y + 1; // 99 + 1
console.log("y", y); // =  100

let z = "22" - "4" - "3" - "2" + 5;
console.log("z", z); // 18

let x = "22" - "4" - "3" - 2 + "5";
console.log("x", x); // 135 as a string

console.log("23" - "10" - 3); // 10
console.log("23" * "2"); //46
console.log("23" / "2"); // 11.5
console.log("23" + "10" + 3); // str 23103]

let b = "1" + 1;
b = b - 1;
console.log(b); // 10

let c = 2 + 3 + 6 + 4 + "1";
console.log(c); //151

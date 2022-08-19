// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice outputto the console,saying who hast hehigherBMI.The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. UseatemplateliteraltoincludetheBMIvaluesintheoutputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉 GOOD LUCK 😀

const markMassTD1 = 78;
const markHeightTD1 = 1.69;
const johnMassTD1 = 92;
const johnHeightTD1 = 1.95;

const BMIMark = markMassTD1 / markHeightTD1 ** 2;
const BMIJohn = johnMassTD1 / (johnHeightTD1 * johnHeightTD1);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI); // markHigherBMI true

if (markHigherBMI) {
  console.log(
    `Marks BMI is ${BMIMark} and is higher than Johns's which is ${BMIJohn}`
  );
} else {
  console.log(
    `Marks BMI is ${BMIMark} and is lower than Johns's which is ${BMIJohn}`
  );
}

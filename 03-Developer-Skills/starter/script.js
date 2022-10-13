// Remember, we're gonna use strict mode in all scripts now!
"use strict";

///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const temperatures = [3, -2, -6, -1, "error", 9, 14, 18, 15, 14, 9, 5];
const temperatures2 = [5, -1, -9, -1, "error", 10, 3, 4, 14, 12, 9, 5];

// Custom function.
const calcTempAmplitude = function (temps) {
  // let max = the very first element in the array [0].
  let max = temps[0];
  let min = temps[0];
  // loop the elements in the array.
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    // if the current value is > than the current max value,
    // then the max value becomes the new value
    // Check for items that are not a number
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  // subtract the lowest from the highest number to get the temp amplitude.
  // A = Tmax - Tmin
  return max - min;
};
// Define a var for the function.
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Problem 2
// function should now receive 2 arrays of temps
// don't create the same function twice, just merge them.
// Q. how to merge 2 arrays???
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
// const concatArrays = array1.concat(array2);
// merge the 2 arrays like so.
// temperatures merged with temperatures2!
// Custom function.
const calcTempAmplitudeCombined = function (t1, t2) {
  // combine the 2 arrays.
  const temps = t1.concat(t2);
  // let max = the very first element in the array [0].
  let max = temps[0];
  let min = temps[0];
  // loop the elements in the array.
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    // if the current value is > than the current max value,
    // then the max value becomes the new value
    // Check for items that are not a number
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  // subtract the lowest from the highest number to get the temp amplitude.
  // A = Tmax - Tmin
  return max - min;
};
// Define a var for the new combined function,m it takes 2 args (t1, t2).
const amplitudeNew = calcTempAmplitudeCombined(temperatures, temperatures2);
console.log(amplitudeNew);

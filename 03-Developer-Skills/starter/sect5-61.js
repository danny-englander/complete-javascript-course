"use strict";

// Debug methodology. (see A, B, C)
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // B) Fix the bug. (Convert the string to a number).
    // value: Number(prompt("Degrees Celsius")),
    value: 10,
  };

  // B) Find the bug.
  console.table(measurement);
  // Debug steps
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) identify the bug
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  // combine the 2 arrays.
  const temps = t1.concat(t2);
  // let max = the very first element in the array [0].
  let max = 0;
  let min = 0;
  // loop the elements in the array.
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    // if the current value is > than the current max value,
    // then the max value becomes the new value
    // Check for items that are not a number
    // debugger;
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  // subtract the lowest from the highest number to get the temp amplitude.
  // A = Tmax - Tmin
  console.log(max, min);
  return max - min;
};
// Define a var for the function.
const amplitudeBug = calcTempAmplitudeBug([3, 1, 5], [9, 4, 5]);
console.log(amplitudeBug);

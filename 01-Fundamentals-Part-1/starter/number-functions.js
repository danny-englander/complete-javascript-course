// Random number function.
let randomNums = [...Array(10)].map((_) => (Math.random() * 100) | 0);

// Calc avg / mean.
// reduce() method returns a single value: the function's accumulated result.
function calculate(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(randomNums);
console.log(calculate(randomNums));

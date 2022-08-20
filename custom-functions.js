// Random number function.
let randomNums = [...Array(10)].map((_) => (Math.random() * 100) | 0);

// Calc avg / mean.
// reduce() method returns a single value: the function's accumulated result.
function calcAverage(array) {
  return (
    array.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    ) / array.length
  );
}

console.log(randomNums);
console.log(calcAverage(randomNums));

const numbers = document.querySelector(".numbers");
const average = document.querySelector(".result");
const numberItems = randomNums.join(" ");
if (numbers && average) {
  numbers.append(numberItems);
  average.append(calcAverage(randomNums));
}

// Add class to a list of items ***************
// returns NodeList
const itemList = document.querySelectorAll("li.item");
// converts NodeList to Array
const itemArray = [...itemList];
// Loop through the array
itemArray.forEach((item) => {
  // Add a class to each item in the list
  item.classList.add("bar");
});
// *************************************

let fooRandomNums = [...Array(10)].map((_) => (Math.random() * 100) | 0);
console.log("randoms", fooRandomNums);

function fooCalcAverage(array) {
  return array.reduce((prevVal, currVal) => prevVal + currVal) / array.length;
}

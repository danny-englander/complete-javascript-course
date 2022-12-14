// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement π (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)

// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: βThe bill was 275, the tip was 41.25, and the total value 316.25β

// Test data:
// Β§ Data 1: Test for bill values 275, 40 and 430
// Hints:
// Β§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2 Β§ Value X is between 50 and 300, if it's>= 50 && <= 300π
// GOOD LUCK π

const billValue = 275;
billValueTip15 = (billValue * 15) / 100;
billValueTip20 = (billValue * 20) / 100;
console.log(billValueTip15);
console.log(billValueTip20);

console.log(
  `The tip for this dinner totaling $${billValue} is $${
    billValue >= 50 && billValue <= 300 ? billValueTip15 : billValueTip20
  }`
);

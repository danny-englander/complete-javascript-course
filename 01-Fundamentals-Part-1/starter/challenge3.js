// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculatetheaveragescoreforeachteam,usingthetestdatabelow

// 2. Comparetheteam'saveragescorestodeterminethewinnerofthecompetition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

// 3. Bonus 1: Include a requirement for a minimum score of 100.With this rule, a
// team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// GOOD LUCK 😀

function calcAverage(array) {
  return (
    array.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    ) / array.length
  );
}

// Questions / bonus 1- 3.
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [99, 112, 101];

const dolphinsMean1 = Math.floor(calcAverage(dolphinsScores1));
const koalasMean1 = Math.floor(calcAverage(koalasScores1));

const minScoreToWin = 100;

console.log("Dolphins", dolphinsMean1);
console.log("Koalas", koalasMean1);

if (dolphinsMean1 >= 100 || koalasMean1 >= 100) {
  if (dolphinsMean1 >= koalasMean1) {
    console.log("dolphins win");
  } else {
    console.log("Koalas win");
  }
} else {
  console.log("no winner");
}

// Bonus 4.
const dolphinsScores2 = [88, 112, 101];
const koalasScores2 = [99, 95, 106];

const dolphinsMean2 = Math.floor(calcAverage(dolphinsScores2));
const koalasMean2 = Math.floor(calcAverage(koalasScores2));

console.log("Dolphins2", dolphinsMean2);
console.log("Koalas2", koalasMean2);

if (dolphinsMean2 >= 100 || koalasMean2 >= 100) {
  if (dolphinsMean2 === koalasMean2) {
    console.log("it's a draw!");
  } else if (dolphinsMean2 >= koalasMean2) {
    console.log("dolphins win");
  } else {
    console.log("Koalas win");
  }
} else {
  console.log("no winner");
}

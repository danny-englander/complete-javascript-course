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

// Users from JSON
const users = document.querySelector(".users");

fetch("https://dummyjson.com/users")
  .then((response) => response.json())
  .then((json) =>
    json.users.forEach((user) => {
      console.log(user);
      users.insertAdjacentHTML(
        "afterbegin",
        `<li class='users__items'>${user.firstName} ${user.firstName} <br> <a href="">${user.email}</a></li>`
      );
    })
  )
  .catch(() => console.log("error, no data"));

fetch("https://dummyjson.com/users")
  .then((response) => response.json())
  .then((json) => console.log(json.users));

// Random number function.
let randomNums = [...Array(10)].map((_) => (Math.random() * 100) | 0);

// Consecutive number function.
let consecutiveNums = Array(10)
  .fill(20)
  .map((x, y) => x + y);

console.log("consecutiveNums", consecutiveNums);

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
const userList = document.querySelector(".user-list");

fetch("https://dummyjson.com/users?limit=10")
  .then((response) => response.json())
  .then((json) =>
    json.users.forEach((user) => {
      userList.insertAdjacentHTML(
        "afterbegin",
        `<li class='users__items'>${user.firstName} ${user.lastName} <br> <a href="">${user.email}</a></li>`
      );
    })
  )
  .catch(() => console.log("error, no data"));

fetch("https://dummyjson.com/users")
  .then((response) => response.json())
  .then((json) => console.log(json.users));

const localUsers = [
  {
    id: 1,
    first_name: "Val",
    last_name: "Tremellier",
    email: "vtremellier0@trellian.com",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    first_name: "Verla",
    last_name: "Farquar",
    email: "vfarquar1@marketwatch.com",
    isActive: true,
    age: 50,
  },
  {
    id: 3,
    first_name: "Pamela",
    last_name: "Wheatman",
    email: "pwheatman2@miibeian.gov.cn",
    isActive: false,
    age: 40,
  },
];

// ES6 arrow loop
// localUsers.forEach((person) => {
//   console.log(person.first_name);
//   console.log(person.last_name);
//   console.log(person.email);
// });

// ES6 map.
const names = localUsers
  .sort((userA, userB) => (userA.age > userB.age ? 1 : -1))
  .filter((person) => person.isActive)
  .map((person) => ({ email: person.email, age: person.age }));

names.forEach((person) => {
  console.log(person.email);
});

// ES5 loop.
// for (let i = 0; i < localUsers.length; i++) {
// }

// Counter function which has increment and getValue
const privateCounter = () => {
  let count = 0;

  return {
    increment: (val = 1) => {
      count += val;
    },
    getValue: () => {
      return count;
    },
  };
};

const counter = privateCounter();
console.log("val", counter.getValue()); // initial value 0
counter.increment();
console.log("val", counter.getValue()); // initial value 1

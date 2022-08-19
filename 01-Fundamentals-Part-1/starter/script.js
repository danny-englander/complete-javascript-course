let js = "amazing";
// Values, smallest unit of information in JS
console.log("Jonas");
console.log(23);
console.log(50 + 4 + 6);
let firstName = "Matilda";
let $functon = "foo";
console.log(firstName);
console.log(firstName);
console.log(firstName);
let person = "foo";
let PI = 3.1415927;

// Assignment
let country = "Netherlands";
let continent = "Europe";
let population = 3044645450;
let pop_str = population.toLocaleString("en-US");
console.log(country);
console.log(continent);
console.log(pop_str);

let javascriptIsFun = true;
console.log(javascriptIsFun);
// Data types using typeof.
// console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "hello");

// Dynamic typing, redeclare a var of a different type
javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun);
console.log(javascriptIsFun);

// Declare empty var = undefined
let year;
console.log(year);
console.log(typeof year);

// Now define the variable.
year = 1991;
console.log(typeof year);

// This prints as an object so it's somewhat of a bug as it should be undefined.
// The bug won't ever be fixed
console.log(typeof null);

let age = 30;
// Reassign or mutate the age var.
age = 31;
console.log(age);

const birthYear = 1991;
// birthYear is immutable so you can't change it.
// birthYear = 1990;
// Console will yield an error.
// console.log(foo);
// You also cannot do
// const job;
// ******** Use const by default and let if it will change ********.

// var is the old way of declaring vars prior to ES6 which is similar to let
// let is block scoped and var is function scoped.
// Never use var.
var job = "Programmer";
job = "Teacher";
console.log(job);

// Always declare a var properly so do not do this!
foozBar = "whatevs";

// ******** Operators ********.

const now = 2022;
const ageSarah = now - 2018;
const ageDanny = now - 1963;
console.log(ageSarah, ageDanny);
//  2 ** 3 is the expontial operator
console.log(ageSarah * 2, ageSarah / 10, 2 ** 3);

const firstNme = "Danny";
const lastNme = "Englander";

console.log(firstNme + " " + lastNme);

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // X 4 = 100
x++; // adds 1 = 101s
x--; // 100
x--; // 99
console.log(x);
// greater than operator.
console.log(ageSarah > ageDanny); // true or false
console.log(ageSarah < ageDanny);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log("isFullAge", isFullAge);

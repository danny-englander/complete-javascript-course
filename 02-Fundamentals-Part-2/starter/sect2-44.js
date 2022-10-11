"use strict";

// Object Methods
const danny = {
  firstName: "Danny",
  lastName: "Englander",
  birthYear: 1963,
  job: "Software Engineer",
  friends: ["David", "Donna", "Steven"],
  hasDriversLicense: true,

  // Embedded function expression or a "method" within an object key!!
  // Thus an object method.
  // Traditional function.

  // calcAge: function (birthYear) {
  //   return 2022 - birthYear;
  // },

  // "This" keyword function.
  // This points to anything you want within the object.
  // This helps keep the code DRY, say for example if the object name is changed.

  // calcAge: function () {
  //   return 2022 - this.birthYear;
  // },

  // Object method function
  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  // Object method function
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} old ${
      this.job
    } and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

// Invoke the function from the object.
// Since we use "this", we don't need anything specified in the function call
console.log(danny.calcAge());
// Shorthand and efficient as we only calc age once.
console.log(danny.age);

// Challenge ///////
// "Danny is a 59 year old software engineer, and he has a / no driver's license.""
// call the object method function.
console.log(danny.getSummary());

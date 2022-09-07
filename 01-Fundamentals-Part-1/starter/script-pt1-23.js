const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// Both are true -- Sarah is able to drive
if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Some other person should drive!");
}

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

// all 3 are true. -- Sarah is able to drive!
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Some other person should drive!");
}

// Strict mode. (always use it).
// helps avoid certain bugs and enhances security.
// Creates better errors in the console.
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// Reserved words cannot be used and strict mode shows that.
// const interface = "audio";
// const private = 654;

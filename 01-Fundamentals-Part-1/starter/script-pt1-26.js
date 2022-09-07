// Switch statements.
const day = "Sunday";

switch (day) {
  case "Monday":
    console.log("On monday, I plan the course structure");
    console.log("Go to coding meetup");
    break;
  case "Tuesday":
    console.log("prepare videos");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("Write code");
    break;
  case "Friday":
    console.log("Record videos");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "Monday") {
  console.log("On monday, I plan the course structure");
  console.log("Go to coding meetup");
} else if (day === "Tuesday") {
  console.log("prepare videos");
} else if (day === "Wednesday" || day === "Thursday") {
  console.log("Write code");
} else if (day === "Friday") {
  console.log("Record videos");
} else if (day === "Saturday" || day === "Sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day");
}

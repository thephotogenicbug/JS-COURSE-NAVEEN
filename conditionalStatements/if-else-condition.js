// Conditional Statements

let condition = true;

// Syntax
if (condition) {
  console.log("Condition: True");
  console.log("Condition : Again True");
} else {
  console.log("Condition: False");
}

console.log("-------------------------------------------------");

let weather = "hot";

if (weather === "hot") {
  console.log("Weather is hot!");
} else {
  console.log("Weather is cold!");
}

console.log("-------------------------------------------------");

//  single condition
let isRaining = false;
let isCloudy = true;

if (isRaining || isCloudy) {
  console.log("Don't forget to carry Umbrella!");
} else {
  console.log("Sky is normal! Enjoy the weather!");
}

console.log("-------------------------------------------------");

// * Pratical Application

// * If hour is between 12AM(00hrs) to 1PM(13hrs) -> Good Morning
// * Else if hour is between 1PM(13hrs) to 5PM(17hrs) -> Good Afternoon
// * Else hour is between 5PM(17hrs) to 12AM(00hrs) -> Good Evening

// let hour = 18;
// let hrs = new Date();
// let hour = hrs.getHours()
let hour = new Date().getHours();

// console.log(hour.getHours())

if (hour >= 0 && hour <= 13) {
  console.log("Good Morning");
} else if (hour >= 13 && hour <= 17) {
  console.log("Good Afternoon");
} else {
  console.log("Good Evening");
}

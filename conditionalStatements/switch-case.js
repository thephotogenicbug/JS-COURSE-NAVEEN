// Switch Case

let condition = 1;

// syntax
switch (condition) {
  case 1:
    console.log("1");
  case 2:
    console.log("2");
  default:
    console.log("Default Behaviour");
}
console.log("----------------------------------------------");
// *Pratical Application  Grade Feedback system

let grade = "E";

// S - Super Grade
// A
// B
// E
// U - Unsatisfied

switch (grade) {
  case "S":
    console.log("Super Grade");
    break;
  case "A":
    console.log("Excellent Grade");
    break;
  case "E":
  case "B":
    console.log("Just Pass");
    break;
  case "U":
    console.log("Failed Grade");
    break;
  default:
    console.log("Unknown Grade");
}
console.log("--------------------------------------------");
// * *Pratical Application Grade system using Marks

let marks = 95;

switch (true) {
  case marks > 90:
    console.log("Super grade");
    break;
  case marks > 50:
    console.log("Pass");
    break;
  case marks < 50:
    console.log("Failed");
    break;
  default:
    console.log("Unknown Grade");
}

// Example : Mobile buying suggestion

/*
  *  If Given saving amount is > 10k Buy Android mobile //
  *  Else if given amount is > 60K Buy iPhone Mobile //
  *  Else if given amount is > 5k && < 10k Buy Basic Mobile //
  *  Else Print "You can't afford mobile phone now"
*/

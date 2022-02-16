// Logical operators
// *highIncome, CIBILScore -> Load Eligible, Ineligible


// Logical AND (&&)
// returns TRUE if both operands are TRUE
// let highIncome = true;
// let CIBILScore = true;

// let eligiblePerson = highIncome && CIBILScore

// console.log("Status : " + eligiblePerson);


// Logical OR (||)
// returns TRUE if any one operands are TRUE
// let highIncome = true;
// let CIBILScore = false;

// let eligiblePerson = highIncome || CIBILScore;

// let applicationStatus = eligiblePerson

// console.log("Loan Status : " + eligiblePerson);
// console.log("Application Status : " + applicationStatus);

// NOT (!)
let highIncome = true;
let CIBILScore = false;

let eligiblePerson = highIncome || CIBILScore;

let applicationStatus = !eligiblePerson

console.log("Loan Status : " + eligiblePerson);
console.log("Application Status : " + applicationStatus);


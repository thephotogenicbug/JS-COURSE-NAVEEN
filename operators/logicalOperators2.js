
// * Example using browser console

// *Boolean
let example = false
let example1 = true

let log = example || example1

console.log(log)

console.log("-------------------------------------------")

// * Non Boolean example

// Falsy (false)
// undefined
// null
// 0 
// false
// '' -> ""
// NaN (not a number)

let nonbooleanexample = false
let nonbooleanexample1 = 'Naveen'

let nonbooleanlog = nonbooleanexample || nonbooleanexample1

console.log(nonbooleanlog);

console.log("-------------------------------------------");

// *Truty -> Anything that is not Falsy is -> Truthy

// let truty = true
// let truty1 = 0

// let trutylog = truty || truty1

// console.log(truty)



// let userColor = "red";
let userColor = undefined;
let defaultColor = "blue";
let currentColor = userColor || defaultColor

console.log("Selected color: " + currentColor)


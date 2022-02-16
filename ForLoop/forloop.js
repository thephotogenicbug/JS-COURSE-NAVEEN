// Syntax
// for(initialExpression; condition; step){
//     console.log("Number #1")
// }

/*
  ! i = index i++ = increment i-- = decrement
  * Inline variable
*/
// Example 1
for (let i = 0; i < 5; i++) {
  console.log("Number #", i);
}
console.log("*************************************");

// Example 2
for (let i = 1; i < 5; i++) {
  console.log("Number #", i);
}
console.log("*************************************");
// Example 3 less then or equal to 5
for (let i = 1; i <= 5; i++) {
  console.log("Number #", i);
}
console.log("*************************************");
// Example 3 less then or equal to 5 (with concatination)
for (let i = 1; i <= 5; i++) {
  console.log("Number #" + i);
}

console.log("*************************************");
// Example 4 with only odd numbers
for (let i = 1; i <= 5; i++) {
    // if remainder of division by 2 if not equal to 0 
  if (i % 2 !== 0) {
    console.log("Odd Number #" + i);
  }
}
console.log("*************************************");
// Example 5 with only odd numbers
for (let i = 10; i >= 1; i--) {
    // if remainder of division by 2 if not equal to 0 
  if (i % 2 !== 0) {
    console.log("Odd Number #" + i);
  }
}
console.log("*************************************");
// Example 6 with only even numbers
for (let i = 10; i >= 1; i--) {
    // if remainder of division by 2 equal to 0 
  if (i % 2 == 0) {
    console.log("Even Number #" + i);
  }
}


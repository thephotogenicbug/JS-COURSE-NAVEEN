// Removing element in the array
const number = [1, 2, 3, 4];

// Add element at the end
// .push => opposite pop

// Add element at the start
// .unshit => opposite shift

// Add element at the middle
// .splice => opposite splice

// remove element at the end
number.pop()
console.log(number)
console.log("-----------------------------------------")
// remove element at the start
number.shift()
console.log(number)
console.log("-----------------------------------------");
// remove element at the middle
number.splice(2, 2)  // start number, 2nd element
console.log(number)

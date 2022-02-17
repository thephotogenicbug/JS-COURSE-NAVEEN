// Adding element to javaScript array  // string, index, boolean, undefined, null
// const cart = ["Fruits", 1, true, undefined, null] 
// arrays can contain several values and it can be different data-types

// const number = [4, 5, 6];
const number = ["Apple", "Lemon", "Grapes"];


/* push data inside existing array dynamically, 
u can modify / edit the value inside the array 
but you cant remove the array and change it to other data types
*/ 
// normal method
// number[3] = "Orange"



// push
number.push("Guava", "Jackfruit") // it will add the values at the end

// unshift
number.unshift("Orange", "Strawberries"); // it will add the values at the start

// splice
number.splice(3, 0, "Watermelons", "Bananas" )// it will add the values at the middle

// console.log(number)
// access single value using there index
console.log(number[2]);
// console.log(number)

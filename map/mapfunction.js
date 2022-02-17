// Mapping a JavaScript Array
const numbers = [1, 2, 3, 4, 5];

console.log(numbers)
 console.log("----------------------------------------------")

// multiplied by 2  if you want to change the behaviour accroding to ur logical then use map function
let multiplied = numbers.map(function(val){
    return val * 2;
})
console.log(multiplied)
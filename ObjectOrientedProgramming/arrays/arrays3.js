// Finding an element in javascript reference Array

const orders = [
  { id: 1, item: "Smartphones", quantity: 1 },
  { id: 2, item: "Laptop", quantity: 3 },
  { id: 3, item: "Maggie", quantity: 5 },
];

// console.log(orders.includes({ id: 1, item: "Smartphones", quantity: 1 }));

// callback method , iam gonna call the orders array and find it and function will run the method it will keep on finding one Object at a time
// let result = orders.find(function(order){
//    return order.item === "Laptop" // return if true
// })

// Arrow function
let result = orders.find((order) => {
  return order.item === "Laptop"; // return if true
});

console.log(result)
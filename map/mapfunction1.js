// Mapping a JavaScript Array
const people = [
  // Object
  { id: 1, firstName: "Naveen", lastName: "Achari" },
  { id: 2, firstName: "Vijay", lastName: "Joseph" },
  { id: 3, firstName: "Ajith", lastName: "Kumar" },
];

// map only firstName
let fname = people.map(function(val){
    return val.firstName
})
console.log(fname);
console.log("---------------------------------------")

// map only firstName and lastName
let firstNameLastName = people.map(function(val){
    return val.firstName + val.lastName
})
console.log(firstNameLastName);
console.log("---------------------------------------");

// map only firstName and lastName using array
let firstNameLastNameArray = people.map(function(val){
    return [val.firstName, val.lastName].join(" ");
})
console.log(firstNameLastNameArray);
console.log("---------------------------------------");

// map only id and combine firstName and lastName 

// Synatax
// {id: 1, fullName: "Naveen Achari"}

let idfirstNamelastName = people.map(function(val){
  let fullName = [val.firstName, val.lastName].join(" ");
  // create object ref {id: 1, fullName: "Naveen Achari"}
  let obj = {id : val.id, fullName: fullName}; // id is a key
  return obj;
})
console.log(idfirstNamelastName);
console.log("---------------------------------------");

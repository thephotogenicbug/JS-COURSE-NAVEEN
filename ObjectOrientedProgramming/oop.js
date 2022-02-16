// let name = "Naveen"; // string
// let age = 25; // index
// let interest = ["Creating, teaching new things"]; // arrays
//  Object
// let address = {
//   city: "Bangalore",
//   state: "Karnataka",
// };

// function greeting(){
//      let msg = "My name is " + name + " i love " + interest;
//      
//     let msg = `My name is ${name}, i love ${interest}`;
//     console.log(msg)
// }

// greeting()

// *encapsulation in javascript  
// *Object-oriented Programming (OOP)

//Object
let person = {
  // key: value
  name: "Naveen",
  age: 25,
  interest: ["Creating, teaching new things.."],
  isAlive : true,
  // nested Object
  address: {
    city: "Bangalore",
    state: "Karnataka",
  },

  greeting: function(){
       let msg = `My name is ${this.name}, i love ${this.interest}`;
       console.log(msg);
  }
};

let person2 = {
  // key: value
  name: "Kumar",
  age: 25,
  interest: ["Creating, teaching new things.."],
  isAlive: true,
  // nested Object
  address: {
    city: "Bangalore",
    state: "Karnataka",
  },

  greeting: function () {
    let msg = `My name is ${this.name}, i love ${this.interest}`;
    console.log(msg);
  },
};

person.greeting()
person2.greeting()


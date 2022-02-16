//*Factory functions

// function createPerson() {
//      Object
//   let person = {
//      key: value
//     name: "Naveen",
//     greeting: function () {
//       let msg = `My name is ${this.name}, i love ${this.interest}`;
//       console.log(msg);
//     },
//   };
//
//   return person;
// }

function createPerson(name) {
  // Object
  return {
    // key: value
    name: name,
    greeting() {
      let msg = `My name is ${this.name}`;
      console.log(msg);
    },
  };
}

let naveen = createPerson("Naveen");
let kumar = createPerson("Kumar");
naveen.greeting();
kumar.greeting();

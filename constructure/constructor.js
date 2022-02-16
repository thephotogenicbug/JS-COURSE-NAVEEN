function createPerson(name) { // camelcase : myFirstName can be used in variable and function names
  return {
    name,
    greeting(){
        console.log(`My name is ${this.name}`);
    }
  };
}


// Constructor functions
function Person(name){ // Pascalcase -> MyFirstName can be used in classes , constructor functions 
   this.name = name;
   this.greeting = function(){
       console.log(`My name is ${this.name}`);
   }
}
let person = new Person("Naveen")
person.greeting()
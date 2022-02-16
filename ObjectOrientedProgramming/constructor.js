// Factory Functions
function createPerson(name) { // camelcase : myFirstName can be used in variable and function names
  return {
    name,
    greeting(){
        console.log(`My name is ${this.name}`);
    }
  };
}

// * only for ppl who have knowledge in JAVA C++ C# 
// Constructor functions
function Person(name) { // Pascalcase -> MyFirstName can be used in classes , constructor functions 
   this.name = name;
   this.greeting = function(){
       console.log(`My name is ${this.name}`);
   }
}
// variable names, keys inside this keyword will automatically map so you can access them easily 
let person = new Person("Naveen"); // if you add new keyword it will create and give empty object
// let x = {}
person.greeting()
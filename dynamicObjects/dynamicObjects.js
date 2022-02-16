// Dynamic Object
const person = {
    name:"naveen"
}

person.age = 24;
person.greeting = function(){}

delete person.greeting;
delete person.age
console.log(person)
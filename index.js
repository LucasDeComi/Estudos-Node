//const main = require("./person");
//main.Person

const { Person } = require("./person") // Obtém o Person do módulo person.js

const person = new Person("Lucas");
console.log(person.sayMyName());
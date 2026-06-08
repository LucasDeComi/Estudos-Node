//const main = require("./person");
//main.Person

const { Person } = require("./person") // Obtém o Person do módulo person.js

// require("./modules/path"); // Utilizar o require sozinho somente executa os comandos no script
require("./modules/fs");

const person = new Person("Lucas");
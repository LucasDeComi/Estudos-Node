class Person {
    constructor(name) {
        this.name = name;
    }

    sayMyName() {
        return `My name is ${this.name}!`;
    }
}

module.exports = { Person }; // Exporta o módulo como um objeto, cujo atributo é a classe Person
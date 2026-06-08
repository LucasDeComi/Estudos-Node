const path = require("path");

// Basename, método para retornar nome do arquivo
console.log(path.basename(__filename)); // __filename é um valor com o nome do arquivo em que o código está sendo executado

// Dirname, método para retornar diretório do arquivo
console.log(path.dirname(__filename));

// Extname, método para retornar extensão do arquivo
console.log(path.extname(__filename));

// Parse, método para criar objetos Path
console.log(path.parse(__filename));

// Join, método para juntar caminhos
console.log(path.join(__dirname, "test", "test.js")); // __dirname é um valor com o caminho até o arquivo atual
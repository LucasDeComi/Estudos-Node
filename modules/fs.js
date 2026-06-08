const fs = require("fs");
const path = require("path");

// Método para criar diretórios
fs.mkdir(path.join(__dirname, "/test"), (error) => {
    if(error) {
        return console.log(`Erro: [${error}]`);
    }
    console.log("Diretório criado com sucesso!")
}); // mkdir é um método assíncrono e possui um callback

// Método para escrever em arquivos
fs.writeFile(path.join(__dirname, "/test", "test.txt"), // Caso não exista, ele cria o arquivo
    "Fui criado utilizando fs.writeFile", // Parâmetro utilizado para definir o conteúdo do arquivo
    (error) => {
        if(error) {
            return console.log(`Erro: [${error}]`);
        }
        console.log("Arquivo criado com sucesso!");
        
        // Método para escrever em arquivos sem sobrescrever o conteúdo já existente
        fs.appendFile(path.join(__dirname, "/test", "test.txt"), "\nSou uma edição do arquivo usando appendFile", (error) => {
            if(error) {
                return console.log(`Erro: [${error}]`);
            }
            console.log("Arquivo editado com sucesso!")
        });

        // Método para ler arquivos
        fs.readFile(path.join(__dirname, "/test", "test.txt"), "utf8", (error, data) => {
            if(error) {
                return console.log(`Erro: [${error}]`);
            }
            console.log(data);
        });
    }
); // appendFile e readFile ficam dentro de writeFile, pois ele é assíncrono e a leitura pode vir desatualizada
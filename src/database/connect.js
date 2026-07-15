const mongoose = require("mongoose");

async function connectDB() {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.ud60ifr.mongodb.net/`)
    .then(() => {
        console.log("MongoDB Rodando!")
    }).catch(error => {
        console.log(`Erro encontrado: ${error}`);
    })
}

module.exports = connectDB;
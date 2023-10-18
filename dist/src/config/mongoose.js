"use strict";
const mongoose = require("mongoose");
const MONGODB_URI = "mongodb+srv://luiz:Lp15102002@cluster0.d6ngn8a.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(MONGODB_URI, {
    useNewUrlParses: true,
    useUnifiedTopology: true,
    useCreatedIndex: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro de conexão com o MongoDB"));
db.once("open", () => {
    console.log("Conectado ao MongoDB");
});
module.exports = mongoose;

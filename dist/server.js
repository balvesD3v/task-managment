"use strict";
const express = require("express");
require("./src/config/mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
//Configuração das rotas
app.use("/api", routes);
// Ponto de entrada para o servidor
app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});

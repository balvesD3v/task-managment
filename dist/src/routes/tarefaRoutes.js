"use strict";
const express = require("express");
const { criarTarefa, obterTarefa, obterTarefaPorId, atualzarTarefa, deletarTarefa, };
const router = express.Router();
router.post("/tarefas", criarTarefa);
router.get("/tarefas", obterTarefa);
router.get("/tarefas/:id", obterTarefaPorId);
router.put("/tarefas/:id", atualzarTarefa);
router.delete("/tarefas/:id", deletarTarefa);
module.exports = router;

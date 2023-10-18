"use strict";
const mongoose = require("mongoose");
const tarefaSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    validateDate: { type: Date },
    priority: { type: String },
    status: { type: String, default: "pending" },
});
const Tarefa = mongoose.mondel("Tarefa", tarefaSchema);
module.exports = Tarefa;

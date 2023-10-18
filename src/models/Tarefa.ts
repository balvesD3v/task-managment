import mongoose from "mongoose";

const tarefaSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    validateTime: Date,
    priority: String,
    status: String,
  },
  { versionKey: false }
);

const Tarefa = mongoose.model("Tarefa", tarefaSchema);

export default Tarefa;

import mongoose from "mongoose";

const tarefaSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    validateTime: Date,
    priority: String,
    status: String,
  },
  { versionKey: false }
);

const Tarefa = mongoose.model("Tarefa", tarefaSchema);

export default Tarefa;

import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    validateTime: Date,
    priority: String,
    status: String,
  },
  { versionKey: false }
);

const Task = mongoose.model("Tarefa", taskSchema);

export default Task;

import mongoose, { Schema, Document } from "mongoose";

interface ITask extends Document {
  title: string;
  description: string;
  userEmail: string;
  validateTime: Date;
  priority: string;
  status: string;
}

const taskSchema: Schema<ITask> = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    userEmail: { type: String, required: true },
    validateTime: Date,
    priority: String,
    status: String,
  },
  { versionKey: false }
);

const Task = mongoose.model<ITask>("Task", taskSchema);

export default Task;

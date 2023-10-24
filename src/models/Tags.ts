import mongoose from "mongoose";

const tagsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, minlength: 3, maxlength: 15 },
    priority: { type: String, required: true },
  },
  { versionKey: false }
);

tagsSchema.index({ title: 1 });

const Tags = mongoose.model("Tags", tagsSchema);
export default Tags;

import { model, Schema } from "mongoose";

const taskSchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  title: {type: String, required: true} ,
  descripiton: {type: String},
  status: {type: String, default: "todo", enum: ["todo", "in_progress", "done"]},
  created_at: { type: Date },
  updated_at: { type: Date }
}, {versionKey: false})

export default model("tasks", taskSchema)
import { model, Schema } from "mongoose";

const taskSchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  title: {type: String, required: true} ,
  descripiton: {type: String},
  status: {type: String, default: "todo", enum: ["todo", "in_progress", "done"]},
  created_at: { type: Schema.Types.Date, required: true },
  updated_at: { type: Date }
}, {versionKey: false})

const tasks = model("tasks", taskSchema)

export default tasks
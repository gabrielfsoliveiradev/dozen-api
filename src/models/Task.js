import { model, Schema } from "mongoose";

const taskSchema = new Schema({
  title: {type: String, required: true} ,
  description: {type: String},
  status: {type: String, default: "todo", enum: ["todo", "in_progress", "done"]},
}, {versionKey: false, timestamps: true})

const tasks = model("tasks", taskSchema)

export default tasks
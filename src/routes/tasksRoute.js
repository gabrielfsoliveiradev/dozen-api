import { Router } from "express";
import TaskController from "../controllers/tasksController.js";

const route = Router()

route.get("/tasks", TaskController.getAllTasks)
route.get("/tasks/:id", TaskController.getTaskByID)
route.post("/tasks", TaskController.createTask)
route.delete("/tasks/:id", TaskController.deleteTask)
route.put("/tasks/:id", TaskController.updateTask)

export default route
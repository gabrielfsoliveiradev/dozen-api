import express from "express";
import tasks from "./tasksRoute.js"

function router(app) {
  app.route("/").get((req, res) => res.status(200).send("Servidor está rodando"));
  app.use(express.json(), tasks)
}

export default router
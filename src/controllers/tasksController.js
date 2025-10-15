import tasks from "../models/Task.js"

class TaskController {
  static async getAllTasks(req, res) {
    try {
      const taskList = await tasks.find({})

      res.status(200).json({
        message: "Sucesso ao recuperar todas as tasks",
        tasks: taskList,
      })
    } catch (error) {
      res.status(500).json({
        message: "Falha ao listar as Tasks",
        error: error.message,
      })
    }
  }

  static async getTaskByID(req, res) {
    try {
      const task = await tasks.findById(req.params.id)

      if (!task) {
        return res
          .status(404)
          .json({
            message: `Não foi encontrado nenhuma task com o id: ${req.params.id}`,
          })
        
      }

      res.status(200).json({
        message: "Sucesso ao recuperar task",
        task,
      })
    } catch (error) {
      res.status(500).json({
        message: "Falha ao listar a Task",
        error: error.message,
      })
    }
  }
}

export default TaskController

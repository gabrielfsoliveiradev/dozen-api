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
        return res.status(404).json({
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

  static async createTask(req, res) {
    try {
      const task = await tasks.create(req.body)

      res.status(201).json({
        message: "Task criada com sucesso",
        task,
      })
    } catch (error) {
      res.status(500).json({
        message: "Falha ao criar a Task",
        error: error.message,
      })
    }
  }

  static async deleteTask(req, res) {
    try {
      await tasks.findByIdAndDelete(req.params.id)
      res.status(200).json({
        message: "Task deletada com sucesso",
      })
    } catch (error) {
      res.status(500).json({
        message: "Falha ao deletar a Task",
        error: error.message,
      })
    }
  }

  static async updateTask(req, res) {
    try {
      const taskUpdated = await tasks.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      )

      if (!taskUpdated) {
        return res.status(404).json({
          message: "Task não encontrada",
        })
      }

      res.status(200).json({
        message: "Task Atualizada com sucesso",
        task: taskUpdated,
      })
    } catch (error) {
      res.status(500).json({
        message: "Falha ao atualizar a Task",
        error: error.message,
      })
    }
  }
}

export default TaskController

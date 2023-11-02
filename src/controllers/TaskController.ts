import { Request, Response } from "express";
import Task from "../models/Task";
import User from "../models/Users";

class TaskController {
  async createTask(req: Request, res: Response) {
    const { title, description, userEmail, validateTime, priority, status } =
      req.body;

    try {
      const user = await User.findOne({ email: userEmail });
      if (!user) {
        return res
          .status(404)
          .send({ error: "Usuário com o e-mail fornecido não encontrado" });
      }

      const task = new Task({
        title,
        description,
        userEmail,
        validateTime,
        priority,
        status,
      });

      await task.save();

      // Envie a resposta apenas após a operação de salvamento ter sido concluída.
      return res.status(201).send(task);
    } catch (error) {
      console.error(error);
      // Se ocorrer um erro, envie uma resposta de erro e pare a execução da função.
      return res.status(500).send({ error: "Erro ao criar tarefa." });
    }
  }

  async getTask(req: Request, res: Response) {
    try {
      const task = await Task.find();
      return res.status(200).send(task);
    } catch (error) {
      return res.status(500).send({ error: "Erro ao obter tarefa." });
    }
  }

  async updateTask(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const taskUpdated = await Task.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!taskUpdated) {
        return res.status(404).send({ error: "Tarefa não encontrada." });
      }

      return res.status(200).send(taskUpdated);
    } catch (error) {
      return res.status(500).send({ error: "Erro ao atualizar tarefa." });
    }
  }

  async deleteTask(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const taskDeleted = await Task.findByIdAndDelete(id);
      if (!taskDeleted) {
        return res.status(404).send({ error: "Tarefa não encontrada." });
      }
      return res.status(200).send({ message: "Tarefa excluida com sucesso" });
    } catch (error) {
      return res.status(500).send({ error: "Erro ao excluir a tarefa" });
    }
  }
}

export default TaskController;

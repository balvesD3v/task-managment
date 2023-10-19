import { Request, Response } from "express";
import Task from "../models/Task";

class TaskController {
  async createTask(req: Request, res: Response) {
    try {
      const newTask = await Task.create(req.body);
      return res.status(201).json(newTask);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao criar tarefa." });
    }
  }

  async getTask(req: Request, res: Response) {
    try {
      const task = await Task.find();
      return res.status(200).json(task);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao obter tarefa." });
    }
  }

  async updateTask(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const taskUpdated = await Task.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!taskUpdated) {
        return res.status(404).json({ error: "Tarefa não encontrada." });
      }
      return res.status(200).json(taskUpdated);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao atualizar tarefa." });
    }
  }

  async deleteTask(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const taskDeleted = await Task.findByIdAndDelete(id);
      if (!taskDeleted) {
        return res.status(404).json({ error: "Tarefa não encontrada." });
      }
      return res.status(200).json({ message: "Tarefa excluida com sucesso" });
    } catch (error) {
      return res.status(500).json({ error: "Erro ao excluir a tarefa" });
    }
  }
}

export default TaskController;

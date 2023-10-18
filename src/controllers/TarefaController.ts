import { Request, Response } from "express";
import Tarefa from "../models/Tarefa";

class TarefaController {
  async criarTarefa(req: Request, res: Response) {
    try {
      const novaTarefa = await Tarefa.create(req.body);
      return res.status(201).json(novaTarefa);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao criar tarefa." });
    }
  }

  async obterTarefa(req: Request, res: Response) {
    try {
      const tarefas = await Tarefa.find();
      return res.status(200).json(tarefas);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao obter tarefa." });
    }
  }

  async atualizarTarefa(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const tarefaAtualizada = await Tarefa.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!tarefaAtualizada) {
        return res.status(404).json({ error: "Tarefa não encontrada." });
      }
      return res.status(200).json(tarefaAtualizada);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao atualizar tarefa." });
    }
  }
}

export default TarefaController;

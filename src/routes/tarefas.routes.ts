import { Router } from "express";
import TarefaController from "../controllers/TarefaController";

const tarefasRoutes = Router();

const tarefasController = new TarefaController();

tarefasRoutes.post("/", tarefasController.criarTarefa);
tarefasRoutes.get("/", tarefasController.obterTarefa);
tarefasRoutes.put("/:id", tarefasController.atualizarTarefa);
tarefasRoutes.delete("/:id", tarefasController.excluirTarefa);

export default tarefasRoutes;

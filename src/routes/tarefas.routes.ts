import { Router } from "express";
import TarefaController from "../controllers/TarefaController";

const tarefasRoutes = Router();

const tarefasController = new TarefaController();

tarefasRoutes.post("/tarefas", tarefasController.criarTarefa);
tarefasRoutes.get("/tarefas", tarefasController.obterTarefa);
tarefasRoutes.put("/tarefas/:id", tarefasController.atualizarTarefa);

export default tarefasRoutes;

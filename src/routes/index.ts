import { Router } from "express";
import tarefasRoutes from "./tarefas.routes";

const routes = Router();

routes.use("/", tarefasRoutes);

export default routes;

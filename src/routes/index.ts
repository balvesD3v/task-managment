import { Router } from "express";
import tarefasRoutes from "./tarefas.routes";
import userRoutes from "./users.routes";

const routes = Router();

routes.use("/tarefas", tarefasRoutes);
routes.use("/user", userRoutes);

export default routes;

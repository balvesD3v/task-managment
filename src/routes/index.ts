import { Router } from "express";
import tasksRoutes from "./task.routes";
import userRoutes from "./users.routes";
import sessionRoutes from "./session.routes";
import authRoutes from "./auth.routes";
import tagsRoutes from "./tags.routes";

const routes = Router();

routes.use("/task", tasksRoutes);
routes.use("/user", userRoutes);
routes.use("/session", sessionRoutes);
routes.use("/auth", authRoutes);
routes.use("/tags", tagsRoutes);

export default routes;

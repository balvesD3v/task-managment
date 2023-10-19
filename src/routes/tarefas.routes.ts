import { Router } from "express";
import TaskController from "../controllers/TaskController";

const tasksRoutes = Router();

const taskController = new TaskController();

tasksRoutes.post("/", taskController.createTask);
tasksRoutes.get("/", taskController.getTask);
tasksRoutes.put("/:id", taskController.updateTask);
tasksRoutes.delete("/:id", taskController.deleteTask);

export default tasksRoutes;

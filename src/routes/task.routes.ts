import { Router } from "express";
import TaskController from "../controllers/TaskController";
import { userAuthenticated } from "../middlewares/userAuthenticated";

const tasksRoutes = Router();

const taskController = new TaskController();

tasksRoutes.post("/", taskController.createTask);
tasksRoutes.get("/", taskController.getTask);
tasksRoutes.put("/:id", userAuthenticated, taskController.updateTask);
tasksRoutes.delete("/:id", userAuthenticated, taskController.deleteTask);

export default tasksRoutes;

import { Router } from "express";
import UserController from "../controllers/UserController";

const userRoutes = Router();

const userController = new UserController();

userRoutes.post("/", userController.createUser);
userRoutes.put("/", userController.updateUser);

export default userRoutes;

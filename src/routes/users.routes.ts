import { Router } from "express";
import UserController from "../controllers/UserController";
import { userAuthenticated } from "../middlewares/userAuthenticated";

const userRoutes = Router();

const userController = new UserController();

userRoutes.post("/", userController.createUser);
userRoutes.put("/", userAuthenticated, userController.updateUser);

export default userRoutes;

import { Router } from "express";
import AuthController from "../controllers/AuthController";
import { userAuthenticated } from "../middlewares/userAuthenticated";

const authRoutes = Router();
const authController = new AuthController();

authRoutes.post("/", userAuthenticated, authController.login);

export default authRoutes;

import { Router } from "express";
import AuthController from "../controllers/AuthController";
import { userAuthenticated } from "../middlewares/userAuthenticated";

const authRoutes = Router();
const authController = new AuthController();

authRoutes.post("/", authController.login);
authRoutes.post("/logout", userAuthenticated, authController.logout);
authRoutes.post("/forgot", userAuthenticated, authController.forgotPassword);

export default authRoutes;

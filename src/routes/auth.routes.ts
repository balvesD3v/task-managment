import { Router } from "express";
import AuthController from "../controllers/AuthController";
import { userAuthenticated } from "../middlewares/userAuthenticated";
import User from "../models/Users";

const authRoutes = Router();
const authController = new AuthController(User);

authRoutes.post("/", authController.login);
authRoutes.post("/logout", userAuthenticated, authController.logout);
authRoutes.post("/forgot", userAuthenticated, authController.forgotPassword);

export default authRoutes;

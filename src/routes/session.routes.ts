import { Router } from "express";
import SessionController from "../controllers/SessionController";

const sessionRoutes = Router();

const sessionController = new SessionController();

sessionRoutes.post("/", sessionController.createSession);

export default sessionRoutes;

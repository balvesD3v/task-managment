import { Router } from "express";
import TagsController from "../controllers/TagsController";

const tagsController = new TagsController();

const tagsRoutes = Router();

tagsRoutes.post("/", tagsController);

export default tagsRoutes;

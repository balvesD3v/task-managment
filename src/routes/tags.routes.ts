import { Router } from "express";
import TagsController from "../controllers/TagsController";

const tagsController = new TagsController();

const tagsRoutes = Router();

tagsRoutes.post("/", tagsController.createTag);
tagsRoutes.get("/", tagsController.getTag);
tagsRoutes.get("/:title", tagsController.getTagByTitle);
tagsRoutes.delete("/:title", tagsController.deleteTag);
tagsRoutes.put("/:title", tagsController.updateTag);

export default tagsRoutes;

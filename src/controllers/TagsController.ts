import { Request, Response } from "express";
import Tags from "../models/Tags";

class TagsController {
  async createTag(req: Request, res: Response) {
    const { title, priority } = req.body;
    try {
      const newTag = await Tags.findOne({
        title: title,
        priority: priority,
      });

      const addTag = new Tags({ title, priority });
      await addTag.save();

      return res.status(201).json(newTag);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao criar a tag." });
    }
  }

  async getTag(req: Request, res: Response) {
    try {
      const getTag = await Tags.find();
      return res.status(201).json({ getTag });
    } catch (error) {
      return res
        .status(400)
        .json({ error: "Não foi possível fazer a solicitação" });
    }
  }

  async getTagByTitle(req: Request, res: Response) {
    const { title } = req.params;

    try {
      const checkTitle = await Tags.findOne({ title: title });

      if (!checkTitle) {
        return res
          .status(404)
          .json({ message: "Não foi possível achar essa tag" });
      }

      return res.status(201).json({ tag: checkTitle });
    } catch (error) {
      return res.status(500).json({ error: "Não foi possível procurar a tag" });
    }
  }

  async deleteTag(req: Request, res: Response) {
    const { title } = req.params;
    try {
      const checkTitle = await Tags.findOne({ title: title });

      if (!checkTitle) {
        return res
          .status(404)
          .json({ message: "Não foi possível achar essa tag" });
      }

      await Tags.findByIdAndRemove(checkTitle);
      return res.status(201).json({ message: "Tag excluida" });
    } catch (error) {
      return res.status(500).json({ error: "Não foi possível deletar a tag" });
    }
  }

  async updateTag(req: Request, res: Response) {
    const { title } = req.params;
    const { newTitle, newPriority } = req.body;

    try {
      const updateTag = await Tags.findOneAndUpdate(
        { title: title },
        { title: newTitle, priority: newPriority },
        { new: true }
      );

      if (!updateTag) {
        return res
          .status(400)
          .json({ error: "Não foi posível encontrar a tag" });
      }
      return res.status(200).json({ message: "Atualizado com sucesso" });
    } catch (error) {
      return res.status(500).json({ error: "Não foi possível atualizar" });
    }
  }
}

export default TagsController;

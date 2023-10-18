import { Request, Response } from "express";
import User from "../models/Users";
import { hash } from "bcrypt";

class UserController {
  async criarUsuario(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const hashedpassword = await hash(password, 8);

    try {
      const checkUserExists = await User.findOne({ email: email });
      if (checkUserExists) {
        return res.status(500).json({ message: "Este usuário já existe" });
      } else {
        const newUser = new User({
          name,
          email,
          password: hashedpassword,
        });
        await newUser.save();

        return res.status(200).json({
          message: "Este usuário foi criado com sucesso",
        });
      }
    } catch (error) {
      return res.status(500).json({ error: "Erro ao tentar procurar usuário" });
    }
  }

  async atualizarUsuario(req: Request, res: Response) {
    const { name, email, password, oldPassword } = req.body;

    try {
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(500).json({ message: "Usuário não encontrado" });
      }

      const emailExists = await User.findOne({ email: email });
      if (emailExists) {
        return res.status(400).json({ message: "Esse email já existe" });
      } else {
        return res
          .status(200)
          .json({ message: "Sucesso ao atualizar o email" });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Não foi possivel atualizar o usuário" });
    }
  }
}

export default UserController;

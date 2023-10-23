import { Request, Response } from "express";
import User from "../models/Users";
import { compare, hash } from "bcrypt";

class AuthController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).send({ message: "Credenciais inválidas" });
      }

      const checkPassword = await compare(password, user.password);

      if (!checkPassword) {
        return res.status(401).send({ message: "Credenciais inválidas" });
      }

      return res.status(200).send({ message: "Seu login foi efetuado" });
    } catch (error) {
      return res.status(500).send({ error: error });
    }
  }

  async logout(req: Request, res: Response) {
    return res.status(200).send({ message: "Seu logout foi efetuado" });
  }

  async forgotPassword(req: Request, res: Response) {
    const { email, newPassword } = req.body;
    try {
      const user = await User.findOne({ email: email });

      if (!user) {
        return res.status(400).send({ message: "Usuário não encontrado." });
      }

      const hashedpassword = await hash(newPassword, 10);

      await User.findOneAndUpdate({ password: hashedpassword });

      return res.status(200).send({ message: "Senha redefinida com sucesso" });
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Erro ao redefinir a senha, tente novamente" });
    }
  }
}

export default AuthController;

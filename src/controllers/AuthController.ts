import { Request, Response } from "express";
import User from "../models/Users";
import { compare } from "bcrypt";

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
  async logout() {}
  async register() {}
  async forgotPassword() {}
  async verifyAccount() {}
}

export default AuthController;

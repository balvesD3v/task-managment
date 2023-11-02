import { Request, Response } from "express";
import { Model, Document } from "mongoose";
import { RequestHandler } from "express";
import { IUser } from "../models/Users";
import { compare, hash } from "bcrypt";

class AuthController {
  private readonly User: Model<IUser>;

  constructor(User: Model<IUser & Document>) {
    this.User = User as Model<IUser & Document>;
  }

  login: RequestHandler = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      const user = await this.User.findOne({ email });

      if (!user) {
        return res.status(401).send("Credenciais inválidas");
      }

      const checkPassword = await compare(password, user.password);

      if (!checkPassword) {
        return res.status(401).send("Credenciais inválidas");
      }

      return res.status(200).send("Seu login foi efetuado");
    } catch (error) {
      return res.status(500).send("Erro ao fazer o login");
    }
  };

  logout: RequestHandler = async (req: Request, res: Response) => {
    return res.status(200).send("Seu logout foi efetuado");
  };

  forgotPassword: RequestHandler = async (req: Request, res: Response) => {
    const { email, newPassword } = req.body;
    try {
      const user = await this.User.findOne({ email: email });

      if (!user) {
        return res.status(400).send("Usuário não encontrado.");
      }

      const hashedpassword = await hash(newPassword, 10);
      await this.User.findOneAndUpdate({ email }, { password: hashedpassword });

      return res.status(200).send("Senha redefinida com sucesso");
    } catch (error) {
      return res.status(500).send("Erro ao redefinir a senha, tente novamente");
    }
  };
}

export default AuthController;

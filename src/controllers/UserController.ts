import { Request, Response } from "express";
import User from "../models/Users";
import { hash, compare } from "bcrypt";

class UserController {
  async createUser(req: Request, res: Response) {
    const { name, email, password } = req.body;

    try {
      const checkUserExists = await User.findOne({ email: email });
      if (checkUserExists) {
        return res.status(400).json({ message: "Este usuário já existe" });
      } else {
        const newUser = new User({
          name,
          email,
          password,
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

  async updateUser(req: Request, res: Response) {
    const { email, newName, newEmail, newPassword } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "Usuário não existe" });
      }

      if (newName) {
        await User.findOneAndUpdate({ name: newName });
      }

      if (newEmail && newEmail !== email) {
        const emailExists = await User.findOne({ email: email });
        if (emailExists && emailExists._id.toString() !== user._id.toString()) {
          return res.status(400).json({ message: "Esté email já está em uso" });
        }
        await User.findOneAndUpdate({ email: newEmail });
      }

      if (newEmail == email) {
        return res
          .status(400)
          .json({ message: "Email novo deve ser diferente do antigo" });
      }

      if (newPassword) {
        const passwordMatched = await compare(newPassword, user.password);
        if (passwordMatched) {
          return res
            .status(400)
            .json({ message: "Nova senha não pode ser igual à senha atual" });
        }
        const hashedpassword = await hash(newPassword, 10);
        await User.findOneAndUpdate({ password: hashedpassword });
      }

      await user.save();

      return res.status(200).json({
        message: `Usuário atualizado com sucesso`,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro ao atualizar o usuário no banco de dados" });
    }
  }
}

export default UserController;

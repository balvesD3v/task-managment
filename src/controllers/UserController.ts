import { Request, Response } from "express";
import User from "../models/Users";
import { hash, compare } from "bcrypt";

class UserController {
  async createUser(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const hashedpassword = await hash(password, 10);

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

  async updateUser(req: Request, res: Response) {
    const { email, newName, newEmail, newPassword } = req.body;

    try {
      const user = await User.findOne({ email: email });

      if (!user) {
        return res.status(400).json({ message: "Usuário não existe" });
      }

      if (newName) {
        user.name = newName;
      }

      if (newEmail) {
        const emailExists = await User.findOne({ email: email });
        if (emailExists && emailExists._id.toString() !== user._id.toString()) {
          return res.status(400).json({ message: "Esté email já está em uso" });
        }
        user.email = newEmail;
      }

      if (newEmail === user.email) {
        return res.status(400).json({
          message: "O novo e-mail deve ser diferente do e-mail atual",
        });
      }

      if (newPassword) {
        const passwordMatched = await compare(newPassword, user.password);
        if (passwordMatched) {
          return res
            .status(400)
            .json({ message: "Nova senha não pode ser igual à senha atual" });
        }
        const hashedpassword = await hash(newPassword, 10);
        user.password = hashedpassword;
      }

      await user.save();

      return res.status(200).json({
        message: `${newEmail}  ${newPassword}  ${newName}  ${email}  "Usuário atualizado com sucesso"`,
      });
    } catch (error) {}
  }
}

export default UserController;

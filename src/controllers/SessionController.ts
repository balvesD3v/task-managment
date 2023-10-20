import User from "../models/Users";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { Request, Response } from "express";
import { authJWT } from "../config/auth/auth";

class SessionController {
  async createSession(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(401).json({ erro: "Email ou senha incorretos" });
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      return res.status(401).json({ erro: "Email ou senha incorretos" });
    }

    const { expiresIn, secret } = authJWT.jwt;
    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn,
    });

    return res.json({ user, token });
  }
}

export default SessionController;

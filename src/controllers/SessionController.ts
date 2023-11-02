import User, { IUser } from "../models/Users";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { Request, Response } from "express";
import { authJWT } from "../config/auth/auth";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  user: IUser;
  token: string;
}

class SessionController {
  async createSession(req: Request<{}, {}, LoginRequest>, res: Response) {
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

    const response: LoginResponse = {
      user: user,
      token: token,
    };

    return res.json(response);
  }
}

export default SessionController;

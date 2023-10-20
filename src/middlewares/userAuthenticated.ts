import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { authJWT } from "../config/auth/auth";

interface AuthenticedRequest extends Request {
  user?: {
    id: number;
  };
}

export function userAuthenticated(
  req: AuthenticedRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "JWT TOKEN não informado!" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, authJWT.jwt.secret) as {
      sub: string;
    };
    req.user = {
      id: Number(user_id),
    };
    return next();
  } catch (error) {
    return res.status(401).json({ error: "JWT TOKEN não é válido!" });
  }
}

import { Request, Response } from "express";

export interface LoginRequest extends Request {
  body: {
    email: string;
    password: string;
  };
}

export interface AuthResponse {
  status(code: number): AuthResponse;
  send(data: any): AuthResponse;
}

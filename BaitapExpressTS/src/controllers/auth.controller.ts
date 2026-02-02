import { Request, Response } from "express";
import { authService } from "../services/auth.service";

export const authController = {
  register(req: Request, res: Response) {
    try {
      const user = authService.register(req.body);
      return res.status(201).json({
        success: true,
        message: "Register successful",
        data: user,
      });
    } catch (error) {}
  },
  login(req: Request, res: Response) {
    try {
      const user = authService.login(req.body);
      return res.status(200).json({
        success: true,
        message: "Login successful",
        data: user,
      });
    } catch (error) {}
  },
};

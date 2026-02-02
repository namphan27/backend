import express from "express";
import { validate } from "../middlewares/validate.middleware";
import { loginSchema, registerSchema } from "../schemas/auth.schema";
import { authController } from "../controllers/auth.controller";

const router = express.Router();
router.post("/login", validate(loginSchema), authController.login);
router.post("/register", validate(registerSchema), authController.register);

export default router
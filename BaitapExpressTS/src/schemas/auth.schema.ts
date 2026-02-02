import { z } from "zod";

export const registerSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email không được để trống",
    })
    .email("Email không đúng định dạng"),
  password: z.string().min(6, "Password phải có ít nhất 6 ký tự"),
  fullName: z.string().min(1, "Full name không được để trống"),
});
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email không được để trống",
    })
    .email("Email không hợp lệ"),
  password: z.string().min(6, "Password phải có ít nhất 6 ký tự"),
});

export type Register = z.infer<typeof registerSchema>;
export type Login = z.infer<typeof loginSchema>;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.registerSchema = void 0;
const zod_1 = require("zod");
exports.registerSchema = zod_1.z.object({
    email: zod_1.z
        .string()
        .min(1, {
        message: "Email không được để trống",
    })
        .email("Email không đúng định dạng"),
    password: zod_1.z.string().min(6, "Password phải có ít nhất 6 ký tự"),
    fullName: zod_1.z.string().min(1, "Full name không được để trống"),
});
exports.loginSchema = zod_1.z.object({
    email: zod_1.z
        .string()
        .min(1, {
        message: "Email không được để trống",
    })
        .email("Email không hợp lệ"),
    password: zod_1.z.string().min(6, "Password phải có ít nhất 6 ký tự"),
});
//# sourceMappingURL=auth.schema.js.map
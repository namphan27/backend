"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const auth_service_1 = require("../services/auth.service");
exports.authController = {
    register(req, res) {
        try {
            const user = auth_service_1.authService.register(req.body);
            return res.status(201).json({
                success: true,
                message: "Register successful",
                data: user,
            });
        }
        catch (error) { }
    },
    login(req, res) {
        try {
            const user = auth_service_1.authService.login(req.body);
            return res.status(200).json({
                success: true,
                message: "Login successful",
                data: user,
            });
        }
        catch (error) { }
    },
};
//# sourceMappingURL=auth.controller.js.map
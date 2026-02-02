"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const users = [];
exports.authService = {
    register(data) {
        const existedUser = users.find((user) => user.email === data.email);
        if (existedUser) {
            throw new Error("Email đã tồn tại");
        }
        const newUser = {
            id: users.length + 1,
            email: data.email,
            password: data.password,
            fullName: data.fullName,
        };
        users.push(newUser);
        const { password, ...userWithoutPassword } = newUser;
        return userWithoutPassword;
    },
    login(data) {
        const existedUser = users.find((user) => user.email === data.email);
        if (!existedUser) {
            throw new Error("Email hoặc mật khẩu không đúng");
        }
        if (existedUser.password !== data.password) {
            throw new Error("Email hoặc mật khẩu không đúng");
        }
        const { password, ...userWithoutPassword } = existedUser;
        return userWithoutPassword;
    },
};
//# sourceMappingURL=auth.service.js.map
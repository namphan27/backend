import { Login, Register } from "../schemas/auth.schema";
import { User } from "../types/user.type";

const users: User[] = [];

export const authService = {
  register(data: Register) {
    const existedUser = users.find((user) => user.email === data.email);
    if (existedUser) {
      throw new Error("Email đã tồn tại");
    }
    const newUser: User = {
      id: users.length + 1,
      email: data.email,
      password: data.password,
      fullName: data.fullName,
    };

    users.push(newUser);
    const { password, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
  },
  login(data: Login) {
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

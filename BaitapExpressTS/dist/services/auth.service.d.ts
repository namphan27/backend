import { Login, Register } from "../schemas/auth.schema";
export declare const authService: {
    register(data: Register): {
        id: number;
        email: string;
        fullName: string;
    };
    login(data: Login): {
        id: number;
        email: string;
        fullName: string;
    };
};
//# sourceMappingURL=auth.service.d.ts.map
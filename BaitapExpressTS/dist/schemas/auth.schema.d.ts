import { z } from "zod";
export declare const registerSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    fullName: z.ZodString;
}, z.core.$strip>;
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type Register = z.infer<typeof registerSchema>;
export type Login = z.infer<typeof loginSchema>;
//# sourceMappingURL=auth.schema.d.ts.map
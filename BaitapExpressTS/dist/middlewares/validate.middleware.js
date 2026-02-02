"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const validate = (schema) => {
    return async (req, res, next) => {
        const body = await schema.safeParseAsync(req.body);
        if (!body.success) {
            return res.status(400).json({
                message: "Validate failed",
                errors: body.error.issues,
            });
        }
        req.body = body;
        next();
    };
};
exports.validate = validate;
//# sourceMappingURL=validate.middleware.js.map
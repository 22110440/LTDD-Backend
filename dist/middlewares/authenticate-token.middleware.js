"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const utils_1 = require("../utils");
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const accessToken = authHeader && authHeader.split(" ")[1];
    if (!accessToken) {
        return res.status(200).json({
            code: 401,
            status: "error",
            message: "Token không hợp lệ",
        });
    }
    jsonwebtoken_1.default.verify(accessToken, utils_1.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(200).json({
                code: 401,
                status: "error",
                message: "Token không hợp lệ",
            });
        }
        req.user = user;
        next();
    });
};
exports.default = authenticateToken;

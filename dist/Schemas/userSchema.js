"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var userSchema = joi_1.default.object({
    name: joi_1.default.string().min(3).max(30).required(),
    email: joi_1.default.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    telefone: joi_1.default.string().min(11).max(12).required()
}).options({ abortEarly: false });
exports.default = userSchema;

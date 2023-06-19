"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
var userSchema_1 = __importDefault(require("../Schemas/userSchema"));
function validateUser(req, res, next) {
    var user = req.body;
    var validation = userSchema_1.default.validate(user);
    if (validation.error) {
        console.log(validation.error.message);
        return res.status(400).send("Parametros incorretos");
    }
    next();
}
exports.validateUser = validateUser;

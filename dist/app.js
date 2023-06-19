"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var userRoute_js_1 = __importDefault(require("./Routes/userRoute.js"));
var server = (0, express_1.default)();
dotenv_1.default.config();
server.use((0, cors_1.default)());
server.use(express_1.default.json());
server.get("/health", function (req, res) {
    res.send("Tá vivo");
});
server.use(userRoute_js_1.default);
var PORT = process.env.PORT || 4000;
server.listen(PORT, function () {
    console.log("Server listen from ".concat(PORT));
});

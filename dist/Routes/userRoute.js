"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController_js_1 = require("../Controllers/userController.js");
var userMiddle_js_1 = require("../Middlewares/userMiddle.js");
var router = (0, express_1.Router)();
router.get("/user", userController_js_1.findUsers);
router.post("/user", userMiddle_js_1.validateUser, userController_js_1.newUser);
exports.default = router;

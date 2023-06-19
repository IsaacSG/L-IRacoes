import { Router } from "express";
import { newUser, findUsers } from "../Controllers/userController.js";
import { validateUser } from "../Middlewares/userMiddle.js";

const router = Router();

router.get("/user", findUsers);
router.post("/user", validateUser, newUser);

export default router;
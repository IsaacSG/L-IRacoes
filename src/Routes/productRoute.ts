import { Router } from "express";
import { newProduct, findProduct, deleteProduct } from "Controllers/protuctController";
import { validateProduct } from "Middlewares/productMiddle";

const router = Router();

router.get("/product", findProduct);
router.post("/product", validateProduct, newProduct);
router.delete("/product", deleteProduct);

export default router;
import { Request, Response, NextFunction } from "express";
import { Product } from "Protocols/productProtocol";
import productSchema from "Schemas/productSchema";

export function validateProduct(req: Request, res: Response, next: NextFunction) {
    const product = req.body as Product;
    const validation = productSchema.validate(product);

    if(validation.error) {
        console.log(validation.error.message);

        return res.status(400).send("Parametros incorretos")
    }

    next();
}
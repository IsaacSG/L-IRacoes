import { Product } from "Protocols/productProtocol";
import { Request, Response } from "express";
import { postProduct, getProduct, dellProduct } from "Repositories/productRepositories";

export function newProduct(req: Request, res: Response){
    const newProduct = req.body as Product;
    postProduct(newProduct);

    res.status(201).send("Novo produto cadastrado");
}

export async function findProduct(req: Request, res: Response) {
    const find = await getProduct();

    res.status(200).send(find);
}

export function deleteProduct(req: Request, res: Response) {
    const id = req.body;
    dellProduct(id);

    res.status(200).send(`Produto de número ${id} deletado`);
}
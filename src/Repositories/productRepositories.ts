import prisma from "DB/prisma.js";
import { Product, DellProduct } from "Protocols/productProtocol";

export async function postProduct(newProduct: Product) {
    const body = newProduct;
    
    try {
        return prisma.products.create({
            data: body
        })
    } 
    catch (error) {
        console.log(error)
    }
}

export async function getProduct() {
    try {
        return prisma.products.findMany();
    } 
    catch (error) {
        console.log(error)
    }
}

export async function dellProduct(product: DellProduct) {
    const DellId = product;
    try {
        const deleteProduct = await prisma.products.delete({
            where: {
                id: DellId.id,
            },
        })
    } 
    catch (error) {
        console.log(error)
    }
}
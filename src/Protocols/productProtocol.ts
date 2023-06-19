export type ProductEntity = {
    id: number,
    name: string,
    pictureURL: string,
    buyPrice: number,
    sellPrice: number
}

export type Product = Omit<ProductEntity, "id">

export type DellProduct = Partial<ProductEntity>
export type StockEntity = {
    id: number,
    productId: number,
    quantity: number
}

export type Stock = Omit<StockEntity, "id">

export type DellStock = Partial<StockEntity>
export type CartEntity = {
    id: number,
    productId: number,
    quantity: number,
    price: number
}

export type Cart = Omit<CartEntity, "id">

export type DellCart = Partial<CartEntity>
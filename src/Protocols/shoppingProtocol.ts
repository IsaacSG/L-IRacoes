export type ShoppingEntity = {
    id: number,
    userId: number,
    cartId: number,
    totalPrice: number
}

export type Shopping = Omit<ShoppingEntity, "id">
export type MenuItem = {
    id: number,
    name: string,
    price: number
}

export type OrderItem = MenuItem & { // para la clase useOrder
    quantity: number
}
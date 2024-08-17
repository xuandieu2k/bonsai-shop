import { Product } from "./product"

export class ResponeProduct {
    data: Product[] = []
    total: number = 0
    current_page: number = 0
    next_page: number = 0
    prev_page: number = 0
    last_page: number = 0

    constructor(data?: Partial<ResponeProduct>) {
        Object.assign(this, data)
    }
}
export class Product {
    id: number = 0

    name: string = ''

    price: number = 0

    promotion_price: number = 0

    url: string = ''

    invertory: number = 0

    made_in: string = ''

    brand: string = ''

    subs_url: string[] = [] // Hình phụ kèm theo

    desciption: string = ''

    category_ids: number[] = []

    constructor(data?: Partial<Product>) {
        Object.assign(this, data)
    }
}
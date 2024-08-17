import { FC, Key, useEffect, useState } from 'react';
import { getProducts } from '../api/product-api';
import { BaseResponse, isSuccess } from '../../../base/api/base-response';
import ItemProduct from './item-product';
import { Product } from '../model/product';
import { ResponeProduct } from '../model/respone-product';


const HomeContent: FC<{}> = () => {

    const [products, setProducts] = useState<Product[]>([])

    // const products: Product[] = [
    //     new Product({
    //         id: 1,
    //         name: 'Product 1',
    //         price: Math.floor(Math.random() * 1000),
    //         url: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg'
    //     }),
    //     new Product({
    //         id: 2,
    //         name: 'Product 2',
    //         price: Math.floor(Math.random() * 1000),
    //         url: 'https://images.pexels.com/photos/1068532/pexels-photo-1068532.jpeg'
    //     }),
    //     new Product({
    //         id: 3,
    //         name: 'Product 3',
    //         price: Math.floor(Math.random() * 1000),
    //         url: 'https://images.pexels.com/photos/1781572/pexels-photo-1781572.jpeg'
    //     }),
    //     new Product({
    //         id: 4,
    //         name: 'Product 4',
    //         price: Math.floor(Math.random() * 1000),
    //         url: 'https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg'
    //     }),
    //     new Product({
    //         id: 5,
    //         name: 'Product 5',
    //         price: Math.floor(Math.random() * 1000),
    //         url: 'https://images.pexels.com/photos/1327066/pexels-photo-1327066.jpeg'
    //     }),
    //     new Product({
    //         id: 6,
    //         name: 'Product 6',
    //         price: Math.floor(Math.random() * 1000),
    //         url: 'https://images.pexels.com/photos/735005/pexels-photo-735005.jpeg'
    //     }),
    //     new Product({
    //         id: 7,
    //         name: 'Product 7',
    //         price: Math.floor(Math.random() * 1000),
    //         url: 'https://images.pexels.com/photos/2078266/pexels-photo-2078266.jpeg'
    //     }),
    //     new Product({
    //         id: 8,
    //         name: 'Product 8',
    //         price: Math.floor(Math.random() * 1000),
    //         url: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg'
    //     }),
    //     new Product({
    //         id: 9,
    //         name: 'Product 9',
    //         price: Math.floor(Math.random() * 1000),
    //         url: 'https://images.pexels.com/photos/374132/pexels-photo-374132.jpeg'
    //     }),
    //     new Product({
    //         id: 10,
    //         name: 'Product 10',
    //         price: Math.floor(Math.random() * 1000),
    //         url: 'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg'
    //     }),
    // ];

    const getDataProducts = async () => {
        try {
            const res: BaseResponse<ResponeProduct> =
                await getProducts('', 9, 1);
            if (isSuccess(res)) {
                setProducts(res.data.data)
                console.log(JSON.stringify(res.data))
            } else {
                console.log(res)
            }
        } catch (err) {
            console.log('Lỗi:' + err)
        }
    }

    useEffect(() => {
        getDataProducts()
    }, [])


    return (
        <div className="products-catagories-area clearfix">
            <div className="amado-pro-catagory clearfix">
                {products.length > 0 && products.map((item, index) => (
                    <ItemProduct product={item} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default HomeContent;

import { FC } from "react";
import { Product } from "../model/product";
import { ModuleConstants } from "../../../base/constants/module-constants";
import { Link } from "react-router-dom";
import ImageDefault from "../../../base/components/image-custom";
import avatarDefault from '../../../static/img/product-img/pro-big-1.jpg'
interface ProductProps {
    product: Product
}
const ItemProduct: FC<ProductProps> = (props) => {
    return (<div className="single-products-catagory clearfix" >
        <Link to={ModuleConstants.SHOP}>
            <ImageDefault className="object-cover" url={props.product.url} fallBackUrl={avatarDefault} />
            <div className="hover-content">
                <div className="line"></div>
                <p>{props.product.price}</p>
                <h4>{props.product.name}</h4>
            </div>
        </Link>
    </div>)
}

export default ItemProduct
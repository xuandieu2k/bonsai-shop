import React, { useState } from 'react';
import cart_1 from '../../../static/img/bg-img/cart1.jpg'
import cart_2 from '../../../static/img/bg-img/cart2.jpg'
import cart_3 from '../../../static/img/bg-img/cart3.jpg'
import { Link } from 'react-router-dom';
import { ModuleConstants } from '../../../base/constants/ModuleConstants';

// Bạn có thể cần các đường dẫn hình ảnh hoặc thông tin khác
const cartItems = [
  {
    id: 'qty',
    imgSrc: cart_1,
    name: 'White Modern Chair',
    price: '$130',
  },
  {
    id: 'qty2',
    imgSrc: cart_2,
    name: 'Minimal Plant Pot',
    price: '$10',
  },
  {
    id: 'qty3',
    imgSrc: cart_3,
    name: 'Minimal Plant Pot',
    price: '$10',
  },
];

const CartContent: React.FC = () => {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({
    qty: 1,
    qty2: 1,
    qty3: 1,
  });

  const handleQuantityChange = (id: string, delta: number) => {
    setQuantities((prevQuantities) => {
      const newQuantity = Math.max(1, prevQuantities[id] + delta);
      return { ...prevQuantities, [id]: newQuantity };
    });
  };

  return (
    <div className="cart-table-area section-padding-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="cart-title mt-50">
              <h2>Shopping Cart</h2>
            </div>

            <div className="cart-table clearfix">
              <table className="table table-responsive">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="cart_product_img">
                        <Link to={ModuleConstants.DETAIL_PRODUCT}><img src={item.imgSrc} alt="Product" /></Link>
                      </td>
                      <td className="cart_product_desc">
                        <h5>{item.name}</h5>
                      </td>
                      <td className="price">
                        <span>{item.price}</span>
                      </td>
                      <td className="qty">
                        <div className="qty-btn d-flex">
                          <p>Qty</p>
                          <div className="quantity">
                            <span
                              className="qty-minus"
                              onClick={() => handleQuantityChange(item.id, -1)}
                            >
                              <i className="fa fa-minus" aria-hidden="true"></i>
                            </span>
                            <input
                              type="number"
                              className="qty-text"
                              id={item.id}
                              step="1"
                              min="1"
                              max="300"
                              name="quantity"
                              value={quantities[item.id]}
                              readOnly
                            />
                            <span
                              className="qty-plus"
                              onClick={() => handleQuantityChange(item.id, 1)}
                            >
                              <i className="fa fa-plus" aria-hidden="true"></i>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="cart-summary">
              <h5>Cart Total</h5>
              <ul className="summary-table">
                <li>
                  <span>subtotal:</span> <span>$140.00</span>
                </li>
                <li>
                  <span>delivery:</span> <span>Free</span>
                </li>
                <li>
                  <span>total:</span> <span>$140.00</span>
                </li>
              </ul>
              <div className="cart-btn mt-100">
                <a href="cart.html" className="btn amado-btn w-100">
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
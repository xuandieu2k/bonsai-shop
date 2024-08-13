import React from 'react';
import pr_1 from '../../../static/img/product-img/product1.jpg'
import pr_2 from '../../../static/img/product-img/product2.jpg'
import pr_3 from '../../../static/img/product-img/product3.jpg'
import pr_4 from '../../../static/img/product-img/product4.jpg'
import pr_5 from '../../../static/img/product-img/product5.jpg'
import pr_6 from '../../../static/img/product-img/product6.jpg'
import ic_cart from '../../../static/img/core-img/cart.png'
import { Link } from 'react-router-dom';
import { ModuleConstants } from '../../../base/constants/ModuleConstants';

const ProductList: React.FC = () => {
  const products = [
    { img: pr_1, hoverImg: pr_2, price: '$180', name: 'Modern Chair' },
    { img: pr_2, hoverImg: pr_3, price: '$180', name: 'Modern Chair' },
    { img: pr_3, hoverImg: pr_4, price: '$180', name: 'Modern Chair' },
    { img: pr_4, hoverImg: pr_1, price: '$180', name: 'Modern Chair' },
    { img: pr_5, hoverImg: pr_6, price: '$180', name: 'Modern Chair' },
    { img: pr_6, hoverImg: pr_5, price: '$180', name: 'Modern Chair' },
  ];

  return (
    <div className="amado_product_area section-padding-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="product-topbar d-xl-flex align-items-end justify-content-between">
              <div className="total-products">
                <p>Showing 1-8 0f 25</p>
                <div className="view d-flex">
                  <a href="#"><i className="fa fa-th-large" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-bars" aria-hidden="true"></i></a>
                </div>
              </div>
              <div className="product-sorting d-flex">
                <div className="sort-by-date d-flex align-items-center mr-15">
                  <p>Sort by</p>
                  <form action="#" method="get">
                    <select name="select" id="sortBydate">
                      <option value="value">Date</option>
                      <option value="value">Newest</option>
                      <option value="value">Popular</option>
                    </select>
                  </form>
                </div>
                <div className="view-product d-flex align-items-center">
                  <p>View</p>
                  <form action="#" method="get">
                    <select name="select" id="viewProduct">
                      <option value="value">12</option>
                      <option value="value">24</option>
                      <option value="value">48</option>
                      <option value="value">96</option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {products.map((product, index) => (
            <div className="col-12 col-sm-6 col-md-12 col-xl-6" key={index}>
              <div className="single-product-wrapper">
                <div className="product-img">
                  <img src={product.img} alt="" />
                  <img className="hover-img" src={product.hoverImg} alt="" />
                </div>
                <div className="product-description d-flex align-items-center justify-content-between">
                  <div className="product-meta-data">
                    <div className="line"></div>
                    <p className="product-price">{product.price}</p>
                    <Link to={ModuleConstants.DETAIL_PRODUCT}>
                      <h6>{product.name}</h6>
                    </Link>
                  </div>
                  <div className="ratings-cart text-right">
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="cart">
                      <Link to={ModuleConstants.CART} data-toggle="tooltip" data-placement="left" title="Add to Cart">
                        <img src={ic_cart} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-12">
            <nav aria-label="navigation">
              <ul className="pagination justify-content-end mt-50">
                <li className="page-item active"><a className="page-link" href="#">01.</a></li>
                <li className="page-item"><a className="page-link" href="#">02.</a></li>
                <li className="page-item"><a className="page-link" href="#">03.</a></li>
                <li className="page-item"><a className="page-link" href="#">04.</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
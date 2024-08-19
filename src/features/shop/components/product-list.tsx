import React, { useEffect, useState } from 'react';
import ic_cart from '../../../static/img/core-img/cart.png'
import { Link } from 'react-router-dom';
import { ModuleConstants } from '../../../base/constants/module-constants';
import { useTranslation } from 'react-i18next';
import { Product } from '../../home/model/product';
import ImageDefault from '../../../base/components/image-custom';
import { BaseResponse, isSuccess } from '../../../base/api/base-response';
import { ResponeProduct } from '../../home/model/respone-product';
import { getProducts } from '../../home/api/product-api';
import { formatCurrency } from '../../../base/utils/app-utils';

const ProductList: React.FC = () => {
  const { t } = useTranslation()
  const [products, setProducts] = useState<Product[]>([])
  const limit = 4
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [lastPage, setLastPage] = useState<number>(1)

  useEffect(() => {
    getDataProducts('', limit, currentPage)
  }, [])

  useEffect(() => {
    getDataProducts('', limit, currentPage)
  }, [currentPage])

  const getDataProducts = async (keySearch: string, limit: number, page: number) => {
    try {
      const res: BaseResponse<ResponeProduct> =
        await getProducts(keySearch, limit, page);
      if (isSuccess(res)) {
        if (currentPage == 1) {
          setLastPage(res.data.last_page)
        }
        setProducts(res.data.data)
      } else {
        console.log(res)
      }
    } catch (err) {
      console.log('Lỗi:' + err)
    }
  }

  const ItemProduct = (product: Product, index: number) => {
    return (<div className="col-12 col-sm-6 col-md-12 col-xl-6" key={index}>
      <div className="single-product-wrapper">
        <div className="product-img">
          <ImageDefault url={product.url} className='object-scale-fill' />
          <ImageDefault className="hover-img object-scale-fill" url={product.url} />
        </div>
        <div className="product-description d-flex align-items-center justify-content-between">
          <div className="product-meta-data">
            <div className="line"></div>
            <p className="product-price">{formatCurrency(product.price)} </p>
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
    </div>)
  }
  const changePage = (i: number) => {
    setCurrentPage(i)
  }

  const renderPage = () => {
    console.log('Total Page: ', lastPage);
    const pageItems = [];

    for (let i = 1; i <= lastPage; i++) {
      pageItems.push(
        <li onClick={() => changePage(i)} key={i} className={`${i === currentPage ? 'active' : ''} page-item`}>
          <Link className="page-link" to={''}>{i}</Link>
        </li>
      );
    }

    return pageItems;
  };

  return (
    <div className="amado_product_area section-padding-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="product-topbar d-xl-flex align-items-end justify-content-between">
              <div className="total-products">
                <p>{t('showing')} 1-8 0f 25</p>
                <div className="view d-flex">
                  <a href="#"><i className="fa fa-th-large" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-bars" aria-hidden="true"></i></a>
                </div>
              </div>
              <div className="product-sorting d-flex">
                <div className="sort-by-date d-flex align-items-center mr-15">
                  <p>{t('sort_by')}</p>
                  <form action="#" method="get">
                    <select name="select" id="sortBydate">
                      <option value="value">{t('date')}</option>
                      <option value="value">{t('newest')}</option>
                      <option value="value">{t('popular')}</option>
                    </select>
                  </form>
                </div>
                <div className="view-product d-flex align-items-center">
                  <p>{t('view')}</p>
                  <form action="#" method="get">
                    <select name="select" id="viewProduct">
                      <option value="value">10</option>
                      <option value="value">20</option>
                      <option value="value">50</option>
                      <option value="value">100</option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {products.map((product, index) => (
            ItemProduct(product, index)
          ))}
        </div>

        <div className="row">
          <div className="col-12">
            <nav aria-label="navigation">
              <ul className="pagination justify-content-end mt-50">
                {products.length > 0 && renderPage()}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
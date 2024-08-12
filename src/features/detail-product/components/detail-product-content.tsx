import React from 'react';
import { Link } from 'react-router-dom';
import pro_big_1 from '../../../static/img/product-img/pro-big-1.jpg'
import pro_big_2 from '../../../static/img/product-img/pro-big-2.jpg'
import pro_big_3 from '../../../static/img/product-img/pro-big-3.jpg'
import pro_big_4 from '../../../static/img/product-img/pro-big-4.jpg'

const DetailProductContent: React.FC = () => {

  const handleQtyChange = (operation: 'increase' | 'decrease') => {
    const qtyInput = document.getElementById('qty') as HTMLInputElement;
    let qty = parseInt(qtyInput.value);
    if (isNaN(qty)) qty = 1;
    if (operation === 'increase') {
      qtyInput.value = (qty + 1).toString();
    } else if (operation === 'decrease' && qty > 1) {
      qtyInput.value = (qty - 1).toString();
    }
  };

  return (
    <div className="single-product-area section-padding-100 clearfix">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mt-50">
                <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                <li className="breadcrumb-item"><Link to="#">Furniture</Link></li>
                <li className="breadcrumb-item"><Link to="#">Chairs</Link></li>
                <li className="breadcrumb-item active" aria-current="page">White Modern Chair</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-7">
            <div className="single_product_thumb">
              <div id="product_details_slider" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li className="active" data-target="#product_details_slider" data-slide-to="0" style={{ backgroundImage: `url(${pro_big_1})` }}></li>
                  <li data-target="#product_details_slider" data-slide-to="1" style={{ backgroundImage: `url(${pro_big_2})` }}></li>
                  <li data-target="#product_details_slider" data-slide-to="2" style={{ backgroundImage: `url(${pro_big_3})` }}></li>
                  <li data-target="#product_details_slider" data-slide-to="3" style={{ backgroundImage: `url(${pro_big_4})` }}></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <a className="gallery_img" href={pro_big_1}>
                      <img className="d-block w-100" src={pro_big_1} alt="First slide" />
                    </a>
                  </div>
                  <div className="carousel-item">
                    <a className="gallery_img" href={pro_big_2}>
                      <img className="d-block w-100" src={pro_big_2} alt="Second slide" />
                    </a>
                  </div>
                  <div className="carousel-item">
                    <a className="gallery_img" href={pro_big_3}>
                      <img className="d-block w-100" src={pro_big_3} alt="Third slide" />
                    </a>
                  </div>
                  <div className="carousel-item">
                    <a className="gallery_img" href={pro_big_4}>
                      <img className="d-block w-100" src={pro_big_4} alt="Fourth slide" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="single_product_desc">
              <div className="product-meta-data">
                <div className="line"></div>
                <p className="product-price">$180</p>
                <Link to="product-details.html">
                  <h6>White Modern Chair</h6>
                </Link>
                <div className="ratings-review mb-15 d-flex align-items-center justify-content-between">
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div className="review">
                    <Link to="#">Write A Review</Link>
                  </div>
                </div>
                <p className="avaibility"><i className="fa fa-circle"></i> In Stock</p>
              </div>

              <div className="short_overview my-5">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?</p>
              </div>

              <form className="cart clearfix" method="post">
                <div className="cart-btn d-flex mb-50">
                  <p>Qty</p>
                  <div className="quantity">
                    <span className="qty-minus" onClick={() => handleQtyChange('decrease')}><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                    <input type="number" className="qty-text" id="qty" step="1" min="1" max="300" name="quantity" defaultValue="1" />
                    <span className="qty-plus" onClick={() => handleQtyChange('increase')}><i className="fa fa-caret-up" aria-hidden="true"></i></span>
                  </div>
                </div>
                <button type="submit" name="addtocart" value="5" className="btn amado-btn">Add to cart</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProductContent;
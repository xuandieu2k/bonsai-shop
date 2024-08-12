import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="shop_sidebar_area">
      {/* ##### Single Widget ##### */}
      <div className="widget catagory mb-50">
        <h6 className="widget-title mb-30">Catagories</h6>
        <div className="catagories-menu">
          <ul>
            <li className="active"><a href="#">Chairs</a></li>
            <li><a href="#">Beds</a></li>
            <li><a href="#">Accesories</a></li>
            <li><a href="#">Furniture</a></li>
            <li><a href="#">Home Deco</a></li>
            <li><a href="#">Dressings</a></li>
            <li><a href="#">Tables</a></li>
          </ul>
        </div>
      </div>

      {/* ##### Single Widget ##### */}
      <div className="widget brands mb-50">
        <h6 className="widget-title mb-30">Brands</h6>
        <div className="widget-desc">
          {['Amado', 'Ikea', 'Furniture Inc', 'The factory', 'Artdeco'].map((brand, index) => (
            <div className="form-check" key={index}>
              <input className="form-check-input" type="checkbox" value="" id={brand.toLowerCase()} />
              <label className="form-check-label" htmlFor={brand.toLowerCase()}>{brand}</label>
            </div>
          ))}
        </div>
      </div>

      {/* ##### Single Widget ##### */}
      <div className="widget color mb-50">
        <h6 className="widget-title mb-30">Color</h6>
        <div className="widget-desc">
          <ul className="d-flex">
            {['color1', 'color2', 'color3', 'color4', 'color5', 'color6', 'color7', 'color8'].map((color, index) => (
              <li key={index}><a href="#" className={color}></a></li>
            ))}
          </ul>
        </div>
      </div>

      {/* ##### Single Widget ##### */}
      <div className="widget price mb-50">
        <h6 className="widget-title mb-30">Price</h6>
        <div className="widget-desc">
          <div className="slider-range">
            <div data-min="10" data-max="1000" data-unit="$" className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-value-min="10" data-value-max="1000" data-label-result="">
              <div className="ui-slider-range ui-widget-header ui-corner-all"></div>
              <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0}></span>
              <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0}></span>
            </div>
            <div className="range-price">$10 - $1000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
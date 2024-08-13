import { Link } from 'react-router-dom';
import logo from '../../static/img/core-img/logo.png'
import Header from './header';
import ShopContent from '../../features/shop/components/shop-content';
import HomeContent from '../../features/home/components/home-content';
import DetailProductContent from '../../features/detail-product/components/detail-product-content';
import CartContent from '../../features/cart/components/cart-content';
import CheckoutContent from '../../features/checkout/components/checkout-content';
import { ModuleConstants } from '../constants/module-constants';
import { TabContants } from '../constants/app-contants';

interface MainContentProps {
  tab: number;
}

const MainContent: React.FC<MainContentProps> = ({ tab }) => {

  const renderContent = (tab: number) => {
    switch (tab) {
      case TabContants.HOME: return (
        <HomeContent />
      );
      case TabContants.SHOP: return (
        <ShopContent />
      );

      case TabContants.DETAIL_PRODUCT: return (
        <DetailProductContent />
      );
      case TabContants.CART: return (
        <CartContent />
      );
      case TabContants.CHECKOUT: return (
        <CheckoutContent />
      );
      default: return (
        <HomeContent />
      );
    }
  };

  return (
    <div className="main-content-wrapper d-flex clearfix">
      <div className="mobile-nav">
        <div className="amado-navbar-brand">
          <Link to={ModuleConstants.HOME}><img src={logo} alt="Logo" /></Link>
        </div>
        <div className="amado-navbar-toggler">
          <span></span><span></span><span></span>
        </div>
      </div>
      <Header tab={tab} />
      {renderContent(tab)}
    </div>
  );
};

export default MainContent;
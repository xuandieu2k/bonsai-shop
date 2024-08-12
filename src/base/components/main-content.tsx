import { Link } from 'react-router-dom';
import logo from '../../static/img/core-img/logo.png'
import Header from './header';
import ShopContent from '../../features/shop/components/shop-content';
import HomeContent from '../../features/home/components/home-content';
import DetailProductContent from '../../features/detail-product/components/detail-product-content';
import CartContent from '../../features/cart/components/cart-content';
import CheckoutContent from '../../features/checkout/components/checkout-content';

interface MainContentProps {
  tab: number;
}

const MainContent: React.FC<MainContentProps> = ({ tab }) => {

  const renderContent = (tab: number) => {
    switch (tab) {
      case 0: return (
        <HomeContent />
      );
      case 1: return (
        <ShopContent />
      );

      case 2: return (
        <DetailProductContent />
      );
      case 3: return (
        <CartContent />
      );
      case 4: return (
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
          <Link to="/"><img src={logo} alt="Logo" /></Link>
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
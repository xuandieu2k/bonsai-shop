import { Link } from 'react-router-dom';
import logo from '../../static/img/core-img/logo.png'
import cart from '../../static/img/core-img/cart.png'
import favorite from '../../static/img/core-img/favorites.png'
import search from '../../static/img/core-img/search.png'

interface HeaderProps {
  tab: number;
}
const Header: React.FC<HeaderProps> = ({ tab }) => {
  const getClass = (tabAc: number) => {
    return tabAc == tab ? 'active' : ''
  };

  return (
    <header className="header-area clearfix">
      <div className="nav-close">
        <i className="fa fa-close" aria-hidden="true"></i>
      </div>
      <div className="logo">
        <Link to="/"><img src={logo} alt="Logo" /></Link>
      </div>
      <nav className="amado-nav">
        <ul>
          <li className={`${getClass(0)}`}><Link to="/">Home</Link></li>
          <li className={`${getClass(1)}`}><Link to="/shop">Shop</Link></li>
          <li className={`${getClass(2)}`}><Link to="/product-details">Product</Link></li>
          <li className={`${getClass(3)}`}><Link to="/cart">Cart</Link></li>
          <li className={`${getClass(4)}`}><Link to="/checkout">Checkout</Link></li>
        </ul>
      </nav>
      <div className="amado-btn-group mt-30 mb-100">
        <Link to="#" className="btn amado-btn mb-15">%Discount%</Link>
        <Link to="#" className="btn amado-btn active">New this week</Link>
      </div>
      <div className="cart-fav-search mb-100">
        <Link to="/cart" className="cart-nav"><img src={cart} alt="Cart" /> Cart <span>(0)</span></Link>
        <Link to="#" className="fav-nav"><img src={favorite} alt="Favorites" /> Favourite</Link>
        <Link to="#" className="search-nav"><img src={search} alt="Search" /> Search</Link>
      </div>
      <div className="social-info d-flex justify-content-between">
        <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
        <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
        <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
      </div>
    </header>
  )
}
export default Header;
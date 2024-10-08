import { Link } from 'react-router-dom';
import logo from '../../static/img/core-img/logo.png'
import cart from '../../static/img/core-img/cart.png'
import favorite from '../../static/img/core-img/favorites.png'
import search from '../../static/img/core-img/search.png'
import { ModuleConstants } from '../constants/module-constants';
import { useTranslation } from 'react-i18next'
import i18n from 'i18next';
import { getLanguage } from '../utils/app-utils';
import { useState } from 'react';
import LanguageModal from './language-modal';
interface HeaderProps {
  tab: number;
}
const Header: React.FC<HeaderProps> = ({ tab }) => {
  const { t } = useTranslation()
  const [showModal, setShowModal] = useState(false)

  const getClass = (tabAc: number) => {
    return tabAc == tab ? 'active' : ''
  };

  const handlChangeLanguage = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
    setShowModal(false)
  }

  return (
    <>
      <header className="header-area clearfix">
        <div className="nav-close">
          <i className="fa fa-close" aria-hidden="true"></i>
        </div>
        <div className="logo">
          <Link to={ModuleConstants.HOME}><img src={logo} alt="Logo" /></Link>
        </div>
        <nav className="amado-nav">
          <ul>
            <li className={`${getClass(0)}`}><Link to="/">{t('home')}</Link></li>
            <li className={`${getClass(1)}`}><Link to="/shop">{t('shop')}</Link></li>
            <li className={`${getClass(2)}`}><Link to="/product-details">{t('product')}</Link></li>
            <li className={`${getClass(3)}`}><Link to="/cart">{t('cart')}</Link></li>
            <li className={`${getClass(4)}`}><Link to="/checkout">{t('checkout')}</Link></li>
            <li className={`d-flex align-items-center`} onClick={handlChangeLanguage}><Link to={''}>{t('language')}</Link> <span className='ml-2 text-center mb-1'>|</span> <img className='ml-2' src={getLanguage(i18n.language)} style={{ height: '24px', width: '24px' }} /></li>
          </ul>
        </nav>
        <div className="amado-btn-group mt-30 mb-100">
          <Link to="#" className="btn amado-btn mb-15">%{t('discount')}%</Link>
          <Link to="#" className="btn amado-btn active">{t('new_this_week')}</Link>
        </div>
        <div className="cart-fav-search mb-100">
          <Link to={ModuleConstants.CART} className="cart-nav"><img src={cart} alt="Cart" /> {t('cart')} <span>(0)</span></Link>
          <Link to="#" className="fav-nav"><img src={favorite} alt="Favorites" /> {t('favourite')}</Link>
          <Link to="#" className="search-nav"><img src={search} alt="Search" /> {t('search')}</Link>
        </div>
        <div className="social-info d-flex justify-content-between">
          <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
          <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
          <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
          <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
        </div>
      </header>
      {showModal && <LanguageModal
        show={showModal}
        handleClose={handleClose}
        currentLanguage={i18n.language}
        changeLanguage={changeLanguage}
      />}
    </>
  )
}
export default Header;
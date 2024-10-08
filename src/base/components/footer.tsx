import { Link } from 'react-router-dom';
import logo from '../../static/img/core-img/logo2.png'
import { ModuleConstants } from '../constants/module-constants';
import { useTranslation } from 'react-i18next'

const Footer: React.FC<{}> = () => {
  const { t } = useTranslation()
  return (<footer className="footer_area clearfix">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-lg-4">
          <div className="single_widget_area">
            <div className="footer-logo mr-50">
              <Link to={ModuleConstants.HOME}><img src={logo} alt="Logo" /></Link>
            </div>
            <p className="copywrite">{t('copyright')} &copy;<script>document.write(new Date().getFullYear());</script> {t('all_rights_reserved')} <i className="fa fa-heart-o" aria-hidden="true"></i> {t('by')} <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer"> XDHugTeam</a> </p>
          </div>
        </div>
        <div className="col-12 col-lg-8">
          <div className="single_widget_area">
            <div className="footer_menu">
              <nav className="navbar navbar-expand-lg justify-content-end">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#footerNavContent" aria-controls="footerNavContent" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars"></i></button>
                <div className="collapse navbar-collapse" id="footerNavContent">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active"><Link className="nav-link" to={ModuleConstants.HOME}>{t('home')}</Link></li>
                    <li className="nav-item"><Link className="nav-link" to={ModuleConstants.SHOP}>{t('shop')}</Link></li>
                    <li className="nav-item"><Link className="nav-link" to={ModuleConstants.DETAIL_PRODUCT}>{t('product')}</Link></li>
                    <li className="nav-item"><Link className="nav-link" to={ModuleConstants.CART}>{t('cart')}</Link></li>
                    <li className="nav-item"><Link className="nav-link" to={ModuleConstants.CHECKOUT}>{t('checkout')}</Link></li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>)
};

export default Footer;

import Footer from '../../../base/components/footer';
import SearchHeader from '../../../base/components/search';
import MainContent from '../../../base/components/main-content';
import Newsletter from '../../../base/components/news-letter';

const CartPage = () => (
    <>
        <SearchHeader />
        <MainContent tab={3} />
        <Newsletter />
        <Footer />
    </>
);

export default CartPage;

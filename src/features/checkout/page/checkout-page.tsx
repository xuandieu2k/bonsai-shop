import Footer from '../../../base/components/footer';
import SearchHeader from '../../../base/components/search';
import MainContent from '../../../base/components/main-content';
import Newsletter from '../../../base/components/news-letter';

const CheckoutPage = () => (
    <>
        <SearchHeader />
        <MainContent tab={4} />
        <Newsletter />
        <Footer />
    </>
);

export default CheckoutPage;
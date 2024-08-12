import MainContent from '../../../base/components/main-content';
import Newsletter from '../../../base/components/news-letter';
import Footer from '../../../base/components/footer';
import SearchHeader from '../../../base/components/search';

const HomePage = () => (
    <>
        <SearchHeader />
        <MainContent tab={0} />
        <Newsletter />
        <Footer />
    </>
);

export default HomePage;

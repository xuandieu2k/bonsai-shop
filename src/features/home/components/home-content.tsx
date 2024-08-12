import { Link } from 'react-router-dom';
import img_1 from '../../../static/img/bg-img/1.jpg'
import img_2 from '../../../static/img/bg-img/2.jpg'
import img_3 from '../../../static/img/bg-img/3.jpg'
import img_4 from '../../../static/img/bg-img/4.jpg'
import img_5 from '../../../static/img/bg-img/5.jpg'
import img_6 from '../../../static/img/bg-img/6.jpg'
import img_7 from '../../../static/img/bg-img/7.jpg'
import img_8 from '../../../static/img/bg-img/8.jpg'
import img_9 from '../../../static/img/bg-img/9.jpg'


const HomeContent = () => (
    <div className="products-catagories-area clearfix">
        <div className="amado-pro-catagory clearfix">
            {[
                { img: img_1, text: 'Modern Chair', price: 'From $180' },
                { img: img_2, text: 'Minimalistic Plant Pot', price: 'From $180' },
                { img: img_3, text: 'Modern Chair', price: 'From $180' },
                { img: img_4, text: 'Night Stand', price: 'From $180' },
                { img: img_5, text: 'Plant Pot', price: 'From $18' },
                { img: img_6, text: 'Small Table', price: 'From $320' },
                { img: img_7, text: 'Metallic Chair', price: 'From $318' },
                { img: img_8, text: 'Modern Rocking Chair', price: 'From $318' },
                { img: img_9, text: 'Home Deco', price: 'From $318' }
            ].map((item, index) => (
                <div className="single-products-catagory clearfix" key={index}>
                    <Link to="/shop">
                        <img src={item.img} alt={item.text} />
                        <div className="hover-content">
                            <div className="line"></div>
                            <p>{item.price}</p>
                            <h4>{item.text}</h4>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    </div>
);

export default HomeContent;

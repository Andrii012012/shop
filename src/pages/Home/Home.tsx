import SwiperImages from './components/SwiperImages/SwiperImages';
import styles from './style.module.scss';
import gStyles from '../../styles/styles.module.scss';
import SeasonProducts from './components/SeasonProducts/SeasonProducts';
import DiscountProducts from './components/DiscountProducts/DiscountProducts';
import HitProducts from './components/HitProducts/HitProducts';
import Feedback from './components/Feedback/Feedback';
import Reviews from './components/Reviews/Reviews';
import Gallery from './components/Gallery/Gallery';
import News from './components/News/News';
import Subscribe from './components/Subscribe/Subscribe';

export default function Home(): JSX.Element {
    return (
        <main className={styles.page}>
            <SwiperImages />
            <div className={gStyles.container}>
                <SeasonProducts />
                <HitProducts />
                <DiscountProducts />
            </div>
            <Feedback />
            <News />
            <Reviews />
            <Gallery />
            <Subscribe />
            <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d52911152.012123756!2d-161.65545109903397!3d35.960656281788644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sus!4v1738758474204!5m2!1sru!2sus" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </main>
    );
}
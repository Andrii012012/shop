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
        </main>
    );
}
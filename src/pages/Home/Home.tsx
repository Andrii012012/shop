import { SwiperSlide } from 'swiper/react';
import ListProducts from '../../containers/ListProducts/ListProducts';
import SwiperImages from './components/SwiperImages/SwiperImages';
import styles from './style.module.scss';
import gStyles from '../../styles/styles.module.scss';
import Card from '../../containers/Card/Card';
import SeasonProducts from './components/SeasonProducts/SeasonProducts';
import DiscountProducts from './components/DiscountProducts/DiscountProducts';
import HitProducts from './components/HitProducts/HitProducts';
import Feedback from './components/Feedback/Feedback';

export default function Home(): JSX.Element {
    return (
        <main className={styles.page}>
            <SwiperImages />
            <div className={gStyles.container}>
                <SeasonProducts />
                <HitProducts />
                <DiscountProducts />
            </div>
            <Feedback/>
        </main>
    );
}
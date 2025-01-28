import { SwiperSlide } from 'swiper/react';
import ListProducts from '../../containers/ListProducts/ListProducts';
import SwiperImages from './components/SwiperImages/SwiperImages';
import styles from './style.module.scss';
import gStyles from '../../styles/styles.module.scss';
import Card from '../../containers/Card/Card';

export default function Home(): JSX.Element {
    return (
        <main className={styles.page}>
            <SwiperImages />
        </main>
    );
}
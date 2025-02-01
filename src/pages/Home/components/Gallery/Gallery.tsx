import styles from './style.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import ListProducts from '../../../../containers/ListProducts/ListProducts';
import { SwiperSlide } from 'swiper/react';
import gallery1 from '../../../../assets/images/gallery/gallery1.png';
import gallery2 from '../../../../assets/images/gallery/gallery2.png';
import gallery3 from '../../../../assets/images/gallery/gallery3.png';

export default function Gallery(): JSX.Element {
    return (
        <section className={styles.wrapper}>
            <div className={gStyles.container}>
                <ListProducts title='Фотогалерея' slidesPerView={3} prevButton={styles.prevButton} nextButton={styles.nextButton}>
                    <SwiperSlide>
                        <div className={styles.item}>
                            <img src={gallery1} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.item}>
                            <img src={gallery1} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.item}>
                            <img src={gallery2} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.item}>
                            <img src={gallery3} />
                        </div>
                    </SwiperSlide>
                </ListProducts>
            </div>
        </section>
    );
}
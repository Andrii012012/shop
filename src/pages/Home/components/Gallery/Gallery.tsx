import styles from './style.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import ListProducts from '../../../../containers/ListProducts/ListProducts';
import { SwiperSlide } from 'swiper/react';
import gallery1 from '../../../../assets/images/gallery/gallery1.png';
import gallery2 from '../../../../assets/images/gallery/gallery2.png';
import gallery3 from '../../../../assets/images/gallery/gallery3.png';

const GALLERY_ARRAY = [
    gallery1,
    gallery2,
    gallery3
]

export default function Gallery(): JSX.Element {
    return (
        <section className={styles.wrapper}>
            <div className={gStyles.container}>
                <ListProducts title='Фотогалерея' slidesPerView={3} prevButton={styles.prevButton} nextButton={styles.nextButton}>
                    {GALLERY_ARRAY.map((item) => (
                        <SwiperSlide key={item}>
                            <div className={styles.item}>
                                <img src={item} />
                            </div>
                        </SwiperSlide>
                    ))}
                </ListProducts>
            </div>
        </section>
    );
}
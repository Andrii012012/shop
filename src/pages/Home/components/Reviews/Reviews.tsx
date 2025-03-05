import styles from './style.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import ListProducts from '../../../../containers/ListProducts/ListProducts';
import { SwiperSlide } from 'swiper/react';
import Review from '../../../../containers/Review/Review';
import { useFetch } from '../../../../hooks/useFetch';
import { IComment } from '../../../../interface/interface';

export default function Reviews(): JSX.Element {

    const [data] = useFetch<IComment>('src/servers/comments.json');

    if (Array.isArray(data)) {
        return (
            <section className={styles.wrapper}>
                <div className={gStyles.container}>

                    <ListProducts slidesPerView={4} title='Отзывы покупателей' prevButton={styles.prevButton} nextButton={styles.nextButton}>
                        {data.map((item, index) => (
                            <SwiperSlide key={index} className={styles.slide}>
                                <Review
                                    avatar={item.avatar}
                                    name={item.name}
                                    surname={item.surname}
                                    mark={item.marks}
                                    description={item.description}
                                />
                            </SwiperSlide>
                        ))}
                    </ListProducts>
                </div>
            </section>
        );
    } else {
        return <></>;
    }
}
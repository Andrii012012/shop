import { SwiperSlide } from 'swiper/react';
import ListProducts from '../../../../containers/ListProducts/ListProducts';
import styles from './styles.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import Review from '../../../../containers/Review/Review';
import { IComment } from '../../../../interface/interface';

interface IProps {
    comments: IComment[];
}

export default function Comments(props: IProps): JSX.Element {

    const { comments } = props;

    return (
        <section className={styles.wrapper}>
            <div className={gStyles.container}>
                <ListProducts slidesPerView={4} title='Отзывы покупателей' prevButton={styles.prevButton} nextButton={styles.nextButton}>
                    {comments.map((item, index) => (
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
}
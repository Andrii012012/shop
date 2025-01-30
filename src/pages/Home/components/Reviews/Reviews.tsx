import styles from './style.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import ListProducts from '../../../../containers/ListProducts/ListProducts';
import { SwiperSlide } from 'swiper/react';
import Review from '../../../../containers/Review/Review';

export default function Reviews(): JSX.Element {
    return (
        <section className={styles.wrapper}>
            <div className={gStyles.container}>
                <ListProducts slidesPerView={4} title='Отзывы покупателей' prevButton={styles.prevButton} nextButton={styles.nextButton}>
                    <SwiperSlide className={styles.slide}>
                        <Review
                            avatar={'avatar1.png'}
                            name='Елена'
                            surname='И.'
                            mark={4}
                            description={`
                    Благодарю за возможность получать лекарства на дом,
                    что во время пандемии особенно важно. Ваше отношение
                    к людям отражает слова мудрой книги:"Не отказывайся делать добро тем,
                    кто в том нуждается, если можешь им помочь". 
                    Желаю всем сотрудникам здоровья и мирного неба над головой`}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <Review
                            avatar={'avatar1.png'}
                            name='Елена'
                            surname='И.'
                            mark={5}
                            description={`
                  очень хороший магазин, заказала лекарство, вечером забрала. Причем цены существенно отличаются от цен в обычных аптеках, дорогие препараты дешеле на 200-700 рублей!`}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <Review
                            avatar={'avatar1.png'}
                            name='Елена'
                            surname='И.'
                            mark={4}
                            description={`
                    Благодарю за возможность получать лекарства на дом,
                    что во время пандемии особенно важно. Ваше отношение
                    к людям отражает слова мудрой книги:"Не отказывайся делать добро тем,
                    кто в том нуждается, если можешь им помочь". 
                    Желаю всем сотрудникам здоровья и мирного неба над головой`}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <Review
                            avatar={'avatar1.png'}
                            name='Елена'
                            surname='И.'
                            mark={4}
                            description={`
                    Благодарю за возможность получать лекарства на дом,
                    что во время пандемии особенно важно. Ваше отношение
                    к людям отражает слова мудрой книги:"Не отказывайся делать добро тем,
                    кто в том нуждается, если можешь им помочь". 
                    Желаю всем сотрудникам здоровья и мирного неба над головой`}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <Review
                            avatar={'avatar1.png'}
                            name='Елена'
                            surname='И.'
                            mark={5}
                            description={`
                  очень хороший магазин, заказала лекарство, вечером забрала. Причем цены существенно отличаются от цен в обычных аптеках, дорогие препараты дешеле на 200-700 рублей!`}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <Review
                            avatar={'avatar1.png'}
                            name='Елена'
                            surname='И.'
                            mark={4}
                            description={`
                    Благодарю за возможность получать лекарства на дом,
                    что во время пандемии особенно важно. Ваше отношение
                    к людям отражает слова мудрой книги:"Не отказывайся делать добро тем,
                    кто в том нуждается, если можешь им помочь". 
                    Желаю всем сотрудникам здоровья и мирного неба над головой`}
                        />
                    </SwiperSlide>
                </ListProducts>
            </div>
        </section>
    );
}
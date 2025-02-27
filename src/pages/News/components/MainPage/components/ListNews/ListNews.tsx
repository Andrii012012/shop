import styles from './styles.module.scss';
import pStyles from '../../styles.module.scss';
import gStyles from '../../../../../../styles/styles.module.scss';
import { SwiperSlide } from 'swiper/react';
import imageNews1 from '../../../../../../assets/images/news/imageNews1.png';
import { useAppSelector } from '../../../../../../hooks/useAppSelector';
import ListProducts from '../../../../../../containers/ListProducts/ListProducts';
import { Link } from 'react-router-dom';
import { PATH_NEWS } from '../../../../../../routes/routes';
import { NEWS } from '../../../../../../constants/path';

export default function ListNews(): JSX.Element {

    const news = useAppSelector((state) => state.news.news?.sectionNews);

    return (
        <section className={pStyles.wrapper}>
            <ListProducts bulletsEl={pStyles.bulletsEl} bulletsActive={pStyles.bulletsActive} isPagination={true} bullets={pStyles.bullets} title='Новости' slidesPerView={3} prevButton={styles.prevButton} nextButton={styles.nextButton}>
                {news?.map((item, _) => (
                    <SwiperSlide className={pStyles.swiperSlide}>
                        <div className={styles.item}>
                            <div className={styles.image}>
                                <img src={imageNews1} alt="" />
                            </div>
                            <div className={styles.content}>
                                <p className={gStyles.textLarge}>{item.title}</p>
                                <Link className={pStyles.button} to={`${PATH_NEWS}/${NEWS.detailsNews}/sectionNews/${item.title}`}>Подробнее</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </ListProducts>
        </section>
    );
}
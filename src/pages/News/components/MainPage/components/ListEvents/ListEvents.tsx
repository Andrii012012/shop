import styles from './styles.module.scss';
import pStyles from '../../styles.module.scss';
import { SwiperSlide } from 'swiper/react';
import { useAppSelector } from '../../../../../../hooks/useAppSelector';
import ListProducts from '../../../../../../containers/ListProducts/ListProducts';
import ItemEvent from '../../../../../../containers/ItemEvent/ItemEvent';
import { PATH_NEWS } from '../../../../../../routes/routes';
import { NEWS } from '../../../../../../constants/path';

export default function ListEvents(): JSX.Element {

    const events = useAppSelector((state) => state.news.news?.sectionEvents);

    return (
        <section className={pStyles.wrapper}>
            <ListProducts bulletsEl={pStyles.bulletsEl} bulletsActive={pStyles.bulletsActive} isPagination={true} bullets={pStyles.bullets} title='События' slidesPerView={2} prevButton={styles.prevButton} nextButton={styles.nextButton}>
                {events?.map((item, _) => (
                    <SwiperSlide className={pStyles.swiperSlide}>
                      <ItemEvent title={item.title} description={item.description} to={`${PATH_NEWS}/${NEWS.detailsNews}/sectionEvents/${item.title}`}/>
                    </SwiperSlide>
                ))}
            </ListProducts>
        </section>
    );
}
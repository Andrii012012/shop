import styles from './styles.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import Navigate from '../../../../components/Navigate/Navigate';
import { PATH_PROMOTION } from '../../../../routes/routes';
import { useParams } from 'react-router-dom';
import { findPromotion } from '../../../../features/promotion/filters';
import imagePromotion from '../../../..//assets/images/promotion/imagePromotion1.png';
import ListProducts from '../../../../containers/ListProducts/ListProducts';
import { SwiperSlide } from 'swiper/react';
import Card from '../../../../containers/Card/Card';
import { findProductWithPromotionFilter } from '../../../../features/products/filters';

export default function DetailsPromotion(): JSX.Element {

    let titlePromotion: string = useParams().title || "";

    const promotion = useAppSelector(findPromotion(titlePromotion));

    const productsPromotion = useAppSelector(findProductWithPromotionFilter(titlePromotion));

    if (promotion) {
        return (
            <main className={styles.promotion}>
                <div className={gStyles.container}>
                    <Navigate className={styles.navigate} links={[{ name: "Акции", to: PATH_PROMOTION }, { name: "Вольтарен", to: "" }]} />
                    <div className={styles.content}>
                        <div className={styles.image}>
                            <img src={imagePromotion} alt="" />
                        </div>
                        <div className={styles.body}>
                            <h2 className={`${gStyles.textLarge} ${styles.title}`}>{promotion.title}</h2>
                            <p className={`${gStyles.textExtraBig} ${styles.description}`}>{promotion.description}</p>
                            <p className={gStyles.textExtraBig}>Внимание! Скидки не ссумируются.</p>
                        </div>
                    </div>
                    <ListProducts title='Товары, участвующие в акции' prevButton={styles.prevButton} nextButton={styles.nextButton}>
                        {productsPromotion.map((item) => (
                            <SwiperSlide>
                                <Card
                                    isStock={true}
                                    name={item.name}
                                    manufacturer={item.manufacturer}
                                    volume={item.release[0].packing[0]}
                                    release={item.release[1].name}
                                    price={item.price}
                                    isRecipe={item.isRecipe}
                                    isDelivery={item.isDelivery}
                                    countryOrigin={item.countryOrigin}
                                />
                            </SwiperSlide>
                        ))}
                    </ListProducts>
                </div>
            </main>
        );
    } return <></>;
}
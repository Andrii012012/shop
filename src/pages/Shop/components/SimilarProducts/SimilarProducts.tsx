import styles from './style.module.scss';
import { IBaseProduct } from '../../../../interface/interface';
import Card from '../../../../containers/Card/Card';
import ListProducts from '../../../../containers/ListProducts/ListProducts';
import { SwiperSlide } from 'swiper/react';
import { useAppSelector } from '../../../../hooks/useAppSelector';

interface IProps {

}

export default function SimilarProducts(props: IProps): JSX.Element {

    const { } = props;

    const products = useAppSelector((state) => state.products.products);

    return (
        <section className={styles.wrapper}>
            <ListProducts title='Возможно вы искали' prevButton={styles.prevButton} nextButton={styles.nextButton}>
                {products.map((item, index) => (
                    <SwiperSlide key={index}>
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
                            weight={item.weight}
                        />
                    </SwiperSlide>
                ))}
            </ListProducts>
        </section>
    );
}
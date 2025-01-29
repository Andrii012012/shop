import styles from './style.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import ListProducts from '../../../../containers/ListProducts/ListProducts';
import { SwiperSlide } from 'swiper/react';
import Card from '../../../../containers/Card/Card';

export default function DiscountProducts(): JSX.Element {
    return (
        <section className={styles.wrapper}>
            <ListProducts title='Товары по акции' prevButton={styles.prevButton} nextButton={styles.nextButton}>
                <SwiperSlide>
                    <Card
                        isStock={true}
                        name='Вольтарен эмуногель 1%'
                        manufacturer='NOVARTIS PHARMA'
                        volume={100}
                        release='гель'
                        price={782}
                        isRecipe={true}
                        isDelivery={false}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        isStock={true}
                        name='Вольтарен эмуногель 1%'
                        manufacturer='NOVARTIS PHARMA'
                        volume={100}
                        release='гель'
                        price={782}
                        isRecipe={true}
                        isDelivery={false}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        isStock={true}
                        name='Вольтарен эмуногель 1%'
                        manufacturer='NOVARTIS PHARMA'
                        volume={100}
                        release='гель'
                        price={782}
                        isRecipe={true}
                        isDelivery={false}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        isStock={true}
                        name='Вольтарен эмуногель 1%'
                        manufacturer='NOVARTIS PHARMA'
                        volume={100}
                        release='гель'
                        price={782}
                        isRecipe={true}
                        isDelivery={false}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        isStock={true}
                        name='Вольтарен эмуногель 1%'
                        manufacturer='NOVARTIS PHARMA'
                        volume={100}
                        release='гель'
                        price={782}
                        isRecipe={true}
                        isDelivery={false}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        isStock={true}
                        name='Вольтарен эмуногель 1%'
                        manufacturer='NOVARTIS PHARMA'
                        volume={100}
                        release='гель'
                        price={782}
                        isRecipe={true}
                        isDelivery={false}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        isStock={true}
                        name='Вольтарен эмуногель 1%'
                        manufacturer='NOVARTIS PHARMA'
                        volume={100}
                        release='гель'
                        price={782}
                        isRecipe={true}
                        isDelivery={false}
                    />
                </SwiperSlide>
            </ListProducts>
        </section>
    );
}
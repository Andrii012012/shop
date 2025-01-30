import styles from './style.module.scss';
import ListProducts from '../../../../containers/ListProducts/ListProducts';
import { SwiperSlide } from 'swiper/react';
import Card from '../../../../containers/Card/Card';

export default function SeasonProducts(): JSX.Element {
    return (
        <section className={styles.wrapper}>
            <ListProducts title='Сезонные товары' prevButton={styles.prevButton} nextButton={styles.nextButton}>
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
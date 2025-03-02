import styles from './style.module.scss';
import gStyles from '../../styles/styles.module.scss';
import imageDefaultProduct from '../../assets/images/products/imageProductDefault.png';
import { useState } from 'react';
import HeaderCard from './components/HeaderCard/HeaderCard';
import CounterCard from './components/CounterCard/CounterCard';

interface IProps {
    isStock: boolean;
    name: string;
    manufacturer: string;
    volume: number;
    release: string;
    price: number;
    isRecipe: boolean;
    isDelivery: boolean;
    countryOrigin: string;
    weight?: number;
    discount: number | null;
}

export default function Card(props: IProps): JSX.Element {

    const { isStock, name, manufacturer, countryOrigin, volume, release, price, isRecipe, isDelivery, weight, discount } = props;

    const initPrice = discount ? discount : price;

    const [counter, setCounter] = useState<number>(1);

    function handleMouseEnterSetClass(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
        event.currentTarget.classList.add(styles.activeCard);
    }

    function handleMouseLeaveSetClass(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
        event.currentTarget.classList.remove(styles.activeCard);
    }

    return (
        <div className={`${styles.card}`} onMouseLeave={(event) => handleMouseLeaveSetClass(event)} onMouseEnter={(event) => handleMouseEnterSetClass(event)}>
            <HeaderCard
                isStock={isStock}
                name={name}
                manufacturer={manufacturer}
                volume={volume}
                release={release}
                price={counter * initPrice}
                isRecipe={isRecipe}
                isDelivery={isDelivery}
                countryOrigin={countryOrigin}
                discount={discount}
            />
            <div className={styles.imageProduct}>
                <img src={imageDefaultProduct} alt="" />
            </div>
            <div className={`${styles.recipe} ${gStyles.textMedium}`}>{isRecipe ? <span className={styles.red}>С рецептом</span> : <span className={styles.green}>Без рецепта</span>}</div>
            <p className={`${styles.name} ${gStyles.textBig}`}>{name}</p>
            <ul className={styles.list}>
                <li className={gStyles.textExtraMedium}><h4>Производитель:</h4> <p>{manufacturer}</p></li>
                <li className={gStyles.textExtraMedium}><h4>Объем:</h4> <span>{volume} г</span></li>
                <li className={gStyles.textExtraMedium}><h4>Выпуск:</h4> <span>{release}</span></li>
            </ul>
            {discount
                ? <div className={styles.body}>
                    <p className={`${styles.priceWithoutDiscount} ${gStyles.textBig}`}>{price} грн</p>
                    <p className={`${styles.discount} ${styles.price} ${gStyles.textExtraLarge}`}>{counter * initPrice} грн</p>
                </div>
                : <p className={`${styles.price} ${gStyles.textExtraLarge}`}>{counter * initPrice} грн</p>}
            <CounterCard
                name={name}
                manufacturer={manufacturer}
                price={initPrice}
                isRecipe={isRecipe}
                countryOrigin={countryOrigin}
                counter={counter}
                setCounter={setCounter}
                weight={weight}
            />
            <div className={styles.wrrapperDelivery}>
                <h4 className={`${styles.delivery} ${gStyles.textBig}`}>{isDelivery ? <span className={styles.deliveryGreen}>Доступна доставка</span> : <span className={styles.deliveryRed}>Доставка запрещена</span>}</h4>
                <p className={`${styles.deliveryInfo} ${gStyles.textSmall}`}>
                    Доставим по указанному
                    адресу в ближайшее время
                </p>
            </div>
        </div >
    );
}
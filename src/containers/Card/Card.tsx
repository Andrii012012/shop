import styles from './style.module.scss';
import gStyles from '../../styles/styles.module.scss';
import Heart from '../../assets/images/global/iconHeartOutline.svg?react';
import imageDefaultProduct from '../../assets/images/products/imageProductDefault.png';
import Counter from '../../components/ui/Counter/Counter';
import { useState } from 'react';

interface IProps {
    isStock: boolean;
    name: string;
    manufacturer: string;
    volume: number;
    release: string;
    price: number;
    isRecipe: boolean;
    isDelivery: boolean;
}

export default function Card(props: IProps): JSX.Element {

    const { isStock, name, manufacturer, volume, release, price, isRecipe, isDelivery } = props;

    const [count, setCount] = useState<number>(1);

    function handleMouseEnterSetClass(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
        event.currentTarget.classList.add(styles.activeCard);
    }

    function handleMouseLeaveSetClass(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
        event.currentTarget.classList.remove(styles.activeCard);
    }

    return (
        <div className={`${styles.card}`} onMouseLeave={(event) => handleMouseLeaveSetClass(event)} onMouseEnter={(event) => handleMouseEnterSetClass(event)}>
            <div className={styles.header}>
                <div className={styles.iconHeart}>
                    <Heart />
                </div>
                <p className={gStyles.textMedium}>{isStock ? <span className={styles.inStock}>В наличии</span> : <span className={styles.outStock}>Закончились</span>}</p>
            </div>
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
            <p className={`${styles.price} ${gStyles.textExtraLarge}`}>{price} грн</p>
            <div className={styles.buttonBody}>
                <Counter value={count} setValue={setCount} />
                <button className={`${styles.button} ${gStyles.textMedium}`}>В корзину</button>
            </div>
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
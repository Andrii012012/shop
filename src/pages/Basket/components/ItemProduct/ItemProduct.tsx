import styles from './style.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import Checkbox from '../../../../components/ui/Checkbox/Checkbox';
import imageProduct from '../../../../assets/images/products/imageProductDefault.png';
import Counter from '../../../../components/ui/Counter/Counter';
import iconHeart from '../../../../assets/images/global/iconHeartOutline.svg';
import iconDelete from '../../../../assets/images/global/iconDelete.svg';
import { useState } from 'react';

interface IProps {
    name: string;
    price: number;
    isRecipe: boolean;
    countryOrigin: string;
    manufacturer: string;
}

export default function ItemProduct(props: IProps): JSX.Element {

    const { manufacturer, countryOrigin, isRecipe, name, price } = props;

    const [counter, setCounter] = useState<number>(1);

    return (
        <li className={styles.item}>
            <div className={styles.bodyProduct}>
                <Checkbox className={styles.checkboxSelectProduct} value={false} />
                <div className={styles.imageProduct}>
                    <img src={imageProduct} />
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.headerProduct}>
                        <h3 className={gStyles.textBig}>{name}</h3>
                        <div className={styles.bodyActions}>
                            <img src={iconHeart} alt="" />
                            <img src={iconDelete} alt="" />
                        </div>
                    </div>
                    <div className={styles.bodyInfoProduct}>
                        <div >
                            <p><span>Реализация:</span> {!isRecipe ? 'без рецепта' : "С рецептом"}</p>
                            <p><span>Производитель:</span> {manufacturer} {countryOrigin}</p>
                        </div>
                        <p className={`${styles.price} ${gStyles.textLarge}`}>{price} $</p>
                        <Counter className={styles.counter} value={counter} setValue={setCounter} />
                        <p className={`${styles.totalPrice} ${gStyles.textExtraLarge}`}>{price} $</p>
                    </div>
                </div>
            </div>
        </li>
    );
}
import styles from './style.module.scss';
import gStyles from '../../styles/styles.module.scss';
import Heart from '../../assets/images/header/heartIcon.svg?react';
import imageDefaultProduct from '../../assets/images/products/imageProductDefault.png';
import Counter from '../../components/ui/Counter/Counter';
import { useId, useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addProduct } from '../../features/basket/basket';
import { IBasketProduct, IUser } from '../../interface/interface';
import { LoginUser } from '../../features/user/user';
import { useAppSelector } from '../../hooks/useAppSelector';
import { callLocalStore } from '../../servers/callLocalStore';

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
}

export default function Card(props: IProps): JSX.Element {

    const { isStock, name, manufacturer, countryOrigin, volume, release, price, isRecipe, isDelivery } = props;

    const [counter, setCounter] = useState<number>(1);

    const uniqueId = useId();

    const dispatch = useAppDispatch();

    const dataUser = useAppSelector((state) => state.user.user);

    function handleMouseEnterSetClass(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
        event.currentTarget.classList.add(styles.activeCard);
    }

    function handleMouseLeaveSetClass(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
        event.currentTarget.classList.remove(styles.activeCard);
    }

    function handlePutProduct(productBasket: IBasketProduct) {
        dispatch(addProduct(productBasket));
    }

    function handleToggleLikedProduct(): void {

        const dataUserCopy: IUser = JSON.parse(JSON.stringify(dataUser));

        if (!dataUserCopy.likedProducts.find((item, _) => item.name === name)) {
            dataUserCopy.likedProducts.push({
                isStock,
                name,
                manufacturer,
                volume,
                release,
                price,
                isRecipe,
                isDelivery,
                countryOrigin,
            });
        } else {
            dataUserCopy.likedProducts = dataUserCopy?.likedProducts.filter((item, _) => item.name !== name && item);
        }

        const newDataUser = callLocalStore<IUser>("user", dataUserCopy);

        dispatch(LoginUser(newDataUser));

    }

    function checkIsLikedProduct(): boolean {
        const result = dataUser?.likedProducts.find((item, _) => item.name === name && item);
        return typeof result === 'object' ? true : false;
    }

    return (
        <div className={`${styles.card}`} onMouseLeave={(event) => handleMouseLeaveSetClass(event)} onMouseEnter={(event) => handleMouseEnterSetClass(event)}>
            <div className={styles.header}>
                <div onClick={() => dataUser && handleToggleLikedProduct()} className={styles.iconHeart}>
                    <Heart className={checkIsLikedProduct() ? styles.iconActive : ""} />
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
                <Counter value={counter} setValue={setCounter} />
                <button onClick={() => handlePutProduct({ id: uniqueId, name, manufacturer, countryOrigin, isRecipe, image: "", price, count: counter })} className={`${styles.button} ${gStyles.textMedium}`}>В корзину</button>
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
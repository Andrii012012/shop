import styles from './style.module.scss';
import gStyles from '../../../../../../styles/styles.module.scss';
import { TDeliveryMethod } from '../../../../type';
import { IAdditionalInfoOrder, IBasketProduct, IUser } from '../../../../../../interface/interface';
import ProductsList from '../ProductsList/ProductsList';
import { Link } from 'react-router-dom';
import { PATH_HOME } from '../../../../../../routes/routes';
import { useEffect } from 'react';
import { callLocalStore } from '../../../../../../servers/callLocalStore';
import { useAppSelector } from '../../../../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../../../../hooks/useAppDispatch';
import { LoginUser } from '../../../../../../features/user/user';

const ALPHABET: string[] = ['q', "w", 'e', 'r', "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
interface IProps {
    address: { street: string, house: string };
    deliveryMethod: TDeliveryMethod;
    products: IBasketProduct[];
    handleClosePortal: () => void;
    price: number;
    deliveryPrice: number;
    clearSelectedProducts: () => void;
}

export default function Purchase(props: IProps): JSX.Element {

    const { address, deliveryMethod, products, handleClosePortal, price, deliveryPrice, clearSelectedProducts } = props;

    const dataUser = useAppSelector((state) => state.user.user);

    const dispatch = useAppDispatch();

    const number = generateNumberOrder();

    function generateNumberOrder(): string {
        const numberArray: (number | string)[] = [];

        for (let index = 0; index < 5; index++) {
            numberArray.push(Math.floor(Math.random() * 10));
        }

        numberArray.push(ALPHABET[Math.floor(Math.random() * 26)].toLocaleUpperCase());
        return numberArray.join("");
    }

    function makeOrderObject(): IAdditionalInfoOrder[] {
        const order: IAdditionalInfoOrder[] = [];

        products.forEach((item, _) => {
            order.push({
                name: item.name,
                count: item.count,
                manufacturer: item.manufacturer,
                countryOrigin: item.countryOrigin,
                isRecipe: item.isRecipe,
            })
        });

        return order;
    }

    useEffect(() => {
        if (dataUser) {
            clearSelectedProducts();
            const dataUserCopy: IUser = JSON.parse(JSON.stringify(dataUser));

            dataUserCopy.orders.push({
                number: number,
                date: new Date().toLocaleDateString(),
                count: products.length,
                state: 'Новый',
                price: price,
                deliveryPrice: deliveryPrice,
                delivery: deliveryMethod,
                address: `ул. ${address.street} ${address.house}`,
                additionalInfo: makeOrderObject(),
            });

            dataUserCopy.marks += Math.round(price / 20);

            const newDataUser = callLocalStore('user', dataUserCopy);

            dispatch(LoginUser(newDataUser));
        }
    }, []);

    return (
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <h2 className={`${styles.title} ${gStyles.textLarge}`}>Спасибо за покупку!</h2>
                    <p className={`${styles.ordered}`}>Вы заказали:</p>
                    <ProductsList className={styles.list} products={products} />
                    <p className={`${styles.text} ${gStyles.textExtraBig} ${styles.numberOrder}`}><span>Номер заказа:</span><p className={styles.numberOrderActive}>{number}</p></p>
                    <p className={`${styles.text} ${gStyles.textExtraBig}`}><span>Способ доставки:</span>{deliveryMethod}</p>
                    <p className={`${styles.text} ${gStyles.textExtraBig}`}><span>Примерное время доставки:</span> Сегодня 13:00 - 15:00</p>
                    <p className={`${styles.text} ${gStyles.textExtraBig} ${styles.address}`}><span>Адрес доставки:</span> г. Тамбов, ул. {address.street} {address.house}</p>
                    <Link onClick={handleClosePortal} className={`${styles.button} ${gStyles.textBig}`} to={PATH_HOME}>
                        Продолжить покупки</Link>
                </div>
            </div>
        </div>
    )
}
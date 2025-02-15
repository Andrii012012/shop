import styles from './style.module.scss';
import gStyles from '../../../../../../styles/styles.module.scss';
import ProductsList from '../ProductsList/ProductsList';
import { TDeliveryMethod, TPayment } from '../../../../type';
import { IBasketProduct } from '../../../../../../interface/interface';

interface IProps {
    payment: TPayment
    deliveryMethod: TDeliveryMethod;
    products: IBasketProduct[];
    address: { street: string, house: string };
}

export default function Order(props: IProps): JSX.Element {

    const { payment, deliveryMethod, products, address } = props;

    return (
        <div className={styles.order}>
            <h2 className={`${gStyles.textExtraLarge} ${styles.title}`}>{payment === 'Оплата онлайн' ? "Оплата покупок картой онлайн" : "Оплата покупок при получении"}</h2>
            <p className={styles.ordered}>Вы заказали:</p>
            <ProductsList className={styles.list} products={products} />
            <p className={`${styles.text} ${gStyles.textExtraBig}`}><span>Способ доставки:</span>{deliveryMethod}</p>
            <p className={`${styles.text} ${gStyles.textExtraBig}`}><span>Примерное время доставки:</span> Сегодня 13:00 - 15:00</p>
            <p className={`${styles.text} ${gStyles.textExtraBig}`}><span>Адрес доставки:</span> г. Тамбов, ул. {address.street} {address.house}</p>
        </div>
    )
}
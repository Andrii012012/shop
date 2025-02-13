import styles from './style.module.scss';
import gStyles from "../../../../styles/styles.module.scss";
import { IBasketProduct } from '../../../../interface/interface';
import { TDeliveryMethod, TPayment } from '../../type';
import PanelProduct from '../PanelProduct/PanelProduct';
import Checkbox from '../../../../components/ui/Checkbox/Checkbox';
import Button from '../../../../components/ui/Button/Button';
import { useState } from 'react';

interface IProps {
    address: { street: string, house: string };
    deliveryMethod: TDeliveryMethod;
    totalPrice: number;
    products: IBasketProduct[];
    payment: TPayment;
}

export default function Confirmation(props: IProps): JSX.Element {

    const { address, deliveryMethod, totalPrice, products, payment } = props;

    const [isAgree, setIsAgree] = useState<boolean>(true);

    return (
        <section className={`${styles.confirmation}`}>
            <div className={gStyles.container}>
                <div className={styles.body}>
                    <div className={styles.order}>
                        <h2 className={`${gStyles.textExtraLarge} ${styles.title}`}>{payment === 'Оплата онлайн' ? "Оплата покупок картой онлайн" : "Оплата покупок при получении"}</h2>
                        <p className={styles.ordered}>Вы заказали:</p>
                        <ul className={styles.list}>
                            {products.map((item, index) => (
                                <li key={index} className={styles.item}>
                                    <h3 className={gStyles.textExtraBig}>{item.name}</h3>
                                    <p className={`${styles.text} ${gStyles.textExtraBig}`}><span>Условия реализации:</span><p> {item.isRecipe ? "с рецептом" : "без рецепта"}</p></p>
                                    <p className={`${styles.text} ${gStyles.textExtraBig}`}><span>Производитель:</span><p> {item.manufacturer} {item.countryOrigin}</p></p>
                                </li>
                            ))}
                        </ul>
                        <p className={`${styles.text} ${gStyles.textExtraBig}`}><span>Способ доставки:</span>{deliveryMethod}</p>
                        <p className={`${styles.text} ${gStyles.textExtraBig}`}><span>Примерное время доставки:</span> Сегодня 13:00 - 15:00</p>
                        <p className={`${styles.text} ${gStyles.textExtraBig}`}><span>Адрес доставки:</span> г. Тамбов, ул. {address.street} {address.house}</p>
                    </div>
                    <PanelProduct
                        price={totalPrice}
                        className={styles.panel}
                        products={products}
                        deliveryMethod={deliveryMethod}
                        footer={() => {
                            return (
                                <div className={styles.wrapper}>
                                    <div onClick={() => setIsAgree(!isAgree)} className={styles.bodyCheckbox}>
                                        <Checkbox className={styles.checkbox} value={isAgree} />
                                        <p>Нажимая кнопку «Оплатить», Вы соглашаетесь с <span>политикой конфедицеальности</span></p>
                                    </div>
                                    <Button className={`${styles.buyButton} ${gStyles.textBig}`} title="Оплатить" />
                                </div>
                            );
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
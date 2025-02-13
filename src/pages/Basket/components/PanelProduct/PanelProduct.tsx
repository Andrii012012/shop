import styles from './style.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import { TDeliveryMethod } from '../../type';
import { IBasketProduct } from '../../../../interface/interface';
import productImage from '../../../../assets/images/products/imageProductDefault.png';

interface IProps {
    deliveryMethod: TDeliveryMethod;
    products: IBasketProduct[];
    className?: string;
    price: number;
    footer: () => JSX.Element;
}

export default function PanelProduct(props: IProps): JSX.Element {

    const { deliveryMethod, products, className = "", price, footer } = props;

    return (
        <section className={`${styles.panel} ${className}`}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <p className={gStyles.textMedium}>  {deliveryMethod}</p>
                    <p>В заказе товаров: {products.length}</p>
                </div>
                <div className={styles.content}>
                    <ul className={styles.list}>
                        {products.map((item, index) => (
                            <li className={styles.item} key={index}>
                                <div className={styles.image}>
                                    <img src={productImage} alt="" />
                                </div>
                                <div className={styles.infoProductBody}>
                                    <h3 className={gStyles.textBig}>{item.name}</h3>
                                    <p className={styles.text}><span>Реализация:</span> {item.isRecipe ? "с рецептом" : "без рецепта"}</p>
                                    <p className={styles.text}><span>Производитель:</span> {item.manufacturer}, {item.countryOrigin}</p>
                                </div>
                                <div className={styles.container}>
                                    <p className={gStyles.textExtraBig}>{item.price} $</p>
                                    <p className={gStyles.textExtraBig}>x{item.count}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.body}>
                        <p className={`${styles.price} ${gStyles.textExtraBig}`}><span>Товаров на сумму:</span> <p>{price} $</p></p>
                        {deliveryMethod === 'Доставка курьером' &&
                            <p className={`${styles.price} ${gStyles.textExtraBig}`}><span>Доставка:</span> <p>180 $</p></p>}
                    </div>
                    <p className={`${styles.totalPrice} ${styles.price}`}><span>Итого к оплате:</span> <p>{deliveryMethod === "Самовывоз" ? price : price + 180} $</p></p>
                </div>
                {footer()}
            </div>
        </section>
    );
}
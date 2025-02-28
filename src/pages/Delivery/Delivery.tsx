import styles from './styles.module.scss';
import gStyles from '../../styles/styles.module.scss';
import Navigate from '../../components/Navigate/Navigate';
import { DELIVERY } from '../../constants/product';

export default function Delivery(): JSX.Element {
    return (
        <main className={styles.delivery}>
            <div className={gStyles.container}>
                <Navigate className={styles.navigate} links={[{ name: "Доставка", to: "" }]} />
                <div className={`${styles.content} ${gStyles.textExtraBig}`}>
                    <h2 className={`${gStyles.textExtraLarge} ${styles.title}`}>Информация о доставке</h2>
                    <p className={styles.aboutDelivery}>Заказы, оформленные до 15.00, будут доставлены на следующий день.</p>
                    <p className={styles.aboutDelivery}>Заказы, оформленные после 15.00, будут доставлены через день.</p>
                    <p className={styles.explainDelivery}>Обратите внимание: при наличии в заказе товаров со статусом "под заказ" дата доставки может измениться на срок поставки товара под заказ.</p>
                    <div className={styles.weightDelivery}>
                        <div>
                            <span>Вес заказа до 2 кг</span>
                            <span>Вес заказа свыше 2 кг</span>
                        </div>
                        <div>
                            <span>{DELIVERY.priceUpToTwoKg} грн.</span>
                            <span>{DELIVERY.priceOverTwoKg} грн.</span>
                        </div>
                        <div>
                            <span>9:00 - 21:00</span>
                            <span>9:00 - 21:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
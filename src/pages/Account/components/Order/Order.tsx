
import styles from './style.module.scss';
import gStyles from '../../../../styles/styles.module.css';
import { IOrder, IUser } from '../../../../interface/interface';
import OrderItem from './components/OrderItem/OrderItem';

interface IProps {
    dataUser: IUser;
}

const ORDER: IOrder[] = [
    {
        number: 11111,
        date: "16.08.2021",
        count: 1,
        state: "Новый",
        price: 1549,
        deliveryPrice: 90,
        delivery: "Самовывоз",
        address: "г. Тамбов, ул. Советская 22",
        additionalInfo: [
            {
                name: "Дона пор 1,5г N20 (Меда)",
                count: 12,
                manufacturer: "unknown",
                originalCountery: "unknown",
            }
        ]
    }
];

const SWITCH = ["Все", "Новые", "Текущие", "Выполненные"];

export default function Order(props: IProps): JSX.Element {

    const { dataUser } = props;

    function handleChangeShow(nameSwitch: string): void {

    }

    return (
        <section className={styles.wrapper}>
            <div className={gStyles.container}>
                <ul className={styles.switchList}>
                    {SWITCH.map((item, index) => (
                        <li className={gStyles.textBig} onClick={() => handleChangeShow(item)} key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
                <ul className={styles.table}>
                    <li className={gStyles.textBig}>
                        № Заказа
                    </li>
                    <li className={gStyles.textBig}>
                        Дата
                    </li>
                    <li className={gStyles.textBig}>
                        Количество
                    </li>
                    <li className={gStyles.textBig}>
                        Статус заказа
                    </li>
                    <li className={gStyles.textBig}>
                        Общая чтоимость
                    </li>
                </ul>
                <ul className={styles.listOrder}>
                    {ORDER.map((item, index) => (
                        <OrderItem key={index} item={item} />
                    ))}
                </ul>
            </div>
        </section>
    );
}
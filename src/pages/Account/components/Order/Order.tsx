
import styles from './style.module.scss';
import gStyles from '../../../../styles/styles.module.css';
import { IUser } from '../../../../interface/interface';
import OrderItem from './components/OrderItem/OrderItem';
import { useState } from 'react';

interface IProps {
    dataUser: IUser;
}

const SWITCH = ["Все", "Новые", "Текущие", "Выполненные"];

export default function Order(props: IProps): JSX.Element {

    const { dataUser } = props;

    const [stateSwitch, setStateSwitch] = useState<string>(SWITCH[0]);

    const orderProducts = dataUser.orders;

    function handleChangeShow(nameSwitch: string): void {
        setStateSwitch(nameSwitch);
    }

    return (
        <section className={styles.wrapper}>
            <div className={gStyles.container}>
                <ul className={styles.switchList}>
                    {SWITCH.map((item, index) => (
                        <li className={`${gStyles.textBig} ${stateSwitch === item ? styles.activeSwitch : ""}`} onClick={() => handleChangeShow(item)} key={index}>
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
                    {orderProducts &&
                        orderProducts.map((item, index) => (
                            <OrderItem key={index} item={item} />
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}
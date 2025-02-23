
import styles from './style.module.scss';
import gStyles from '../../../../styles/styles.module.css';
import { IUser } from '../../../../interface/interface';
import OrderItem from './components/OrderItem/OrderItem';
import { useState } from 'react';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { filterOrder } from '../../../../features/user/filters';
import { TSwitch } from './type';
interface IProps {
    nameSection: string;
}

const SWITCH: TSwitch[] = ["Все", "Новые", "Текущие", "Выполненные"];

export default function Order(props: IProps): JSX.Element {

    const { nameSection } = props;

    const [stateSwitch, setStateSwitch] = useState<TSwitch>(SWITCH[0]);

    const orderProducts = useAppSelector(filterOrder(stateSwitch));

    function handleChangeShow(nameSwitch: TSwitch): void {
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
                            <OrderItem nameSection={nameSection} key={index} index={index} item={item} />
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}
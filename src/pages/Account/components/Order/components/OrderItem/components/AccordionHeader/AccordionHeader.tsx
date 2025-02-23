
import styles from './styles.module.scss';
import pStyles from '../../styles.module.scss';
import gStyles from '../../../../../../../../styles/styles.module.css';
import Arrow from '../../../../../../../../assets/images/global/arrowAccordion.svg?react';
import { TStateOrder } from '../../../../../../../../interface/interface';

interface IProps {
    number: number;
    date: string;
    count: number;
    state: TStateOrder;
    price: number;
}

export default function AccordionHeader(props: IProps): JSX.Element {

    const { date, number, count, state, price } = props;

    return (
        <div className={pStyles.header}>
            <Arrow className={pStyles.icon} />
            <p className={`${styles.number} ${gStyles.textLarge}`}>№{number}</p>
            <p className={`${styles.date} ${gStyles.textBig}`}>{date}</p>
            <p className={`${styles.count} ${gStyles.textBig}`}>{count} шт</p>
            <p className={`${styles.state} ${gStyles.textBig} ${state === "Отменен" ? styles.red : state === 'Доставлен' ? styles.green : ""}`}>{state}</p>
            <p className={`${styles.price} ${gStyles.textExtraLarge}`}>{price} $</p>
        </div>
    );
}
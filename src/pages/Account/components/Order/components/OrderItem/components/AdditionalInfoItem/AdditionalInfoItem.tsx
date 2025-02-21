
import styles from './styles.module.scss';
import gStyles from '../../../../../../../../styles/styles.module.css';
import { IAdditionalInfoOrder } from '../../../../../../../../interface/interface';

interface IProps {
    additionalInfoOrder: IAdditionalInfoOrder[];
}

export default function AdditionalInfoItem(props: IProps): JSX.Element {

    const { additionalInfoOrder } = props;

    return (
        <>
            {additionalInfoOrder.map((item, index) => (
                <li className={`${styles.textBig} ${styles.item}`} key={index}>
                    <p className={gStyles.textBig}>{item.name}</p>
                    <p className={gStyles.textBig}><span>Количество:</span> {item.count} шт</p>
                    <p className={gStyles.textBig}>{item.manufacturer} {item.countryOrigin}</p>
                </li>
            ))}
        </>
    );
}
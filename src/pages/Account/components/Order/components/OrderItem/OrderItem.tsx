
import styles from './styles.module.scss';
import gStyles from '../../../../../../styles/styles.module.css';
import { IOrder } from '../../../../../../interface/interface';
import Accordion from '../../../../../../components/ui/Accordion/Accordion';
import Button from '../../../../../../components/ui/Button/Button';
import AdditionalInfoItem from './components/AdditionalInfoItem/AdditionalInfoItem';
import AccordionHeader from './components/AccordionHeader/AccordionHeader';

interface IProps {
    item: IOrder;
}

export default function OrderItem(props: IProps): JSX.Element {

    const { item } = props;

    return (
        <li>
            <Accordion
                classActive={styles.accordionActive}
                className={styles.accordion}
                header={<AccordionHeader
                    number={item.number}
                    count={item.count}
                    state={item.state}
                    price={item.price}
                    date={item.date}
                />}>
                <div className={styles.wrapperProduct}>
                    <div className={styles.headerProduct}>
                        <ul className={styles.listProduct}>
                            <li className={`${styles.extraInfo} ${gStyles.textBig}`}>Подробная информация</li>
                            <AdditionalInfoItem additionalInfoOrder={item.additionalInfo} />
                        </ul>
                        <Button className={`${styles.buttonCancel} ${gStyles.textBig}`} title='Отменить заказ' />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.bodyLocal}>
                            <p className={`${styles.textBold} ${gStyles.textExtraBig}`}><span>Доставка:</span> {item.delivery}</p>
                            <p className={`${styles.textBold} ${gStyles.textExtraBig}`}><span>Адрес:</span> {item.address}</p>
                        </div>
                        <p className={`${gStyles.textLarge} ${styles.textBold} ${styles.deliveryPrice}`}><span>Доставка:</span>{item.deliveryPrice} $</p>
                        <p className={`${gStyles.textLarge} ${styles.textBold} ${styles.totalPrice}`}><span>Итог:</span> {item.price} $</p>
                        <Button className={`${styles.buttonComment} ${gStyles.textBig}`} title='Оставить отзыв к заказу' />
                    </div>
                </div>
            </Accordion>
        </li>

    );
}
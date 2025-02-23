
import styles from './styles.module.scss';
import gStyles from '../../../../../../styles/styles.module.css';
import { IOrder, IUser } from '../../../../../../interface/interface';
import Accordion from '../../../../../../components/ui/Accordion/Accordion';
import Button from '../../../../../../components/ui/Button/Button';
import AdditionalInfoItem from './components/AdditionalInfoItem/AdditionalInfoItem';
import AccordionHeader from './components/AccordionHeader/AccordionHeader';
import { useAppSelector } from '../../../../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../../../../hooks/useAppDispatch';
import { callLocalStore } from '../../../../../../servers/callLocalStore';
import { LoginUser } from '../../../../../../features/user/user';
import { Link } from 'react-router-dom';
import { PATH_ACCOUNT } from '../../../../../../routes/routes';

interface IProps {
    item: IOrder;
    index: number;
    nameSection: string;
}

export default function OrderItem(props: IProps): JSX.Element {

    const { item, index, nameSection } = props;

    const dataUser = useAppSelector((state) => state.user.user);
    const dispatch = useAppDispatch();

    function handleChangeStateOrder() {
        const dataUserCopy = JSON.parse(JSON.stringify(dataUser));
        dataUserCopy.orders[index].state = 'Отменен';
        const newDataUser = callLocalStore<IUser>('user', dataUserCopy);
        dispatch(LoginUser(newDataUser));
    }

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
                        <Button onClick={handleChangeStateOrder} className={`${styles.buttonCancel} ${gStyles.textBig}`} title='Отменить заказ' />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.bodyLocal}>
                            <p className={`${styles.textBold} ${gStyles.textExtraBig}`}><span>Доставка:</span> {item.delivery}</p>
                            <p className={`${styles.textBold} ${gStyles.textExtraBig}`}><span>Адрес:</span> {item.address}</p>
                        </div>
                        <p className={`${gStyles.textLarge} ${styles.textBold} ${styles.deliveryPrice}`}><span>Доставка:</span>{item.deliveryPrice} $</p>
                        <p className={`${gStyles.textLarge} ${styles.textBold} ${styles.totalPrice}`}><span>Итог:</span> {item.price} $</p>
                        <Link to={`${PATH_ACCOUNT}/${nameSection}`} className={`${styles.buttonComment} ${gStyles.textBig}`}>Оставить отзыв</Link>
                    </div>
                </div>
            </Accordion>
        </li>

    );
}
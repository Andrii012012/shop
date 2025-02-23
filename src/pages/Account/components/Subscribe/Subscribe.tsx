
import styles from './style.module.scss';
import gStyles from '../../../../styles/styles.module.css';
import Checkbox from '../../../../components/ui/Checkbox/Checkbox';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { INotification, IUser } from '../../../../interface/interface';
import { callLocalStore } from '../../../../servers/callLocalStore';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { LoginUser } from '../../../../features/user/user';

export default function Subscribe(): JSX.Element {

    const dataUser = useAppSelector((state) => state.user.user);

    const dispatch = useAppDispatch();

    function handleChangeNotification(key: keyof INotification): void {
        const dataUserCopy: IUser = JSON.parse(JSON.stringify(dataUser));
        dataUserCopy.notification[key] = !dataUserCopy.notification[key];
        const newDataUser = callLocalStore('user', dataUserCopy);
        dispatch(LoginUser(newDataUser));
    }

    if (dataUser) {
        return (
            <section className={styles.wrapper}>
                <div className={gStyles.container}>
                    <h2 className={`${styles.title} ${gStyles.textExtraLarge}`}>Отметьте уведомления,
                        которые вы хотите получать:</h2>
                    <ul className={styles.list}>
                        <li>
                            <h2 className={gStyles.textLarge}>Уведомление</h2>
                            <p>О готовности заказов</p>
                            <p>О распродажах, акциях, скидках</p>
                        </li>
                        <li>
                            <h2 className={gStyles.textLarge}>SMS</h2>
                            <Checkbox
                                onClick={() => handleChangeNotification("isOrderSMS")}
                                className={`${styles.checkbox}`}
                                valueCheckbox={dataUser.notification.isOrderSMS}
                            />
                            <Checkbox
                                onClick={() => handleChangeNotification("isOrderEmail")}
                                className={`${styles.checkbox}`}
                                valueCheckbox={dataUser.notification.isOrderEmail}
                            />
                        </li>
                        <li>
                            <h2 className={gStyles.textLarge}>E-mail</h2>
                            <Checkbox
                                onClick={() => handleChangeNotification("isDiscountSMS")}
                                className={`${styles.checkbox}`}
                                valueCheckbox={dataUser.notification.isDiscountSMS}
                            />
                            <Checkbox
                                onClick={() => handleChangeNotification("isDiscountEmail")}
                                className={`${styles.checkbox}`}
                                valueCheckbox={dataUser.notification.isDiscountEmail}
                            />
                        </li>
                    </ul>
                </div>
            </section>
        );
    } return <></>;
}
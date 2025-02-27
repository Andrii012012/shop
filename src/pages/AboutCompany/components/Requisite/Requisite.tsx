import styles from './styles.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import Navigate from '../../../../components/Navigate/Navigate';
import { Link } from 'react-router-dom';

interface IProps { }

export default function Requisite(props: IProps): JSX.Element {

    const { } = props;

    return (
        <section className={styles.requisite}>
            <div className={gStyles.container}>
                <Navigate className={styles.navigate} links={[{ name: 'Реквизиты', to: "" }]} />
                <div className={styles.content}>
                    <h2 className={`${styles.title} ${gStyles.textExtraLarge}`}>Аптекарьский магазинъ</h2>
                    <div className={styles.wrapper}>
                        <div className={styles.requisiteSection}>
                            <h3 className={styles.subtitle}>Реквизиты:</h3>
                            <p className={styles.textDetail}><span>ОГРН:</span> 1026801156910</p>
                            <p className={`${styles.textDetail} ${styles.number}`}><span>ИНН:</span> 6831015529</p>
                            <p className={styles.record}>Номер записи в реестре лицензий на осуществление фармацевтической деятельности:</p>
                            <Link to='' className={styles.linkLicenses}>Показать лицензии</Link>
                            <p className={styles.textDetail}><span>Время работы:</span> ежедневно с 8:00 до 22:00</p>
                            <p className={styles.textDetail}><span>Адрес:</span> г. Тамбов, ул. Советска 22</p>
                            <p className={styles.textDetail}><span>Телефон для справок:</span> +380 93 845 95 90</p>
                            <p className={styles.textDetail}><span>Электронная почта:</span> aptek_magazin@gmail.com</p>
                        </div>
                        <div className={styles.orderSection}>
                            <h3 className={styles.subtitle}>Информация о службе заказа лекарственных препаратов:</h3>
                            <div className={styles.staff}>
                                <h3>Менеджер:</h3>
                                <p>Иванова Людмила Ивановна, +7 999 000 00 00</p>
                            </div>
                            <div className={styles.staff}>
                                <h3>Доставка:</h3>
                                <p>Иванов Иван Иванович, +7 999 000 00 01</p>
                            </div>
                            <h2 className={styles.titleSection}>Территориальный орган Росздравнадзора по Тамбовской области:</h2>
                            <div className={styles.aboutWork}>
                                <div className={styles.work}>
                                    <h2>Время работы:</h2>
                                    <p>пн - чт: 8:30 - 17:30</p>
                                    <p>пт: 8:30 - 16:15</p>
                                    <p>перерыв 12:30 - 13:15</p>
                                    <p>Сб - Вс: выходные дни</p>
                                </div>
                                <div className={styles.hotline}>
                                    <h3>Горячая линия:</h3>
                                    <p>8-4752-63-32-14</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
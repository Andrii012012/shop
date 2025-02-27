import styles from './styles.module.scss';
import gStyles from '../../styles/styles.module.scss';
import Navigate from '../../components/Navigate/Navigate';
import Visa from '../../assets/images/global/visa.svg?react';
import MasterCard from '../../assets/images/global/mastercard.svg?react';
import MaestroCard from '../../assets/images/global/maestro.svg?react';

export default function PaymentBooking(): JSX.Element {
    return (
        <main className={styles.delivery}>
            <div className={gStyles.container}>
                <Navigate className={styles.navigate} links={[{ name: "Оплата и бронирование", to: "" }]} />
                <div className={styles.wrapper}>
                    <section className={`${styles.body} ${styles.bodyOnlineCard}`}>
                        <h2 className={`${styles.title} ${gStyles.textExtraLarge}`}>Оплата оналайн по карте</h2>
                        <p className={gStyles.textExtraBig}>Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены на платёжный шлюз ПАО СБЕРБАНК. Соединение с платёжным шлюзом и передача информации осуществляется в защищённом режиме с использованием протокола шифрования SSL. В случае если Ваш банк поддерживает технологию безопасного проведения интернет-платежей Verified By Visa, MasterCard SecureCode, MIR Accept, J-Secure, для проведения платежа также может потребоваться ввод специального пароля.
                        </p>
                        <p className={gStyles.textExtraBig}>Настоящий сайт поддерживает 256-битное шифрование. Конфиденциальность сообщаемой персональной информации обеспечивается ПАО СБЕРБАНК. Введённая информация не будет предоставлена третьим лицам за исключением случаев, предусмотренных законодательством РФ. Проведение платежей по банковским картам осуществляется в строгом соответствии с требованиями платёжных систем МИР, Visa Int., MasterCard Europe Sprl, JCB.
                        </p>
                        <p className={gStyles.textExtraBig}>
                            В случае отмены заказа, возврат средств на банковский счет обычно происходит в течение 2−3 рабочих дней, но иногда возврат может идти до 30 дней. Срок зависит от банка, который выдал вашу банковскую карту
                        </p>
                        <div className={styles.bodyCard}>
                            <Visa />
                            <MasterCard />
                            <MaestroCard />
                        </div>
                    </section>
                    <section className={`${styles.body} ${styles.bodyCash}`}>
                        <h2 className={`${styles.title} ${gStyles.textExtraLarge}`}>Наличный расчет и оплата при получении</h2>
                        <p className={gStyles.textExtraBig}>Наличный расчет возможен при курьерской доставке, а также в пункте самовывоза. Оплата заказа и доставки осуществляется непосредственно курьеру или кассиру в аптеке при получении заказа, вместе с заказом получаете все необходимые документы и кассовый чек.</p>
                        <p className={gStyles.textExtraBig}>
                            Чтобы оплатить заказ наличными при получении, при оформлении заказа выберите способ оплаты «Оплата при получении»
                        </p>
                    </section>
                    <section className={`${styles.body} ${styles.bodyBooking}`}>
                        <h2 className={`${styles.title} ${gStyles.textExtraLarge}`}>Бронирование товаров</h2>
                        <p className={gStyles.textExtraBig}>
                            В случае, если необходимого товара не оказалось в наличии вы все равно можете добавить его в корзину и забронировать. Как только товар поступит в аптеку, вы получите уведомление, а ваш заказ будет доступен к заказу
                        </p>
                        <p className={gStyles.textExtraBig}>
                            Бронирование так же осуществляется по средствам оформления заказа. Оформленный заказ будет собран в кратчайшие сроки и доступен к выдаче в течении 7 дней
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
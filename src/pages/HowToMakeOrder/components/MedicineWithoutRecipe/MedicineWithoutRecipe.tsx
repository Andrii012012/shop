import styles from './styles.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import image1 from '../../../../assets/images/howToMakeOrder/imageMedicineWithoutRecipe1.png';
import image2 from '../../../../assets/images/howToMakeOrder/imageMedicineRecipe2.png';
import image3 from '../../../../assets/images/howToMakeOrder/imageMedicineWithoutRecipe3.png';
import image4 from '../../../../assets/images/howToMakeOrder/imageMedicineWithoutRecipe4.png';
import image5 from '../../../../assets/images/howToMakeOrder/imageMedicineWithoutRecipe5.png';
import image6 from '../../../../assets/images/howToMakeOrder/imageMedicineWithoutRecipe6.png';
import image7 from '../../../../assets/images/howToMakeOrder/imageMedicineWithoutRecipe7.png';

export default function MedicineWithoutRecipe(): JSX.Element {
    return (
        <section className={styles.wrapper}>
            <div className={gStyles.container}>
                <div className={`${styles.sectionStepFirst} ${styles.section}`}>
                    <p className={`${gStyles.textExtraBig}`}>
                        На странице лекарственного препарата Вы можете ознакомиться с различной информацией о данном препарате (инструкция по применению, состав препарата, применение препарата,  условия хранения, условия отпуска из аптек и тд.). Данная информация основана на официальной инструкции по применению препарата, утвержденной компанией-производителем.
                    </p>
                    <p className={`${gStyles.textExtraBig}`}>
                        Для оформления заказа Вам необходимо выбрать форму выпуска препарата, нужную дозировку и объем фасовки, а также необходимое количество лекарственного препарата. Затем нажмите кнопку «В корзину».
                    </p>
                    <div className={styles.image}>
                        <img src={image1} alt="" />
                    </div>
                </div>
                <div className={`${styles.sectionStepSecond} ${styles.section}`}>
                    <p className={`${gStyles.textExtraBig}`}>
                        После нажатия на кнопку "Положить в корзину" выбранное количество будет добавлено в Корзину.
                        Изменения появляются в блоке в правом верхнем углу экрана. Вы можете продолжать добавлять товары в корзину, а для оформления заказа нужно нажать кнопку "Корзина" и перейти в корзину
                    </p>
                    <div className={styles.image}>
                        <img src={image2} alt="" />
                    </div>
                </div>
                <div className={`${styles.sectionStepThird} ${styles.section}`}>
                    <h2 className={gStyles.textExtraLarge}>Оформление заказа</h2>
                    <p className={`${gStyles.textExtraBig}`}>
                        В корзине вы можете корректировать свой заказ: изменять кол-во товаров, добавлять или удалять товары. При заказе онлайн сразу доступна скидка 2%. В том числе вы можете использовать промокод для дополнительной скидки. Ниже вам нужно выбрать способ оплаты. Чтобы продолжить, нажмите кнопку "Далее”. Чтобы вернуться к покупкам нажмите “Продолжить покупки”
                    </p>
                    <div className={styles.image}>
                        <img src={image3} alt="" />
                    </div>
                </div>
                <div className={`${styles.sectionStepFourth} ${styles.section}`}>
                    <p className={gStyles.textExtraBig}>Выберите способ получения товара. Доступна “Доставка” и “Самовывоз”. Заполните необходимые поля в соответсвии со способом получения товара. В данном разделе так же отображается стоимость доставки.</p>
                    <strong className={gStyles.textExtraBig}>Внимание: препараты, которые отпускаются по рецепту, не могут быть доставлены курьером!</strong>
                    <p className={`${gStyles.textExtraBig}`}>
                        Для продолжения нажмите “Далее - Подтверждение и оплата”
                    </p>
                    <div className={styles.bodyImage}>
                        <div className={styles.image}>
                            <img src={image4} alt="" />
                        </div>
                        <div className={styles.image}>
                            <img src={image5} alt="" />
                        </div>
                    </div>
                </div>
                <div className={`${styles.sectionStepFiveth} ${styles.section}`}>
                    <p className={`${gStyles.textExtraBig}`}>
                        Далее будет показан состав вашего заказа, способ доставки, примерные сроки доставки или адрес самовывоза. В зависимости от выбора оплаты -  будут доступны кнопки “Оплатить” или “Подтвердить заказ”. Чтобы закончить оформление необходимо согласиться с <span>политикой конфедициальности</span> и нажать кнопку “Оплатить”, если выбирали онлайн оплату или “Подтвердить заказ”, если выбирали оплату при получении
                    </p>
                    <div className={styles.image}>
                        <img src={image6} alt="" />
                    </div>
                </div>
                <div className={`${styles.sectionStepSixth} ${styles.section}`}>
                    <p className={`${gStyles.textExtraBig}`}>
                    После завершения оформления вы получите соответствующее уведомление, в котором будут продублировапны еще раз данные о заказе, а также указан номер вашего заказа 
                    </p>
                    <div className={styles.image}>
                        <img src={image7} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
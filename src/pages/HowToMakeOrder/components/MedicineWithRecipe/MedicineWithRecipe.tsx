import styles from './styles.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import image1 from '../../../../assets/images/howToMakeOrder/imageMedicineWithRecipe1.png'
import image2 from '../../../../assets/images/howToMakeOrder/imageMedicineRecipe2.png';
import image3 from '../../../../assets/images/howToMakeOrder/imageMedicineWithRecipe2.png'
import image4 from '../../../../assets/images/howToMakeOrder/imageMedicineWithRecipe3.png'
import image5 from '../../../../assets/images/howToMakeOrder/imageMedicineWithRecipe4.png'
import image6 from '../../../../assets/images/howToMakeOrder/imageMedicineWithRecipe5.png'


export default function MedicineWithRecipe(): JSX.Element {
    return (
        <section className={styles.wrapper}>
            <div className={gStyles.container}>
                <div className={`${styles.sectionStepFirst} ${styles.section}`}>
                    <p className={`${gStyles.textExtraBig}`}>
                        На странице товара вы можете ознакомиться с техническими характеристиками, наличием в аптеках и другой полезной информацией по продукту.
                        Для заказа необходимо выбрать форму, дозировку и фасовку, а так же количество товара и добавить их в корзину. Нажмите кнопку "Положить в корзину". На странице товара будет указано, что данный препарат является рецептуарный
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
                        После нажатия на кнопку "Положить в корзину" выбранное количество будет добавлено в Корзину.
                        Изменения появляются в блоке в правом верхнем углу экрана. Вы можете продолжать добавлять товары в корзину, а для оформления заказа нужно нажать кнопку "Корзина" и перейти в корзину
                    </p>
                    <div className={styles.image}>
                        <img src={image3} alt="" />
                    </div>
                </div>
                <div className={`${styles.sectionStepThird} ${styles.section}`}>
                    <p className={`${gStyles.textExtraBig}`}>
                        В корзине вы можете корректировать свой заказ: изменять кол-во товаров, добавлять или удалять товары. Так же будет указана информация о том, что препарат рецептуарный. При заказе онлайн сразу доступна скидка 2%. В том числе вы можете использовать промокод для дополнительной скидки. Ниже вам нужно выбрать способ оплаты. Чтобы продолжить, нажмите кнопку "Далее - Выбрать способ получения".
                    </p>
                    <div className={styles.image}>
                        <img src={image3} alt="" />
                    </div>
                </div>
                <div className={`${styles.sectionStepFourth} ${styles.section}`}>
                    <p className={gStyles.textExtraBig}>Выберите способ получения товара. Доступна “Доставка” и “Самовывоз”. Заполните необходимые поля в соответсвии со способом получения товара. В данном разделе так же отображается стоимость доставки.</p>
                    <strong className={`${gStyles.textExtraBig}`}>Внимание: препараты, которые отпускаются по рецепту, не могут быть доставлены курьером!</strong>
                    <p className={`${gStyles.textExtraBig}`}>
                        Для продолжения нажмите “Далее - Подтверждение и оплата”
                    </p>
                    <div className={styles.image}>
                        <img src={image4} alt="" />
                    </div>
                </div>
                <div className={`${styles.sectionStepFiveth} ${styles.section}`}>
                    <p className={`${gStyles.textExtraBig}`}>
                        Далее будет показан состав вашего заказа, способ доставки, примерные сроки доставки или адрес самовывоза. В зависимости от выбора оплаты -  будут доступны кнопки “Оплатить” или “Подтвердить заказ”. Чтобы закончить оформление необходимо согласиться с <span>политикой конфедициальности</span> и нажать кнопку “Оплатить”, если выбирали онлайн оплату или “Подтвердить заказ”, если выбирали оплату при получении или препарат который отпускается по рецепту
                    </p>
                    <div className={styles.image}>
                        <img src={image5} alt="" />
                    </div>
                </div>
                <div className={`${styles.sectionStepSixth} ${styles.section}`}>
                    <p className={`${gStyles.textExtraBig}`}>
                        После завершения оформления вы получите соответствующее уведомление, в котором будут продублировапны еще раз данные о заказе, а также указан номер вашего заказа
                    </p>
                    <div className={styles.image}>
                        <img src={image6} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
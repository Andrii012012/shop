import styles from './style.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import Button from '../../../../components/ui/Button/Button';
import Checkbox from '../../../../components/ui/Checkbox/Checkbox';
import { Link } from 'react-router-dom';
import { ISelectedProduct, IState, TPayment } from '../../type';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { clearProducts } from '../../../../features/basket/basket';
import { PATH_BASKET, PATH_HOME } from '../../../../routes/routes';

interface IProps {
    selectedProducts: ISelectedProduct[];
    discount: number;
    payment: TPayment;
    setState: React.Dispatch<React.SetStateAction<IState>>;
    SWITCH_CONTENT: string[];
}

export default function InfoProducts(props: IProps): JSX.Element {

    const { selectedProducts, discount, setState, payment, SWITCH_CONTENT } = props;

    const dispatch = useAppDispatch();

    function handleChangePayment(value: TPayment): void {
        setState((prevState) => ({ ...prevState, payment: value }))
    }

    function handleClearBasket(): void {
        dispatch(clearProducts());
    }

    function calcPriceProducts(): number {
        return selectedProducts.reduce((acc, item) => {
            return acc += item.price;
        }, 0);
    }

    function calcPriceWithDiscount(): number {
        const result = selectedProducts.reduce((acc, item) => {
            return acc += item.price;
        }, 0);

        return result - (result * Number(`0.0${discount}`));
    }

    return (
        <div className={styles.infoProducts}>
            <div className={styles.wrapper}>
                <Button onClick={handleClearBasket} classNameWrapper={styles.wrapperClearButton} className={`${styles.clearButton} ${gStyles.textExtraBig}`} title={'Очистить корзину'} />
                <p className={`${styles.text} ${gStyles.textExtraBig}`}><span>Итого:</span>{calcPriceProducts()} $</p>
                <p className={`${styles.text} ${gStyles.textExtraBig}`}><span>Скидка:</span>{discount}%</p>
                <form className={styles.form}>
                    <div className={styles.wrapperForm}>
                        <p className={`${styles.text} ${gStyles.textExtraBig}`}><span>Итого к оплате:</span>{calcPriceWithDiscount()} $</p>
                        <input className={`${styles.input} ${gStyles.textMedium}`} name='promo' placeholder='Введите промокод' />
                    </div>
                </form>
                <div className={styles.abilityPayment}>
                    <h3 className={gStyles.textExtraBig}>Способ оплаты:</h3>
                    <div onClick={() => handleChangePayment('Оплата онлайн')} className={styles.bodyCheckbox}>
                        <Checkbox className={styles.checkbox} value={payment === "Оплата онлайн" ? true : false} />
                        <p>Оплата онлайн</p>
                    </div>
                    <div onClick={() => handleChangePayment('Оплата при получении')} className={styles.bodyCheckbox}>
                        <Checkbox className={styles.checkbox} value={payment === "Оплата при получении" ? true : false} />
                        <p>Оплата при получении</p>
                    </div>
                </div>
            </div>
            <div className={styles.bodyButtons}>
                <Link to={PATH_HOME} className={`${styles.continueBuyingButton} ${gStyles.textBig}`}>Продолжить покупки</Link>
                <Link to={selectedProducts.length ? `${PATH_BASKET}/${SWITCH_CONTENT[1]}` : ""} className={`${styles.continueButton} ${gStyles.textBig}`} >Далее</Link>
            </div>
        </div>
    );
}
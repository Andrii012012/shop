import styles from './style.module.scss';
import gStyles from "../../../../styles/styles.module.scss";
import { IBasketProduct } from '../../../../interface/interface';
import { TDeliveryMethod, TPayment } from '../../type';
import PanelProduct from '../PanelProduct/PanelProduct';
import Checkbox from '../../../../components/ui/Checkbox/Checkbox';
import Button from '../../../../components/ui/Button/Button';
import { useState } from 'react';
import Portal from '../../../../containers/Portal/Portal';
import Purchase from './components/Purchase/Purchase';
import Order from './components/Order/Order';
import Form from './components/Form/Form';

interface IProps {
    address: { street: string, house: string };
    deliveryMethod: TDeliveryMethod;
    totalPrice: number;
    products: IBasketProduct[];
    payment: TPayment;
    isRecipeProduct: boolean;
    handleChangeField: (value: string, key: string) => void;
    deliveryPrice: number;
    clearSelectedProducts: () => void;
}

export default function Confirmation(props: IProps): JSX.Element {

    const { address, deliveryMethod, totalPrice, products, payment, isRecipeProduct, handleChangeField, deliveryPrice, clearSelectedProducts } = props;

    const [isFurth, setIsFurth] = useState<boolean>(false);

    const [isAgree, setIsAgree] = useState<boolean>(true);

    const [isOpenPortal, setIsOpenPortal] = useState<boolean>(false);

    function handleClosePortal(): void {
        setIsOpenPortal(false);
    }

    return (
        <section className={`${styles.confirmation}`}>
            <div className={gStyles.container}>
                <div className={styles.body}>
                    {!isRecipeProduct ? <Form handleChangeField={handleChangeField} setIsFurth={setIsFurth} />
                        : <Order payment={payment} products={products} deliveryMethod={deliveryMethod} address={address} />}
                    <PanelProduct
                        price={totalPrice}
                        className={styles.panel}
                        products={products}
                        deliveryMethod={deliveryMethod}
                        footer={() => {
                            return (
                                <div className={styles.wrapper}>
                                    <div onClick={() => setIsAgree(!isAgree)} className={styles.bodyCheckbox}>
                                        <Checkbox className={styles.checkbox} valueCheckbox={isAgree} />
                                        <p>Нажимая кнопку «Оплатить», Вы соглашаетесь с <span>политикой конфедицеальности</span></p>
                                    </div>
                                    <Button onClick={() => {
                                        if (isAgree) setIsOpenPortal(!isRecipeProduct ? isFurth : true);
                                    }} className={`${styles.buyButton} ${gStyles.textBig}`} title="Оплатить" />
                                </div>
                            );
                        }}
                    />
                </div>
            </div>
            <Portal setIsOpen={setIsOpenPortal} isOpen={isOpenPortal}><Purchase clearSelectedProducts={clearSelectedProducts} deliveryPrice={deliveryPrice} price={totalPrice} handleClosePortal={handleClosePortal} address={address} products={products} deliveryMethod={deliveryMethod} /></Portal>
        </section>
    );
}
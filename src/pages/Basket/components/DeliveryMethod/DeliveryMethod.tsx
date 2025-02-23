import styles from './style.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import { IBasketProduct } from '../../../../interface/interface';
import { IFields, IState, TDeliveryMethod } from '../../type';
import Button from '../../../../components/ui/Button/Button';
import { useState } from 'react';
import DeliveryCourier from './components/DeliveryCourier/DeliveryCourier';
import Pickup from '../Pickup/Pickup';
import PanelProduct from '../PanelProduct/PanelProduct';
import { Link } from 'react-router-dom';
import { PATH_BASKET } from '../../../../routes/routes';
import { BASKET_SECTIONS } from '../../../../constants/path';

interface IProps {
    products: IBasketProduct[];
    setState: React.Dispatch<React.SetStateAction<IState>>;
    state: IState;
    field: IFields;
    handleChangeField: (value: string, key: string) => void;
}

export default function DeliveryMethod(props: IProps): JSX.Element {

    const { products, state, setState, handleChangeField } = props;

    const [isFurth, setIsFurth] = useState<boolean>(false);

    function handleChangeDeliveryMethod(value: TDeliveryMethod): void {
        setState((prevState) => ({ ...prevState, deliveryMethod: value }));
    };

    return (
        <section className={styles.wrapper}>
            <div className={gStyles.container}>
                <div className={styles.body}>
                    <div className={styles.delivery}>
                        <div className={styles.header}>
                            <h3 className={gStyles.textLarge}>Способ получения:</h3>
                            <Button onClick={() => handleChangeDeliveryMethod("Доставка курьером")}
                                className={`${styles.deliveryButton} ${gStyles.textBig} ${state.deliveryMethod === "Доставка курьером" ? styles.activeDelivery : ""}`}
                                title="Доставка курьером" />
                            <Button onClick={() => handleChangeDeliveryMethod("Самовывоз")}
                                className={`${styles.deliveryButton} ${gStyles.textBig} ${state.deliveryMethod === "Самовывоз" ? styles.activeDelivery : ""}`}
                                title="Самовывоз" />
                        </div>
                        {state.deliveryMethod === "Доставка курьером" ? <DeliveryCourier setIsFurth={setIsFurth} handleChangeField={handleChangeField} /> : <Pickup setIsFurth={setIsFurth} handleChangeField={handleChangeField} />}
                    </div>
                    <PanelProduct
                        price={state.totalPrice}
                        className={styles.panel}
                        products={products}
                        isDelivery={true}
                        deliveryPrice={state.deliveryPrice}
                        deliveryMethod={state.deliveryMethod}
                        footer={() => {
                            return (
                                <div className={styles.body}>
                                    <Link to={`${PATH_BASKET}/${BASKET_SECTIONS.myBasket}`} className={`${styles.buttonReturn} ${gStyles.textBig}`}>Вернуться назад</Link>
                                    <Link to={isFurth ? `${PATH_BASKET}/${BASKET_SECTIONS.paymentConfirmation}` : ""} className={`${styles.buttonFurth} ${gStyles.textBig}`}>Далее</Link>
                                </div>
                            );
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
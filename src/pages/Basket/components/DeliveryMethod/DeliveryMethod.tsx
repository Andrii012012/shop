import styles from './style.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import { IBasketProduct } from '../../../../interface/interface';
import { IFields, IState, TDeliveryMethod } from '../../type';
import Button from '../../../../components/ui/Button/Button';
import { useState } from 'react';
import DeliveryCourier from './components/DeliveryCourier/DeliveryCourier';
import Pickup from './components/Pickup/Pickup';
import PanelProduct from '../PanelProduct/PanelProduct';
import { Link } from 'react-router-dom';
import { PATH_BASKET } from '../../../../routes/routes';

interface IProps {
    products: IBasketProduct[];
    setState: React.Dispatch<React.SetStateAction<IState>>;
    state: IState;
    field: IFields;
    setField: React.Dispatch<React.SetStateAction<IFields>>;
    SWITCH_CONTENT: string[];
}

export default function DeliveryMethod(props: IProps): JSX.Element {

    const { products, setState, state, setField, field, SWITCH_CONTENT } = props;

    const [deliveryMethod, setDeliveryMethod] = useState<TDeliveryMethod>("Доставка курьером");

    const [isFurth, setIsFurth] = useState<boolean>(false);

    function handleChangeField(value: string, key: string): void {
        setField((prevState) => {
            const newState = { ...prevState };
            newState[key] = value;
            return newState;
        });
    }

    return (
        <section className={styles.wrapper}>
            <div className={gStyles.container}>
                <div className={styles.body}>
                    <div className={styles.delivery}>
                        <div className={styles.header}>
                            <h3 className={gStyles.textLarge}>Способ получения:</h3>
                            <Button onClick={() => setDeliveryMethod("Доставка курьером")}
                                className={`${styles.deliveryButton} ${gStyles.textBig} ${deliveryMethod === "Доставка курьером" ? styles.activeDelivery : ""}`}
                                title="Доставка курьером" />
                            <Button onClick={() => setDeliveryMethod("Самовывоз")}
                                className={`${styles.deliveryButton} ${gStyles.textBig} ${deliveryMethod === "Самовывоз" ? styles.activeDelivery : ""}`}
                                title="Самовывоз" />
                        </div>
                        {deliveryMethod === "Доставка курьером" ? <DeliveryCourier setIsFurth={setIsFurth} handleChangeField={handleChangeField} /> : <Pickup setIsFurth={setIsFurth} handleChangeField={handleChangeField} />}
                    </div>
                    <PanelProduct
                        price={state.totalPrice}
                        className={styles.panel}
                        products={products}
                        deliveryMethod={deliveryMethod}
                        footer={() => {
                            console.log(isFurth);
                            return (
                                <div className={styles.body}>
                                    <Link to={`${PATH_BASKET}/${SWITCH_CONTENT[0]}`} className={`${styles.buttonReturn} ${gStyles.textBig}`}>Вернуться назад</Link>
                                    <Link to={isFurth ? `${PATH_BASKET}/${SWITCH_CONTENT[2]}` : ""} className={`${styles.buttonFurth} ${gStyles.textBig}`}>Далее</Link>
                                </div>
                            );
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
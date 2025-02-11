import styles from './style.module.scss';
import gStyles from '../../styles/styles.module.scss';
import Navigate from '../../components/Navigate/Navigate';
import { PATH_BASKET } from '../../routes/routes';
import SwitchContent from '../../components/SwitchContent/SwitchContent';
import { Route, Routes } from 'react-router-dom';
import MyBasket from './components/MyBasket/MyBasket';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useState } from 'react';
import { IState } from './type';

const SWITCH_CONTENT = ["Моя корзина", "Способ доставки", "Оплата и подтверждение"]

export default function Basket(): JSX.Element {

    const products = useAppSelector((state) => state.basket.basket);

    const [state, setState] = useState<IState>({
        selectedProducts: [],
    });

    return (
        <main className={styles.page}>
            <div className={gStyles.container}>
                <Navigate className={styles.navigate} links={[{
                    name: 'Корзина', to: PATH_BASKET
                }]} />
                <SwitchContent links={[{ name: SWITCH_CONTENT[0], to: `${PATH_BASKET}/${SWITCH_CONTENT[0]}` }, { name: SWITCH_CONTENT[1], to: `${PATH_BASKET}/${SWITCH_CONTENT[1]}` }, { name: SWITCH_CONTENT[2], to: `${PATH_BASKET}/${SWITCH_CONTENT[2]}` }]} />
            </div>
            <Routes>
                <Route path={SWITCH_CONTENT[0]} element={<MyBasket setState={setState} state={state} products={products}/>} />
                {/* <Route path={SWITCH_CONTENT[1]} element={ } />
                    <Route path={SWITCH_CONTENT[2]} element={ } /> */}
            </Routes>
        </main>
    );
}
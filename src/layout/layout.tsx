import { ReactNode } from "react";
import gStyles from '../styles/styles.module.scss';
import styles from './style.module.scss';
import Card from "../containers/Card/Card";

export function Layout({ children }: { children: ReactNode }): JSX.Element {
    return (
        <div className={gStyles.wrapper}>
            <main className={styles.page}>{children}</main>
            <Card
                isStock={false}
                name={'Вольтарен эмуногель 1%'}
                manufacturer={'NOVARTIS PHARMA'}
                volume={25}
                release={'гель'}
                price={732}
                isRecipe={false}
                isDelivery={false}
            />
        </div>
    )
}
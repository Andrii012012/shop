import { ReactNode } from "react";
import gStyles from '../styles/styles.module.scss';
import styles from './style.module.scss';
import Header from "../components/Header/Header";

export function Layout({ children }: { children: ReactNode }): JSX.Element {
    return (
        <div className={gStyles.wrapper}>
            <Header />
            {children}
        </div>
    )
}
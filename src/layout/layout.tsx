import { ReactNode } from "react";
import gStyles from '../styles/styles.module.scss';

export function Layout({ children }: { children: ReactNode }): JSX.Element {
    return (
        <div className={gStyles.wrapper}>
            {children}
        </div>
    )
}
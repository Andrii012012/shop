import styles from './style.module.scss';
import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface IProps {
    isOpen: boolean;
    children: ReactNode;
    className?: string;
}

export default function Portal(props: IProps): JSX.Element {

    const { isOpen, children, className = "" } = props;

    if (isOpen) {
        document.body.style.overflow = 'hidden';
        return createPortal(<div className={`${styles.modal} ${className}`}>{children}</div>, document.getElementById('portal')!);
    } else {
        document.body.style.overflow = 'auto';
        return <></>;
    }
}
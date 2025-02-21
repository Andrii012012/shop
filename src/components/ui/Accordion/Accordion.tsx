import { ReactNode, useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import gStyles from '../../../styles/styles.module.scss';

interface IProps {
    className?: string;
    children: ReactNode;
    header: ReactNode;
    classActive?: string;
}

export default function Accordion(props: IProps): JSX.Element {

    const { header = <></>, className = '', children, classActive = "" } = props;

    const [saveHeight, setSaveHeight] = useState<number>(0);

    const refAccordion = useRef<HTMLDivElement | null>(null);
    const refContent = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (refContent.current && refContent.current.getBoundingClientRect().height > 0) {
            setSaveHeight(refContent.current.getBoundingClientRect().height);
            refContent.current.style.maxHeight = '0px';
        }
    }, [refContent.current]);

    function handleOpenOptions(): void {
        if (refContent.current && refAccordion.current) {
            refAccordion.current.classList.toggle(!classActive.length ? styles.activeAccordion : classActive);

            if (refContent.current.getBoundingClientRect().height > 0) {
                refContent.current.style.maxHeight = `0px`;
            } else {
                refContent.current.style.maxHeight = `${saveHeight}px`;
            }

        }
    }

    return (
        <div ref={refAccordion} className={`${styles.accordion} ${className}`}>
            <div onClick={handleOpenOptions} className={styles.header}>
                {header}
            </div>
            <div className={styles.content} ref={refContent}>
                {children}
            </div>
        </div>
    );
}
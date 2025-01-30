import { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import Arrow from '../../../assets/images/home/iconArrowSelect.svg?react';

interface IProps {
    options: string[];
    firstOption?: number;
    className?: string;
}

export default function Select(props: IProps): JSX.Element {

    const { options, firstOption = null, className = '' } = props;

    const [selectedOption, setSelectedOption] = useState<string>(firstOption === null ? options[0] : options[firstOption]);
    const [saveHeight, setSaveHeight] = useState<number>(0);

    const refSelect = useRef<HTMLDivElement | null>(null);
    const refContent = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        if (refContent.current && refContent.current.getBoundingClientRect().height > 0) {
            setSaveHeight(refContent.current.getBoundingClientRect().height);
            refContent.current.style.maxHeight = '0px';
        }
    }, [refContent.current]);

    function handleOpenOptions(): void {
        if (refContent.current && refSelect.current) {
            refSelect.current.classList.toggle(styles.activeSelect);

            if (refContent.current.getBoundingClientRect().height > 0) {
                refContent.current.style.maxHeight = `0px`;
            } else {
                refContent.current.style.maxHeight = `${saveHeight}px`;
            }

        }
    }

    function handleSelectOption(index: number): void {
        if (refContent.current && refSelect.current) {
            setSelectedOption(options[index]);
            refSelect.current.classList.remove(styles.activeSelect);
            refContent.current.style.maxHeight = '0px';
        }
    }

    return (
        <div ref={refSelect} className={`${styles.select} ${className}`}>
            <div onClick={handleOpenOptions} className={styles.header}>
                <p>{selectedOption}</p>
                <Arrow className={styles.iconArrow} />
            </div>
            <ul className={styles.list} ref={refContent}>
                {options.map((item, index) => {
                    if (item !== selectedOption) {
                        return (
                            <li onClick={() => handleSelectOption(index)} key={item} className={styles.item}>{item}</li>
                        )
                    }
                })}
            </ul>
        </div>
    );
}
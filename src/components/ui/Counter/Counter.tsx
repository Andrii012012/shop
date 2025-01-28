import React from 'react';
import styles from './style.module.scss';
import gStyles from '../../../styles/styles.module.scss';

interface IProps {
    setValue: React.Dispatch<React.SetStateAction<number>>;
    value: number;
    className?: string;
}

export default function Counter(props: IProps): JSX.Element {

    const { setValue, value, className = '' } = props;

    function handleChangeCounter(type: 'minus' | 'plus'): void {
        if (type === 'minus' && value > 1) {
            setValue((prevState) => prevState - 1);
        }
        if (type === 'plus') {
            setValue((prevState) => prevState + 1);
        }
    }

    return (
        <div className={`${styles.counter} ${className}`}>
            <button className={`${gStyles.textBig} ${styles.button}`} onClick={() => handleChangeCounter('minus')}>-</button>
            <span className={`${gStyles.textBig} ${styles.value}`} >{value}</span>
            <button className={`${gStyles.textBig} ${styles.button}`} onClick={() => handleChangeCounter('plus')}>+</button>
        </div>
    );
}
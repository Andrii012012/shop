import { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import gStyles from '../../../styles/styles.module.scss';

interface IProps {
    min: number;
    max: number;
    onChange?: (value: number[]) => void;
    value: number[];
}

export default function RangeSlider(props: IProps): JSX.Element {

    const { min, max, onChange, value } = props;

    const [minState, setMinState] = useState<number>(value[0]);
    const [maxState, setMaxState] = useState<number>(value[1]);

    const refTrack = useRef<HTMLDivElement | null>(null);
    const refInputMin = useRef<HTMLInputElement | null>(null);
    const refInputMax = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (refTrack.current) {
            const leftValue = `${(minState - min) / (max - min) * 100}%`;
            const rightValue = `${(max - maxState) / (max - min) * 100}%`;
            refTrack.current.style.left = leftValue;
            refTrack.current.style.right = rightValue;
        }
    }, [min, max, minState, maxState]);

    function handleChangeMaxState(event: React.ChangeEvent<HTMLInputElement>) {
        const value = Number(event.target.value);

        if (value <= max) {
            setMaxState(value);
            onChange?.([minState, maxState]);
        }
    }


    function handleChangeMinState(event: React.ChangeEvent<HTMLInputElement>) {
        const value = Number(event.target.value);

        if (value >= min) {
            setMinState(value);
            onChange?.([minState, maxState]);
        }
    }

    return (
        <div className={styles.range}>
            <div className={styles.info}>
                <p className={gStyles.textBig}>{minState}</p>
                <p className={gStyles.textBig}>{maxState}</p>
            </div>
            <div className={styles.wrapper}>
                <div ref={refTrack} className={styles.track}></div>
                <input
                    type='range'
                    className={styles.inputRange}
                    min={min}
                    max={max}
                    ref={refInputMax}
                    name='max'
                    value={maxState}
                    onChange={(event) => handleChangeMaxState(event)}
                />
                <input
                    type='range'
                    className={styles.inputRange}
                    min={min}
                    max={max}
                    ref={refInputMin}
                    name='min'
                    value={minState}
                    onChange={(event) => handleChangeMinState(event)}
                />
            </div>
            <div className={styles.bodyMinMax}>
                <p className={gStyles.textMedium}>{min} грн</p>
                <p className={gStyles.textMedium}>{max} грн</p>
            </div>
        </div>
    )
}
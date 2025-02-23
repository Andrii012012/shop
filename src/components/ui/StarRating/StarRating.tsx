import styles from './style.module.scss';
import Star from '../../../assets/images/global/star.svg?react';

interface IProps {
    mark: number;
    countStars?: number;
    size?: number;
    colorActive?: string;
    colorInactive?: string;
    setState?: React.Dispatch<React.SetStateAction<number>>;
    className?: string; 
}

export default function StarRating(props: IProps): JSX.Element {

    const { mark, size = 15, colorActive = '#1E7637', colorInactive, countStars = 5, setState, className } = props;

    return (
        <div className={`${styles.starRating} ${className}`}>
            {Array.from(Array(countStars).keys()).map((item, index) => {
                if (item < mark) {
                    return <Star onClick={() => setState?.(index + 1)} key={item} style={{ width: size, height: size, fill: colorActive }} />
                } else {
                    return <Star onClick={() => setState?.(index + 1)} key={item} style={{ width: size, height: size, fill: colorInactive }} />
                }
            })}
        </div>
    );
}
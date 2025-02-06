import styles from './style.module.scss';
import Star from '../../../assets/images/global/star.svg?react';

interface IProps {
    mark: number;
    countStars?: number;
    size?: number;
    colorActive?: string;
    colorInactive?: string;
}

export default function StarRating(props: IProps): JSX.Element {

    const { mark, size = 15, colorActive = '#1E7637', colorInactive, countStars = 5 } = props;

    return (
        <div className={`${styles.starRating}`}>
            {Array.from(Array(countStars).keys()).map((item) => {
                if (item < mark) {
                    return <Star key={item} style={{ width: size, height: size, fill: colorActive }} />
                } else {
                    return <Star key={item} style={{ width: size, height: size, fill: colorInactive }} />
                }
            })}
        </div>
    );
}
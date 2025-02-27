import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import gStyles from '../../styles/styles.module.scss';
import newsImage from '../../assets/images/news/news1.png';

interface IProps {
    className?: string;
    title: string;
    image?: string | null;
    to?: string;
    description: string;
}

export default function ItemEvent(props: IProps): JSX.Element {

    const { title, to = "", description, className, image = null } = props;

    return (
        <li key={title} className={`${styles.item} ${className}`}>
            <div className={styles.image}>
                <img src={image || newsImage} alt="" />
            </div>
            <div className={styles.content}>
                <h3 className={`${styles.title} ${gStyles.textLarge}`}>{title}</h3>
                <p className={`${styles.description} ${gStyles.textExtraMedium}`}>
                    {description}
                </p>
                <Link to={to} className={`${styles.buttonExtraInfo} ${gStyles.textBig}`}>Подробнее</Link>
            </div>
        </li>
    )
}
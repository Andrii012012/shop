import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

interface IProps {
    image: string;
    footer: JSX.Element;
    to?: string;
    className?: string;
}

export default function ItemChoose(props: IProps): JSX.Element {

    const { image, footer, to = "", className = "" } = props;

    return (
        <li className={`${styles.item} ${className}`}>
            <Link to={to}>
                <div className={styles.image}>
                    <img src={image} alt="" />
                </div>
                <div className={styles.footer}>
                    {footer}
                </div>
            </Link>
        </li>
    )
}
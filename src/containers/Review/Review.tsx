import styles from './style.module.scss';
import gStyles from '../../styles/styles.module.scss';
import userAvatar from '../../assets/images/avatar/avatar1.png';
import { Link } from 'react-router-dom';
import StarRating from '../../components/ui/StarRating/StarRating';

interface IProps {
    avatar?: string;
    name: string;
    surname: string;
    mark: number;
    description: string;
}

export default function Review(props: IProps): JSX.Element {

    const { avatar = '', name, surname, mark, description } = props;

    console.log(avatar);

    return (
        <div className={`${styles.review}`} >
            <div className={styles.header}>
                <div className={styles.avatar}>
                    <img src={`/src/assets/images/avatar/${avatar}`} alt="" />
                </div>
                <div className={styles.body}>
                    <p className={`${gStyles.textBig} ${styles.name}`}>{name} {surname}</p>
                    <div className={styles.rating}>
                        <p className={gStyles.textBig}>{mark}.0</p>
                        <StarRating size={15} mark={mark} />
                    </div>
                </div>
            </div>
            <p className={`${styles.description} ${gStyles.textExtraMedium}`}>{description}</p>
        </div >
    );
}
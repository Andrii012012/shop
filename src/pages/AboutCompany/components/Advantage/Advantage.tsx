import styles from './styles.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import { ADVANTAGES } from '../../constants/advantages';

interface IProps { }

export default function Advantage(props: IProps): JSX.Element {

    const { } = props;

    return (
        <div className={styles.body}>
            <div className={gStyles.container}>
                <h2 className={`${gStyles.textExtraLarge} ${styles.title}`}>Нам доверяют, потому что:</h2>
                <ul className={styles.list}>
                    {ADVANTAGES.map((item, _) => (
                        <li key={item.title}>
                            <div className={styles.image}>
                                <img src={item.image} alt="" />
                            </div>
                            <div className={styles.bodyDescription}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
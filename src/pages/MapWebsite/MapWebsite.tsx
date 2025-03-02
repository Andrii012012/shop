import styles from './styles.module.scss';
import gStyles from '../../styles/styles.module.scss';
import ListMap from './components/ListMap/ListMap';
import { MAP_WEBSITE } from '../../constants/mapWebsite';

export default function MapWebsite(): JSX.Element {
    return (
        <main className={styles.wrapper}>
            <div className={gStyles.container}>
                <h2 className={`${styles.title} ${gStyles.textExtraLarge}`}>Карта сайта</h2>
                <ListMap list={MAP_WEBSITE} />
            </div>
        </main>
    );
}
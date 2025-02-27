import styles from './styles.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import Navigate from '../../../../components/Navigate/Navigate';
import ListEvents from './components/ListEvents/ListEvents';
import ListNews from './components/ListNews/ListNews';

export default function MainPage(): JSX.Element {
    return (
        <main className={styles.news}>
            <div className={gStyles.container}>
                <Navigate className={styles.navigate} links={[{ name: "Новости", to: "" }]} />
                <ListNews />
                <ListEvents />
            </div>
        </main>
    );
}
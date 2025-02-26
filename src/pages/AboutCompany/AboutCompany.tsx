import styles from './styles.module.scss';
import gStyles from '../../styles/styles.module.scss';
import Navigate from '../../components/Navigate/Navigate';
import Description from './components/Description/Description';
import Advantage from './components/Advantage/Advantage';
import Necessary from './components/Necessary/Necessary';
import Partner from './components/Partner/Partner';
import Gallery from './components/Gallery/Gallery';

export default function AboutCompany(): JSX.Element {
    return (
        <main className={styles.aboutCompany}>
            <div className={gStyles.container}>
                <Navigate className={styles.navigate} links={[{ name: 'О компании', to: "" }]} />
                <Description />
            </div>
            <Advantage />
            <Necessary />
            <Partner />
            <Gallery />
        </main>
    )
}
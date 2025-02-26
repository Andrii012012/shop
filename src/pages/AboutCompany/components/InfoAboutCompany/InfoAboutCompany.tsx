import styles from './styles.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import Navigate from '../../../../components/Navigate/Navigate';
import Description from '../Description/Description';
import Advantage from '../Advantage/Advantage';
import Necessary from '../Necessary/Necessary';
import Partner from '../Partner/Partner';
import Gallery from '../Gallery/Gallery';

interface IProps { }

export default function InfoAboutCompany(props: IProps): JSX.Element {

    const { } = props;

    return (
        <>
            <div className={gStyles.container}>
                <Navigate className={styles.navigate} links={[{ name: 'О компании', to: "" }]} />
                <Description />
            </div>
            <Advantage />
            <Necessary />
            <Partner />
            <Gallery />
        </>
    )
}
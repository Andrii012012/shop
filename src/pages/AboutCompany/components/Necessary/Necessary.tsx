import styles from './styles.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import iconNecessary1 from '../../../../assets/images/aboutCompany/iconNecessary1.png';
import iconNecessary2 from '../../../../assets/images/aboutCompany/iconNecessary2.png';
import iconNecessary3 from '../../../../assets/images/aboutCompany/iconNecessary3.png';
import ItemChoose from '../ItemChoose/ItemChoose';

interface IProps { }

export default function Necessary(props: IProps): JSX.Element {

    const { } = props;

    return (
        <div className={styles.body}>
            <div className={gStyles.container}>
                <div className={styles.wrapper}>
                    <h2 className={`${gStyles.textExtraLarge} ${styles.title}`}>Все необходимое в одном месте, по доступным ценам</h2>
                    <ul className={styles.list}>
                        <ItemChoose to="" image={iconNecessary1} footer={<p>АПТЕКА</p>} />
                        <ItemChoose to="" image={iconNecessary2} footer={<p>Ветеренарная аптека</p>} />
                        <ItemChoose to="" image={iconNecessary3} footer={<p>ВМедицинская техника и товары</p>} />
                    </ul>
                </div>
            </div>
        </div>
    )
}
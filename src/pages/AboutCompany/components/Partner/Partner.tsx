import styles from './styles.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import iconPartner1 from '../../../../assets/images/aboutCompany/iconPartner1.svg';
import iconPartner2 from '../../../../assets/images/aboutCompany/iconPartner2.svg';
import iconPartner3 from '../../../../assets/images/aboutCompany/iconPartner3.svg';
import iconPartner4 from '../../../../assets/images/aboutCompany/iconPartner4.svg';
import iconPartner5 from '../../../../assets/images/aboutCompany/iconPartner5.svg';


interface IProps { }

export default function Partner(props: IProps): JSX.Element {

    const { } = props;

    return (
        <div className={styles.partner}>
            <div className={gStyles.container}>
                <h2 className={`${gStyles.textExtraLarge} ${styles.title}`}>Наши партнеры:</h2>
                <ul className={styles.list}>
                    <li><img src={iconPartner1} alt="" /></li>
                    <li><img src={iconPartner2} alt="" /></li>
                    <li><img src={iconPartner3} alt="" /></li>
                    <li><img src={iconPartner4} alt="" /></li>
                    <li><img src={iconPartner5} alt="" /></li>
                </ul>
            </div>
        </div>
    )
}
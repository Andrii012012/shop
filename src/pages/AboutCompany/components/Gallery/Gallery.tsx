import styles from './styles.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import ItemChoose from '../ItemChoose/ItemChoose';
import iconStart from '../../../../assets/images/aboutCompany/iconGalleryStart.svg';
import iconGallery1 from '../../../../assets/images/aboutCompany/iconGallery1.png';
import iconGallery2 from '../../../../assets/images/aboutCompany/iconGallery2.png';
import iconGallery3 from '../../../../assets/images/aboutCompany/iconGallery3.png';
import iconGallery4 from '../../../../assets/images/aboutCompany/iconGallery4.png';
import iconGallery5 from '../../../../assets/images/aboutCompany/iconGallery5.png';

interface IProps { }

export default function Gallery(props: IProps): JSX.Element {

    const { } = props;

    return (
        <div className={styles.gallery}>
            <div className={gStyles.container}>
                <h2 className={`${gStyles.textExtraLarge} ${styles.title}`}>Фотогалерея</h2>
                <ul className={styles.list}>
                    <ItemChoose to="" image={iconGallery1} footer={<div className={styles.body}><p>Наши сотрудники</p><img src={iconStart} alt="" /></div>} />
                    <ItemChoose to="" image={iconGallery2} footer={<div className={styles.body}><p>Аптека готовых <br />лекарственных форм</p><img src={iconStart} alt="" /></div>} />
                    <ItemChoose to="" image={iconGallery3} footer={<div className={styles.body}><p>Ветеринарная аптека, зоотовары, корма</p><img src={iconStart} alt="" /></div>} />
                    <ItemChoose to="" image={iconGallery4} footer={<div className={styles.body}><p>Медицинские изделия и техника. Ортопедические товары</p><img src={iconStart} alt="" /></div>} />
                    <ItemChoose to="" image={iconGallery5} footer={<div className={styles.body}><p>НАптекарский магазинъ ( фасад, Торговый зал, витрины,зона обслуживания )</p><img src={iconStart} alt="" /></div>} />
                </ul>
            </div>
        </div>
    )
}
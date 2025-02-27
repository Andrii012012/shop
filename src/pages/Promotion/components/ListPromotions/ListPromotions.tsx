import styles from './styles.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import imagePromotion from '../../../../assets/images/promotion/imagePromotion1.png';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import Navigate from '../../../../components/Navigate/Navigate';
import { IPromotion } from '../../../../interface/interface';
import { PATH_PROMOTION } from '../../../../routes/routes';
import { PROMOTION } from '../../../../constants/path';

export default function ListPromotions(): JSX.Element {

    const arrayPromotions = useAppSelector((state) => state.promotion.promotion);

    return (
        <main className={styles.promotion}>
            <div className={gStyles.container}>
                <Navigate className={styles.navigate} links={[{ name: "Акции", to: "" }]} />
                <ul className={styles.list}>
                    {Array.isArray(arrayPromotions) && arrayPromotions.map((item: IPromotion, index) => (
                        <li className={styles.item} key={index}>
                            <div className={styles.image}>
                                <img src={imagePromotion} alt="" />
                            </div>
                            <div className={styles.body}>
                                <div className={styles.container}>
                                    <h2 className={gStyles.textExtraBig}>{item.title}</h2>
                                    <h2 className={gStyles.textExtraBig}>{item.till}</h2>
                                </div>
                                <Link to={`${PATH_PROMOTION}/${PROMOTION.detailsPromotion}/${item.title}`} className={styles.button}>Подробнее</Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}
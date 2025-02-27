import styles from './styles.module.scss';
import { Route, Routes } from 'react-router-dom';
import ListPromotions from './components/ListPromotions/ListPromotions';
import DetailsPromotion from './components/DetailsPromotion/DetailsPromotion';
import { PROMOTION } from '../../constants/path';

export default function Promotion(): JSX.Element {
    return (
        <main className={styles.promotion}>
            <Routes>
                <Route index element={<ListPromotions />} />
                <Route path={`${PROMOTION.detailsPromotion}/:title`} element={<DetailsPromotion />} />
            </Routes>
        </main>
    );
}
import { NEWS } from '../../constants/path';
import DetailsNews from './components/DetailsNews/DetailsNews';
import MainPage from './components/MainPage/MainPage';
import styles from './styles.module.scss';
import { Route, Routes } from 'react-router-dom';

export default function News(): JSX.Element {
    return (
        <main className={styles.promotion}>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path={`${NEWS.detailsNews}/:section/:title`} element={<DetailsNews />} />
            </Routes>
        </main>
    );
}
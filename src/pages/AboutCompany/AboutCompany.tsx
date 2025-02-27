import styles from './styles.module.scss';
import { Route, Routes } from 'react-router-dom';
import InfoAboutCompany from './components/InfoAboutCompany/InfoAboutCompany';
import Requisite from './components/Requisite/Requisite';
import { ABOUT_COMPANY } from '../../constants/path';

export default function AboutCompany(): JSX.Element {
    return (
        <main className={styles.aboutCompany}>
            <Routes>
                <Route index element={<InfoAboutCompany />} />
                <Route path={ABOUT_COMPANY.requisite} element={<Requisite />} />
            </Routes>
        </main>
    )
}
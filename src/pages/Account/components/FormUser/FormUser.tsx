
import styles from './style.module.scss';
import { Route, Routes } from 'react-router-dom';
import { IUser } from '../../../../interface/interface';
import MainPage from './components/MainPage/MainPage';
import PreOrder from './components/PreOrder/PreOrder';
interface IProps {
    dataUser: IUser;
    nameSection: string;
}

export default function FormUser(props: IProps): JSX.Element {

    const { dataUser, nameSection } = props;

    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <Routes>
                    <Route index element={<MainPage nameSection={nameSection} dataUser={dataUser} />} />
                    <Route path={`/preOrder`} element={<PreOrder />} />
                </Routes>
            </div>
        </section>
    );
}
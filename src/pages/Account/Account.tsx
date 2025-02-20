
import styles from './style.module.scss';
import gStyles from '../../styles/styles.module.scss';
import SwitchContent from '../../components/SwitchContent/SwitchContent';
import Navigate from '../../components/Navigate/Navigate';
import { PATH_ACCOUNT } from '../../routes/routes';
import FormUser from './components/FormUser/FormUser';
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';

const NAME_SECTIONS = ["Мой профиль", "Заказы", "Подписки", "Оставить отзыв"];

export default function Account(): JSX.Element {

    const dataUser = useAppSelector((state) => state.user.user);

    if (dataUser) {
        return (
            <main className={styles.page}>
                <div className={gStyles.container}>
                    <Navigate className={styles.navigate} links={[{ name: "Личный кабинет", to: "" }]} />
                    <SwitchContent
                        links={[{ name: NAME_SECTIONS[0], to: `${PATH_ACCOUNT}/${NAME_SECTIONS[0]}` },
                        { name: NAME_SECTIONS[1], to: `${PATH_ACCOUNT}/${NAME_SECTIONS[1]}` },
                        { name: NAME_SECTIONS[2], to: `${PATH_ACCOUNT}/${NAME_SECTIONS[2]}` },
                        { name: NAME_SECTIONS[3], to: `${PATH_ACCOUNT}/${NAME_SECTIONS[3]}` }]}
                    />
                </div>
                <Routes>
                    <Route path={NAME_SECTIONS[0]} element={<FormUser dataUser={dataUser} />} />
                </Routes>
            </main>
        );
    } else {
        return <></>;
    }
}
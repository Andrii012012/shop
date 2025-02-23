
import styles from './style.module.scss';
import gStyles from '../../styles/styles.module.scss';
import SwitchContent from '../../components/SwitchContent/SwitchContent';
import Navigate from '../../components/Navigate/Navigate';
import { PATH_ACCOUNT } from '../../routes/routes';
import FormUser from './components/FormUser/FormUser';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import Order from './components/Order/Order';
import Subscribe from './components/Subscribe/Subscribe';
import Comment from './components/Comment/Comment';
import { useLayoutEffect } from 'react';
import { ACCOUNT_SECTIONS } from '../../constants/path';

export default function Account(): JSX.Element {

    const dataUser = useAppSelector((state) => state.user.user);

    const navigate = useNavigate();

    useLayoutEffect(() => {
        navigate(`${PATH_ACCOUNT}/${ACCOUNT_SECTIONS.myProfile}`);
    }, [dataUser?.id]);

    if (dataUser) {
        return (
            <main className={styles.page}>
                <div className={gStyles.container}>
                    <Navigate className={styles.navigate} links={[{ name: "Личный кабинет", to: "" }]} />
                    <SwitchContent
                        links={[{ name: ACCOUNT_SECTIONS.myProfile, to: `${PATH_ACCOUNT}/${ACCOUNT_SECTIONS.myProfile}` },
                        { name: ACCOUNT_SECTIONS.orders, to: `${PATH_ACCOUNT}/${ACCOUNT_SECTIONS.orders}` },
                        { name: ACCOUNT_SECTIONS.subscriptions, to: `${PATH_ACCOUNT}/${ACCOUNT_SECTIONS.subscriptions}` },
                        { name: ACCOUNT_SECTIONS.leaveFeedback, to: `${PATH_ACCOUNT}/${ACCOUNT_SECTIONS.leaveFeedback}` }]}
                    />
                </div>
                <Routes>
                    <Route path={`${ACCOUNT_SECTIONS.myProfile}/*`} element={<FormUser nameSection={ACCOUNT_SECTIONS.myProfile} dataUser={dataUser} />} />
                    <Route path={`${ACCOUNT_SECTIONS.orders}`} element={<Order nameSection={ACCOUNT_SECTIONS.leaveFeedback} />} />
                    <Route path={`${ACCOUNT_SECTIONS.subscriptions}`} element={<Subscribe />} />
                    <Route path={`${ACCOUNT_SECTIONS.leaveFeedback}`} element={<Comment />} />
                </Routes>
            </main>
        );
    } else {
        return <></>;
    }
}
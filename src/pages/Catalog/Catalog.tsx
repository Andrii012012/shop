import styles from './style.module.scss';
import gStyles from '../../styles/styles.module.scss';
import Navigate from '../../components/Navigate/Navigate';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { CATALOG } from './constants/catalog';
import { useRef } from 'react';
import { ICatalog } from './type';
import { PATH_CATALOG } from '../../routes/routes';

export default function Catalog(): JSX.Element {

    const location = useLocation();

    const refSaveItemCatalog = useRef<ICatalog>(CATALOG[0]);

    return (
        <main className={styles.page}>
            <div className={gStyles.container}>
                <Navigate className={styles.navigate} links={[{ name: "Каталог", to: `${PATH_CATALOG}` }, { name: location.pathname === '/catalog' ? "" : `${refSaveItemCatalog.current.name}`, to: "" }]} />
                <h2 className={`${gStyles.textExtraLarge} ${styles.title}`}>Каталог товаров</h2>
                <div className={styles.content}>
                    <aside className={styles.aside}>
                        <ul className={styles.list}>
                            {CATALOG.map((item, index) => (
                                <li onClick={() => refSaveItemCatalog.current = item} key={index} className={`${styles.item} ${gStyles.textBig}`}>
                                    <NavLink style={({ isActive }) => ({
                                        color: isActive ? "#216823" : "",
                                    })} to={item.to}>
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </aside>
                    {location.pathname === '/catalog' ?
                        <ul className={styles.listSections}>
                            {CATALOG.map((item, index) => (
                                <li onClick={() => refSaveItemCatalog.current = item} key={index} className={styles.itemSection}>
                                    <Link to={item.to}>
                                        <div className={styles.body}>
                                            <img src={item.image} alt="" />
                                        </div>
                                        <p className={gStyles.textBig}>{item.name}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        : <ul className={`${styles.listPart} ${styles.listSections}`}>
                            {refSaveItemCatalog.current.list?.map((item, index) => (
                                <li key={index} className={`${styles.itemSection} ${styles.itemPart}`}>
                                    <Link to={item.to}>
                                        <div className={styles.body}>
                                            <img src={item.image} alt="" />
                                        </div>
                                        <p className={gStyles.textBig}>{item.name}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>}
                </div>
            </div>
        </main>
    );
}
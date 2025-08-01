import styles from './styles.module.scss';
import gStyles from "../../styles/styles.module.scss";
import Navigate from '../../components/Navigate/Navigate';
import { useLocation } from 'react-router-dom';
import { CATALOG } from './constants/catalog';
import { useState } from 'react';
import { ICatalog } from './type';
import { PATH_CATALOG } from '../../routes/routes';
import CatalogItem from './components/CatalogItem/CatalogItem';
import CatalogList from './components/CatalogList/CatalogList';

export default function Catalog(): JSX.Element {

    const location = useLocation();

    const [itemCatalog, setItemCatalog] = useState<ICatalog>(CATALOG[0]);

    return (
        <main className={styles.page}>
            <div className={gStyles.container}>
                <Navigate className={styles.navigate} links={[{ name: "Каталог", to: `${PATH_CATALOG}` }, { name: location.pathname === '/catalog' ? "" : `${itemCatalog.name}`, to: "" }]} />
                <h2 className={`${gStyles.textExtraLarge} ${styles.title}`}>Каталог товаров</h2>
                <div className={styles.content}>
                    <aside className={styles.aside}>
                        <CatalogList pathName={location.pathname} setItemCatalog={setItemCatalog} />
                    </aside>
                    {location.pathname === '/catalog' ?
                        <ul className={styles.listSections}>
                            {CATALOG.map((item, index) => (
                                <CatalogItem className={`${styles.itemSection}`} key={index} item={item} setItemCatalog={setItemCatalog} />
                            ))}
                        </ul>
                        : <ul className={`${styles.listPart} ${styles.listSections}`}>
                            {itemCatalog.list?.map((item, index) => (
                                <CatalogItem className={`${styles.itemSection} ${styles.itemPart}`} key={index} item={item} setItemCatalog={setItemCatalog} />
                            ))}
                        </ul>}
                </div>
            </div>
        </main>
    );
}
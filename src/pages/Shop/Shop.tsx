import styles from './style.module.scss';
import gStyles from '../../styles/styles.module.scss';
import { useState } from 'react';
import Settings from './components/Settings/Settings';
import { ISettings } from './types/type';
import { useAppSelector } from '../../hooks/useAppSelector';
import AdditionalSort from './components/AdditionalSort/AdditionalSort';
import { shopProductsFilter } from '../../features/products/filters';
import ProductLists from './components/ProductLists/ProductLists';
import Pagination from '../../components/ui/Pagination/Pagination';

export default function Shop(): JSX.Element {

    const [settings, setSettings] = useState<ISettings>({
        releaseForm: [],
        price: [0, 5000],
        manufacturer: [],
        countryOrigin: [],
        isRecipe: [],
        sortAlphabet: 'a',
        sort: 'Цена по убыванию',
    });

    const [currentValue, setCurrentValue] = useState<number>(1);

    const filterProducts = useAppSelector(shopProductsFilter(settings));

    const products = useAppSelector((state) => state.products.products);

    return (
        <main className={styles.page}>
            <div className={gStyles.container}>
                <div className={styles.wrapper}>
                    <Settings products={products} settings={settings} setSettings={setSettings} />
                    <section className={styles.content}>
                        <AdditionalSort products={products} settings={settings} setSettings={setSettings} />
                        <ProductLists currentValue={currentValue} products={filterProducts} />
                        <Pagination setCurrentValue={setCurrentValue} countPagination={Math.floor(products.length / 12)} currentNumber={currentValue} className={styles.pagination} />
                    </section>
                </div>
            </div>
        </main>
    );
}
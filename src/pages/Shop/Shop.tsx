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
import SimilarProducts from './components/SimilarProducts/SimilarProducts';

export default function Shop(): JSX.Element {

    const [settings, setSettings] = useState<ISettings>({
        releaseForm: [],
        price: [0, 5000],
        manufacturer: [],
        countryOrigin: [],
        isRecipe: [],
        sortAlphabet: 'а',
        sort: 'Цена по убыванию',
    });

    const [currentValue, setCurrentValue] = useState<number>(1);

    const filterProducts = useAppSelector(shopProductsFilter(settings));

    const products = useAppSelector((state) => state.products.products);

    function handleClearSettings() {
        setSettings((prevState) => {
            const newState = { ...prevState };
            newState.countryOrigin = [];
            newState.manufacturer = [];
            newState.price = [0, 15000];
            newState.releaseForm = [];
            newState.sortAlphabet = 'а';
            newState.sort = 'Цена по убыванию';
            newState.isRecipe = [];
            return newState;
        });
    }

    return (
        <main className={styles.page}>
            <div className={gStyles.container}>
                <div className={styles.wrapper}>
                    <Settings handleClearSettings={handleClearSettings} products={products} settings={settings} setSettings={setSettings} />
                    <section className={styles.content}>
                        <AdditionalSort products={filterProducts} settings={settings} setSettings={setSettings} />
                        <ProductLists currentValue={currentValue} products={filterProducts} />
                        <Pagination setCurrentValue={setCurrentValue} countPagination={Math.round(filterProducts.length / 12)} currentNumber={currentValue} className={styles.pagination} />
                    </section>
                </div>
                <SimilarProducts />
            </div>
        </main>
    );
}
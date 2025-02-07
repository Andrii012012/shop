import styles from './style.module.scss';
import gStyles from '../../styles/styles.module.scss';
import { useState } from 'react';
import Settings from './components/Settings/Settings';
import { ISettings } from './types/type';
import { useAppSelector } from '../../hooks/useAppSelector';

export default function Shop(): JSX.Element {

    const [settings, setSettings] = useState<ISettings>({
        releaseForm: [],
        price: [0, 5000],
        manufacturer: [],
        countryOrigin: [],
        isRecipe: []
    });

    const products = useAppSelector((state) => state.products.products);

    return (
        <main className={styles.page}>
            <div className={gStyles.container}>
                <div className={styles.wrapper}>
                    <Settings products={products} settings={settings} setSettings={setSettings} />
                    <section className={styles.content}>

                    </section>
                </div>
            </div>
        </main>
    );
}
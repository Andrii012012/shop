import styles from './styles.module.scss';
import gStyles from '../../styles/styles.module.scss';
import Navigate from '../../components/Navigate/Navigate';
import { POLITIC } from '../../constants/politics';
import { useState } from 'react';
import Button from '../../components/ui/Button/Button';

export default function Politics(): JSX.Element {

    const [isElse, setIsElse] = useState<boolean>(false);

    return (
        <main className={styles.politics}>
            <div className={gStyles.container}>
                <Navigate className={styles.navigate} links={[{ name: "Политика конфиденциальности", to: "" }]} />
                <div className={styles.content}>
                    <h2 className={`${gStyles.textExtraLarge} ${styles.title}`}>Политика в отношении обработки персональных данных</h2>
                    <ul className={`${styles.list} ${gStyles.textExtraBig}`}>
                        {POLITIC.map((item, index) => {
                            if (index < 12 || isElse) {
                                return (
                                    <li className={styles.item} key={index}>
                                        <h3>{item.title}</h3>
                                        <p>{item?.description}</p>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                    {!isElse && <Button onClick={() => setIsElse(true)} className={`${styles.button} ${gStyles.textBig}`} title='Читать полностью' />}
                </div>
            </div>
        </main>
    );
}
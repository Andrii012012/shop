import styles from './style.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import { Link } from 'react-router-dom';
import news1 from '../../../../assets/images/news/news1.png';
import news2 from '../../../../assets/images/news/news2.png';

export default function News(): JSX.Element {
    return (
        <section className={styles.wrapper}>
            <div className={gStyles.container}>
                <div className={styles.header}>
                    <h2 className={`${gStyles.textLarge} ${styles.title}`}>Новости Аптекарьский Магазинъ</h2>
                    <Link className={`${styles.button} ${gStyles.textBig}`} to='/'>Все новости</Link>
                </div>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <div className={styles.image}>
                            <img src={news1} alt="" />
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.titleNews}>Конец пандемии близок?</h3>
                            <p className={`${styles.description} ${gStyles.textExtraMedium}`}>
                                Мир переживает очередную волну SARS-CoV-2 штамма омикрон.
                                Однако, ученые настроены оптимистично
                                и считают, что конец пандемии уже близок.
                            </p>
                            <Link to='/' className={`${styles.buttonExtraInfo} ${gStyles.textBig}`}>Подробнее</Link>
                        </div>
                    </li>

                    <li className={styles.item}>
                        <div className={styles.image}>
                            <img src={news2} alt="" />
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.titleNews}>Конец пандемии близок?</h3>
                            <p className={`${styles.description} ${gStyles.textExtraMedium}`}>
                                Организм вырабатывает витамин D, когда на кожу попадает солнечный свет.
                                Зимой световой день слишком короткий, а на улице слишком холодно, чтобы выйти на улицу и провести
                                там столько времени, сколько нужно для получения дневной нормы витамина.
                            </p>
                            <Link to='/' className={`${styles.buttonExtraInfo} ${gStyles.textBig}`}>Подробнее</Link>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    );
}
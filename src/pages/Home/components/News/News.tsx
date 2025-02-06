import styles from './style.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import newsImage from '../../../../assets/images/news/news1.png';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks/useAppSelector';

export default function News(): JSX.Element {

    let news = useAppSelector((state) => state.news.news);

    if (news.length) {
        return (
            <section className={styles.wrapper}>
                <div className={gStyles.container}>
                    <div className={styles.header}>
                        <h2 className={`${gStyles.textLarge} ${styles.title}`}>Новости Аптекарьский Магазинъ</h2>
                        <Link className={`${styles.button} ${gStyles.textBig}`} to='/'>Все новости</Link>
                    </div>
                    <ul className={styles.list}>
                        {Array.from(Array(news[0], news[1])).map((item, _) => (
                            <li key={item.title} className={styles.item}>
                                <div className={styles.image}>
                                    <img src={newsImage} alt="" />
                                </div>
                                <div className={styles.content}>
                                    <h3 className={styles.titleNews}>{item.title}</h3>
                                    <p className={`${styles.description} ${gStyles.textExtraMedium}`}>
                                        {item.description}
                                    </p>
                                    <Link to='/' className={`${styles.buttonExtraInfo} ${gStyles.textBig}`}>Подробнее</Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        );
    } return <></>
}
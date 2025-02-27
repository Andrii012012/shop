import styles from './style.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import ItemEvent from '../../../../containers/ItemEvent/ItemEvent';

export default function News(): JSX.Element {

    let news = useAppSelector((state) => state.news.news);

    if (news) {
        return (
            <section className={styles.wrapper}>
                <div className={gStyles.container}>
                    <div className={styles.header}>
                        <h2 className={`${gStyles.textLarge} ${styles.title}`}>Новости Аптекарьский Магазинъ</h2>
                        <Link className={`${styles.button} ${gStyles.textBig}`} to='/'>Все новости</Link>
                    </div>
                    <ul className={styles.list}>
                        {new Array(news.sectionEvents[0], news.sectionEvents[1]).map((item, _) => (
                            <ItemEvent title={item.title} description={item.description} to='/' className={styles.item} />
                        ))}
                    </ul>
                </div>
            </section>
        );
    } return <></>
}
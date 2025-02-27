import styles from './styles.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import { Link, useParams } from 'react-router-dom';
import Navigate from '../../../../components/Navigate/Navigate';
import { PATH_CATALOG, PATH_NEWS } from '../../../../routes/routes';
import imageMain from '../../../../assets/images/news/imageNews1.png';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { findNewsFilter } from '../../../../features/news/filters';

export default function DetailsNews(): JSX.Element {

    let params = useParams();

    const news = useAppSelector(findNewsFilter(params.section || "", params.title || ""));

    function createMarkup() {
        return { __html: news?.description || "" };
    }

    return (
        <section className={styles.wrapper}>
            <div className={gStyles.container}>
                <Navigate className={styles.navigate} links={[{ name: "Новости", to: PATH_NEWS }]} />
                <div className={styles.body}>
                    <div className={styles.image}>
                        <img src={imageMain} alt="" />
                        <div>
                            <time className={gStyles.textBig}>{news?.date}</time>
                            <h2 className={gStyles.textExtraLarge}>{news?.title}</h2>
                        </div>
                    </div>
                    {<div className={`${styles.content} ${gStyles.textBig}`} dangerouslySetInnerHTML={(createMarkup())} ></div>}
                    <Link to={PATH_CATALOG} className={styles.button}>Перейти в каталог</Link>
                </div>
            </div>
        </section>
    );
}
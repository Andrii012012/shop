import styles from './styles.module.scss';
import gStyles from '../../styles/styles.module.scss';
import { useAppSelector } from '../../hooks/useAppSelector';
import Card from '../../containers/Card/Card';
import Navigate from '../../components/Navigate/Navigate';

export default function Liked(): JSX.Element {

    const likedProducts = useAppSelector((state) => state.user.user?.likedProducts);

    return (
        <main className={styles.liked}>
            <div className={gStyles.container}>
                <Navigate className={styles.navigate} links={[{ name: "Личный кабинет", to: "" }]} />
                <h2 className={`${styles.title} ${gStyles.textExtraLarge}`}>Избранное</h2>
                <ul className={styles.list}>
                    {likedProducts?.map((item, index) => (
                        <li key={index}>
                            <Card
                                isStock={true}
                                name={item.name}
                                manufacturer={item.manufacturer}
                                volume={item.volume}
                                release={item.release}
                                price={item.price}
                                isRecipe={item.isRecipe}
                                isDelivery={item.isDelivery}
                                countryOrigin={item.countryOrigin}
                                weight={item.weight}
                                discount={item.discount}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}
import styles from './style.module.scss';
import gStyles from '../../../../../../styles/styles.module.scss';
import { IBasketProduct } from '../../../../../../interface/interface';

interface IProps {
    products: IBasketProduct[];
    className?: string;
}

export default function ProductsList(props: IProps): JSX.Element {

    const { products, className = "" } = props;

    return (
        <ul className={`${styles.list} ${className}`}>
            {products.map((item, index) => (
                <li key={index} className={styles.item}>
                    <h3 className={gStyles.textExtraBig}>{item.name}</h3>
                    <p className={`${styles.text} ${gStyles.textExtraBig}`}><span>Условия реализации:</span><p> {item.isRecipe ? "с рецептом" : "без рецепта"}</p></p>
                    <p className={`${styles.text} ${gStyles.textExtraBig}`}><span>Производитель:</span><p> {item.manufacturer} {item.countryOrigin}</p></p>
                </li>
            ))}
        </ul>
    )
}
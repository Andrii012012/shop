import styles from './style.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import Checkbox from '../../../../components/ui/Checkbox/Checkbox';
import Button from '../../../../components/ui/Button/Button';
import { IBasketProduct } from '../../../../interface/interface';
import ItemProduct from '../ItemProduct/ItemProduct';

interface IProps {
    products: IBasketProduct[];
}

export default function MyBasket(props: IProps): JSX.Element {

    const { products } = props;

    return (
        <section className={styles.wrapper}>
            <div className={gStyles.container}>
                <div className={styles.body}>
                    <div className={styles.products}>
                        <div className={styles.header}>
                            <div className={styles.selectProduct}>
                                <Checkbox className={styles.checkboxSelectProducts} value={false} />
                                <p className={gStyles.textBig}>Выбрать все</p>
                            </div>
                            <Button className={`${styles.clearSelected} ${gStyles.textBig}`} title={"Удалить выбранные"} />
                        </div>
                        <ul className={styles.listProducts}>
                            {products.map((item, index) => (
                                <ItemProduct
                                    key={index}
                                    name={item.name}
                                    price={item.price}
                                    isRecipe={item.isRecipe}
                                    countryOrigin={item.countryOrigin}
                                    manufacturer={item.manufacturer}
                                />
                            ))}
                        </ul>
                    </div>
                    <div className={styles.infoProducts}>

                    </div>
                </div>
            </div>
        </section>
    );
}
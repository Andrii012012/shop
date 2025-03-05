import styles from './style.module.scss';
import { IBaseProduct } from '../../../../interface/interface';
import Card from '../../../../containers/Card/Card';

interface IProps {
    products: IBaseProduct[];
    currentValue: number;
}

export default function ProductLists(props: IProps): JSX.Element {

    const { products, currentValue } = props;

    const productsShow = [];

    const tillValue = (currentValue * 12 > products.length ? products.length : currentValue * 12);

    for (let index = (currentValue * 12 - 12); index < tillValue; index++) {
        productsShow.push(products[index]);
    }

    if (products.length) {
        return (
            <ul className={styles.list}>
                {productsShow.map((item, _) => (
                    <Card
                        name={item?.name}
                        manufacturer={item?.manufacturer}
                        volume={item?.release[0].packing[0]}
                        release={item?.release[1].name}
                        price={item?.price}
                        isRecipe={item?.isRecipe}
                        isDelivery={item?.isDelivery}
                        countryOrigin={item.countryOrigin}
                        productId={item.id}
                        discount={item.discount}
                        weight={item.weight}
                        images={item.images}
                    />
                ))}
            </ul>
        );
    } return <></>;
}
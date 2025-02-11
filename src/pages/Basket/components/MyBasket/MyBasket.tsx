import styles from './style.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import Checkbox from '../../../../components/ui/Checkbox/Checkbox';
import Button from '../../../../components/ui/Button/Button';
import { IBasketProduct } from '../../../../interface/interface';
import ItemProduct from '../ItemProduct/ItemProduct';
import { IState } from '../../type';
import { useState } from 'react';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { removeSelectedProducts } from '../../../../features/basket/basket';

interface IProps {
    products: IBasketProduct[];
    setState: React.Dispatch<React.SetStateAction<IState>>;
    state: IState;
}

export default function MyBasket(props: IProps): JSX.Element {

    const { products, setState, state } = props;

    const [isSelectAllProduct, setIsSelectAllProduct] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    function handleAllRemoveSelectedProducts() {
        const selectedProductsId: string[] = [];

        state.selectedProducts.forEach((item, _) => {
            selectedProductsId.push(item.id);
        });

        dispatch(removeSelectedProducts(selectedProductsId));
    }

    return (
        <section className={styles.wrapper}>
            <div className={gStyles.container}>
                <div className={styles.body}>
                    <div className={styles.products}>
                        <div className={styles.header}>
                            <div onClick={() => setIsSelectAllProduct(!isSelectAllProduct)} className={styles.selectProduct}>
                                <Checkbox className={styles.checkboxSelectProducts} value={isSelectAllProduct} />
                                <p className={gStyles.textBig}>Выбрать все</p>
                            </div>
                            <Button onClick={handleAllRemoveSelectedProducts} className={`${styles.clearSelected} ${gStyles.textBig}`} title={"Удалить выбранные"} />
                        </div>
                        <ul className={styles.listProducts}>
                            {products.map((item, index) => (
                                <ItemProduct
                                    key={index}
                                    id={item.id}
                                    name={item.name}
                                    price={item.price}
                                    isRecipe={item.isRecipe}
                                    countryOrigin={item.countryOrigin}
                                    manufacturer={item.manufacturer}
                                    setState={setState}
                                    state={state}
                                    isSelectAllProduct={isSelectAllProduct}
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
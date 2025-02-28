import styles from './style.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import Checkbox from '../../../../components/ui/Checkbox/Checkbox';
import imageProduct from '../../../../assets/images/products/imageProductDefault.png';
import Counter from '../../../../components/ui/Counter/Counter';
import iconHeart from '../../../../assets/images/global/iconHeartOutline.svg';
import iconDelete from '../../../../assets/images/global/iconDelete.svg';
import { useEffect, useState } from 'react';
import { ISelectedProduct, IState } from '../../type';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { removeProduct } from '../../../../features/basket/basket';
interface IProps {
    id: string;
    name: string;
    price: number;
    isRecipe: boolean;
    countryOrigin: string;
    manufacturer: string;
    setState: React.Dispatch<React.SetStateAction<IState>>;
    state: IState;
    isSelectAllProduct: boolean;
    count: number;
    handleRemoveProduct: (productId: string[]) => void;
    weight: number;
};

export default function ItemProduct(props: IProps): JSX.Element {

    const { manufacturer, countryOrigin, isRecipe, name, price, setState, state, isSelectAllProduct, id, count, handleRemoveProduct, weight } = props;

    const [counter, setCounter] = useState<number>(count);

    const [totalPrice, setTotalPrice] = useState(price * counter);

    const dispatch = useAppDispatch();

    const pattern = { id: id, name, isRecipe, manufacturer, countryOrigin, price: totalPrice, count: counter, weight };

    function handlePutProduct(product: ISelectedProduct) {
        setState((prevState) => {
            const newState = { ...prevState };
            if (!newState.selectedProducts.find((item) => item.id === id)) {
                newState.selectedProducts.push(product);
            } else {
                newState.selectedProducts = newState.selectedProducts.filter((item) => item.id !== id && item);
            }
            return newState;
        });
    }

    function checkProduct(): boolean {
        let isHas = false;
        state.selectedProducts.forEach((item, _) => {
            if (item.id === id) isHas = true;
        });
        return isHas;
    }

    useEffect(() => {
        const product = pattern;
        setState((prevState) => {
            const newState = { ...prevState };
            if (isSelectAllProduct) {
                newState.selectedProducts.push(product);
            }
            else {
                newState.selectedProducts = [];
            }

            return newState;
        });

    }, [isSelectAllProduct]);


    function handleDeleteProduct() {
        handleRemoveProduct([id]);
        dispatch(removeProduct([id]));
    }

    useEffect(() => {
        setTotalPrice(price * counter);
        setState((prevState) => {
            const newState = { ...prevState };
            newState.selectedProducts = newState.selectedProducts.filter((item) => {
                if (item.id === id) {
                    item.count = counter;
                    item.price = price * counter;
                    return item;
                }
                return item;
            });

            newState.priceProducts = newState.selectedProducts.reduce((acc, item) => {
                return acc += item.price;
            }, 0);

            return newState;
        });
    }, [counter]);


    return (
        <li className={styles.item}>
            <div className={styles.bodyProduct}>
                <div onClick={() => handlePutProduct(pattern)}>
                    <Checkbox className={styles.checkboxSelectProduct} valueCheckbox={checkProduct()} />
                </div>
                <div className={styles.imageProduct}>
                    <img src={imageProduct} />
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.headerProduct}>
                        <h3 className={gStyles.textBig}>{name}</h3>
                        <div className={styles.bodyActions}>
                            <img src={iconHeart} alt="" />
                            <img onClick={handleDeleteProduct} src={iconDelete} alt="" />
                        </div>
                    </div>
                    <div className={styles.bodyInfoProduct}>
                        <div >
                            <p><span>Реализация:</span> {!isRecipe ? <span className={styles.textGreen}>без рецепта</span> : <span className={styles.textRed}>С рецептом</span>}</p>
                            <p><span>Производитель:</span> {manufacturer} {countryOrigin}</p>
                        </div>
                        <p className={`${styles.price} ${gStyles.textLarge}`}>{price} $</p>
                        <Counter className={styles.counter} value={counter} setValue={setCounter} />
                        <p className={`${styles.totalPrice} ${gStyles.textExtraLarge}`}>{totalPrice} $</p>
                    </div>
                </div>
            </div>
        </li>
    );
}
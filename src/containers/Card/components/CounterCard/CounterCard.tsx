import styles from './styles.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import Counter from '../../../../components/ui/Counter/Counter';
import { useId } from 'react';
import { IBasketProduct } from '../../../../interface/interface';
import { addProduct } from '../../../../features/basket/basket';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';

interface IProps {
    name: string;
    manufacturer: string;
    price: number;
    isRecipe: boolean;
    countryOrigin: string;
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
    weight?: number;
}

export default function CounterCard(props: IProps): JSX.Element {

    const { name, manufacturer, countryOrigin, price, isRecipe, setCounter, counter, weight } = props;

    const uniqueId = useId();

    const dispatch = useAppDispatch();

    function handlePutProduct(productBasket: IBasketProduct) {
        dispatch(addProduct(productBasket));
    }

    return (
        <div className={styles.buttonBody}>
            <Counter value={counter} setValue={setCounter} />
            <button onClick={() => handlePutProduct({ id: uniqueId, name, manufacturer, countryOrigin, isRecipe, image: "", price, count: counter, weight: weight || 0 })} className={`${styles.button} ${gStyles.textMedium}`}>В корзину</button>
        </div>
    );
}
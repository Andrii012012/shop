import Button from "../../../../../../components/ui/Button/Button";
import Counter from "../../../../../../components/ui/Counter/Counter";
import styles from "./style.module.scss";
import CartIcon from "../../../../../../assets/images/products/cartIcon.svg?react";
import { useAppDispatch } from "../../../../../../hooks/useAppDispatch";
import { addProduct } from "../../../../../../features/basket/basket";

interface IProps {
  counter: number;
  price: number;
  isDelivery: boolean;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  stock: boolean;
  id: string;
  image?: string;
  name: string;
  isRecipe: boolean;
  countryOrigin: string;
  manufacturer: string;
  weight: number | undefined;
}

export default function Sidebar(props: IProps) {
  const { counter, price, isDelivery, setCounter, stock, id, name, weight, manufacturer, isRecipe, countryOrigin, image } = props;

  const dispatch = useAppDispatch();

  function handleAddBasketProduct() {
    dispatch(addProduct({
      id,
      image,
      name,
      isRecipe,
      countryOrigin,
      manufacturer,
      weight: weight || 0,
      price,
      count: counter,
    }));
  }

  return (
    <>
      <h2 className={styles.productDescriptionPrice}>
        {price * counter}грн
      </h2 >
      <div className={styles.productDescriptionPriceInfo}>
        <p className={styles.priceInfoInStock}>
          <span className={styles.priceInfoInStockTitle}>В наличии:</span>
          <span className={styles.priceInfoInStockValue}>
            {stock ? <p className={styles.green}>Много</p> : <p className={styles.red}>Нет в наличии</p>}
          </span>
        </p>
        <p className={styles.priceInfoDelivery}>
          <span className={styles.priceInfoDeliveryTitle}>Доставка:</span>
          <span className={styles.priceInfoDeliveryValue}>
            {isDelivery ? <p className={styles.green}>Доступна</p> : <p className={styles.red}>Не доступна</p>}
          </span>
        </p>
        <div className={styles.priceInfoQuantity}>
          <p className={styles.priceInfoQuantityTitle}>Количество:</p>
          <Counter className={styles.priceInfoQuantityCounter} setValue={setCounter} value={counter} />
        </div>
      </div>
      <Button
        title="В корзину"
        onClick={handleAddBasketProduct}
        leftIcon={<CartIcon />}
        className={styles.cartButton}
      />
    </>
  );
}

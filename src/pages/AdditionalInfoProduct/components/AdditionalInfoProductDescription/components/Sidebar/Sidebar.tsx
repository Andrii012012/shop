import Button from "../../../../../../components/ui/Button/Button";
import Counter from "../../../../../../components/ui/Counter/Counter";
import styles from "./style.module.scss";
import gStyles from '../../../../../../styles/styles.module.scss';
import CartIcon from "../../../../../../assets/images/products/cartIcon.svg?react";
import { useAppDispatch } from "../../../../../../hooks/useAppDispatch";
import { addProduct } from "../../../../../../features/basket/basket";
import IconWarning from '../../../../../../assets/images/global/iconWarning.svg?react';
import { IStock } from "../type";

interface IProps {
  counter: number;
  price: number;
  isDelivery: boolean;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  stock: IStock;
  id: string;
  images: string[];
  name: string;
  isRecipe: boolean;
  countryOrigin: string;
  manufacturer: string;
  weight: number | undefined;
  discount: number | null;
}

export default function Sidebar(props: IProps) {
  const { counter, price, isDelivery, setCounter, stock, id, name, weight, manufacturer, isRecipe, countryOrigin, images, discount } = props;

  const dispatch = useAppDispatch();

  function checkStock() {
    const booleans = [];
    for (let key in stock) {
      booleans.push(stock[key]);
    };
    return typeof booleans.find((item) => item === false) === 'boolean' ? false : true;
  }

  function handleAddBasketProduct() {
    dispatch(addProduct({
      id,
      images,
      name,
      isRecipe,
      countryOrigin,
      manufacturer,
      weight: weight || 0,
      price: discount ? discount : price,
      count: counter,
    }));
  }

  return (
    <>
      {discount && <div className={styles.discountPrice}><p className={`${gStyles.textLarge}`}>{price} грн</p></div>}
      <h2 className={styles.productDescriptionPrice}>
        {!discount ? price * counter : discount * counter}грн
      </h2 >
      <div className={styles.productDescriptionPriceInfo}>
        <p className={styles.priceInfoInStock}>
          <span className={styles.priceInfoInStockTitle}>В наличии:</span>
          <span className={styles.priceInfoInStockValue}>
            {checkStock() ? <p className={styles.green}>Много</p> : <p className={styles.red}>Нет в наличии</p>}
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
        {!isDelivery && <div className={styles.bodyWarning}>
          <div className={styles.header}>
            <IconWarning />
          </div>
          <p>Лекарственные средства, которые отпускаются по рецепту при заказе через сайт, возможно получить только в аптеке самовывозом при предъявлении рецепта.</p>
        </div>}
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

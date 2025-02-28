import styles from "./style.module.scss";
import gStyles from "../../styles/styles.module.scss";
import Navigate from "../../components/Navigate/Navigate";
import { PATH_BASKET } from "../../routes/routes";
import SwitchContent from "../../components/SwitchContent/SwitchContent";
import { Route, Routes, useNavigate } from "react-router-dom";
import MyBasket from "./components/MyBasket/MyBasket";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useEffect, useLayoutEffect, useState } from "react";
import { IFields, IState } from "./type";
import DeliveryMethod from "./components/DeliveryMethod/DeliveryMethod";
import Confirmation from "./components/Confirmation/Confirmation";
import { BASKET_SECTIONS } from "../../constants/path";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { removeProduct } from "../../features/basket/basket";

export default function Basket(): JSX.Element {
  const products = useAppSelector((state) => state.basket.basket);

  const navigateRoute = useNavigate();

  const dispatch = useAppDispatch();

  const [isRecipeProduct, setIsRecipeProduct] = useState<boolean>(false);

  const [state, setState] = useState<IState>({
    selectedProducts: [],
    discount: 2,
    payment: "Оплата онлайн",
    deliveryMethod: "Доставка курьером",
    priceProducts: 0,
    totalPrice: 0,
    deliveryPrice: 180,
  });

  const [field, setField] = useState<IFields>({
    phone: "",
    email: "",
    name: "",
    surname: "",
    street: "",
    house: "",
    appartament: "",
    comment: "",
  });

  function checkElementForRecipe(): boolean {
    const element = state.selectedProducts.find(
      (item) => item.isRecipe && item
    );
    return element ? false : true;
  }

  useLayoutEffect(() => {
    navigateRoute(BASKET_SECTIONS.myBasket);
  }, []);

  useEffect(() => {
    setIsRecipeProduct(checkElementForRecipe());
  }, [state.selectedProducts.length, state.selectedProducts]);

  function handleChangeField(value: string, key: string): void {
    setField((prevState) => {
      const newState = { ...prevState };
      newState[key] = value;
      return newState;
    });
  }

  function clearSelectedProducts(): void {
    dispatch(removeProduct(state.selectedProducts.map((item, _) => item.id)));
  }

  return (
    <main className={styles.page}>
      <div className={gStyles.container}>
        <Navigate
          className={styles.navigate}
          links={[
            {
              name: "Корзина",
              to: PATH_BASKET,
            },
          ]}
        />
        <SwitchContent
          disabled={[
            { index: 0, color: "" },
            { index: 1, color: isRecipeProduct ? "" : "#7F7F7F" },
            { index: 2, color: "" },
          ]}
          links={[
            {
              name: BASKET_SECTIONS.myBasket,
              to: `${PATH_BASKET}/${BASKET_SECTIONS.myBasket}`,
            },
            {
              name: BASKET_SECTIONS.methodDelivery,
              to: `${PATH_BASKET}/${BASKET_SECTIONS.methodDelivery}`,
            },
            {
              name: BASKET_SECTIONS.paymentConfirmation,
              to: `${PATH_BASKET}/${BASKET_SECTIONS.paymentConfirmation}`,
            },
          ]}
        />
      </div>
      <Routes>
        <Route
          path={BASKET_SECTIONS.myBasket}
          element={
            <MyBasket
              isRecipeProduct={isRecipeProduct}
              setState={setState}
              state={state}
              products={products}
            />
          }
        />
        <Route
          path={BASKET_SECTIONS.methodDelivery}
          element={
            <DeliveryMethod
              handleChangeField={handleChangeField}
              field={field}
              setState={setState}
              state={state}
              products={state.selectedProducts}
            />
          }
        />
        <Route
          path={BASKET_SECTIONS.paymentConfirmation}
          element={
            <Confirmation
              clearSelectedProducts={clearSelectedProducts}
              deliveryPrice={state.deliveryPrice}
              handleChangeField={handleChangeField}
              isRecipeProduct={isRecipeProduct}
              payment={state.payment}
              address={{ street: field.street, house: field.house }}
              deliveryMethod={state.deliveryMethod}
              totalPrice={state.totalPrice}
              products={state.selectedProducts}
            />
          }
        />
      </Routes>
    </main>
  );
}

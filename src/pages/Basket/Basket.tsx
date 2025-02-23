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

const SWITCH_CONTENT = [
  "Моя корзина",
  "Способ доставки",
  "Оплата и подтверждение",
];

export default function Basket(): JSX.Element {
  const products = useAppSelector((state) => state.basket.basket);

  const navigateRoute = useNavigate();

  const [isRecipeProduct, setIsRecipeProduct] = useState<boolean>(false);

  const [state, setState] = useState<IState>({
    selectedProducts: [],
    discount: 2,
    payment: "Оплата онлайн",
    deliveryMethod: "Доставка курьером",
    priceProducts: 0,
    totalPrice: 0,
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
    navigateRoute(SWITCH_CONTENT[0]);
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
              name: SWITCH_CONTENT[0],
              to: `${PATH_BASKET}/${SWITCH_CONTENT[0]}`,
            },
            {
              name: SWITCH_CONTENT[1],
              to: `${PATH_BASKET}/${SWITCH_CONTENT[1]}`,
            },
            {
              name: SWITCH_CONTENT[2],
              to: `${PATH_BASKET}/${SWITCH_CONTENT[2]}`,
            },
          ]}
        />
      </div>
      <Routes>
        <Route
          path={SWITCH_CONTENT[0]}
          element={
            <MyBasket
              isRecipeProduct={isRecipeProduct}
              SWITCH_CONTENT={SWITCH_CONTENT}
              setState={setState}
              state={state}
              products={products}
            />
          }
        />
        <Route
          path={SWITCH_CONTENT[1]}
          element={
            <DeliveryMethod
              handleChangeField={handleChangeField}
              SWITCH_CONTENT={SWITCH_CONTENT}
              field={field}
              setField={setField}
              setState={setState}
              state={state}
              products={state.selectedProducts}
            />
          }
        />
        <Route
          path={SWITCH_CONTENT[2]}
          element={
            <Confirmation
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

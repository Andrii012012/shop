import style from "./style.module.scss";
import gStyle from "../../styles/styles.module.scss";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";

import { PATH_CARD_PRODUCT } from "../../routes/routes";
import { useAppSelector } from "../../hooks/useAppSelector";

import { IBaseProduct } from "../../interface/interface";

import CardProductDescription from "./components/CardProductDescription/CardProductDescription";
import CardProductInstruction from "./components//CardProductInstruction/CardProductInstruction";
import CardProductUsage from "./components/CardProductUsage/CardProductUsage";
import CardProductPharmacologic from "./components/CardProductPharmacologic/CardProductPharmacologic";
import { useFetch } from "../../hooks/useFetch";
import { useEffect } from "react";

function CardProduct() {
  function activeClassLink({ isActive }: { isActive: boolean }) {
    return `${style.tabsItemLink} ${isActive ? style.activeLink : ""}`.trim();
  }

  const [data] = useFetch("src/servers/productItem.json");

  const products = useAppSelector((state) => state.products.products);
  console.log(products);

  const navigateRoute = useNavigate();

  useEffect(() => {
    navigateRoute(`description`);
  }, []);

  return (
    <div className={style.cardProduct}>
      <div className={gStyle.container}>
        <ul className={style.tabs}>
          <li className={style.tabsItem}>
            <NavLink
              to={`/${PATH_CARD_PRODUCT}/description`}
              className={activeClassLink}
            >
              Описание товара
            </NavLink>
          </li>
          <li className={style.tabsItem}>
            <NavLink
              to={`/${PATH_CARD_PRODUCT}/instruction`}
              className={activeClassLink}
            >
              Инструкции по применению
            </NavLink>
          </li>
          <li className={style.tabsItem}>
            <NavLink
              to={`/${PATH_CARD_PRODUCT}/usage`}
              className={activeClassLink}
            >
              Показания к применению
            </NavLink>
          </li>
          <li className={style.tabsItem}>
            <NavLink
              to={`/${PATH_CARD_PRODUCT}/pharmocologic`}
              className={activeClassLink}
            >
              Фармокологическое действие
            </NavLink>
          </li>
        </ul>
      </div>

      <Routes>
        <Route
          index
          element={<CardProductDescription products={products} data={data} />}
        />
        <Route
          path={`description`}
          element={<CardProductDescription products={products} data={data} />}
        />
        <Route
          path={`instruction`}
          element={<CardProductInstruction product={products[0]} />}
        />
        <Route
          path={`usage`}
          element={<CardProductUsage product={products[0]} />}
        />
        <Route
          path={`pharmocologic`}
          element={<CardProductPharmacologic product={products[0]} />}
        />
      </Routes>
    </div>
  );
}

export default CardProduct;

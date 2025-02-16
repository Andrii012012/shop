import style from "./style.module.scss";
import gStyle from "../../styles/styles.module.scss";
import { Routes, Route, NavLink } from "react-router-dom";

import { PATH_CARD_PRODUCT } from "../../routes/routes";

import CardProductDescription from "./components/CardProductDescription";
import CardProductInstruction from "./components/CardProductInstruction";
import CardProductUsage from "./components/CardProductUsage";
import CardProductPharmacologic from "./components/CardProductPharmacologic";

function CardProduct() {
  function activeClassLink({ isActive }: { isActive: boolean }) {
    return isActive ? "activeLink" : "";
  }

  return (
    <div className={style.cardProduct}>
      <div className={gStyle.container}>
        <ul className={style.tabs}>
          <li className={style.tabsItem}>
            <NavLink
              to={`description`}
              className={`${style.tabsItemLink} ${activeClassLink}`}
            >
              Описание товара
            </NavLink>
          </li>
          <li className={style.tabsItem}>
            <NavLink to={`instruction`} className={style.tabsItemLink}>
              Инструкции по применению
            </NavLink>
          </li>
          <li className={style.tabsItem}>
            <NavLink to={`usage`} className={style.tabsItemLink}>
              Показания к применению
            </NavLink>
          </li>
          <li className={style.tabsItem}>
            <NavLink to={`pharmocologic`} className={style.tabsItemLink}>
              Фармокологическое действие
            </NavLink>
          </li>
        </ul>

        <Routes>
          <Route index element={<CardProductDescription />} />
          <Route
            path={`${PATH_CARD_PRODUCT}/description`}
            element={<CardProductDescription />}
          />
          <Route
            path={`${PATH_CARD_PRODUCT}/instruction`}
            element={<CardProductInstruction />}
          />
          <Route
            path={`${PATH_CARD_PRODUCT}/usage`}
            element={<CardProductUsage />}
          />
          <Route
            path={`${PATH_CARD_PRODUCT}/pharmocologic`}
            element={<CardProductPharmacologic />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default CardProduct;

import style from "./style.module.scss";
import gStyle from "../../styles/styles.module.scss";
import {
  Routes,
  Route,
  NavLink,
  useNavigate,
  useParams,
} from "react-router-dom";
import { PATH_CARD_PRODUCT } from "../../routes/routes";
import { useAppSelector } from "../../hooks/useAppSelector";
import CardProductDescription from "./components/CardProductDescription/CardProductDescription";
import CardProductInstruction from "./components//CardProductInstruction/CardProductInstruction";
import CardProductUsage from "./components/CardProductUsage/CardProductUsage";
import CardProductPharmacologic from "./components/CardProductPharmacologic/CardProductPharmacologic";
import { useEffect } from "react";
import { findProductById } from "../../features/products/filters";

export default function CardProduct() {
  function activeClassLink({ isActive }: { isActive: boolean }) {
    return `${style.tabsItemLink} ${isActive ? style.activeLink : ""}`.trim();
  }

  const { id } = useParams();

  const products = useAppSelector(findProductById(Number(id)));

  const navigateRoute = useNavigate();

  useEffect(() => {
    navigateRoute(`/${PATH_CARD_PRODUCT}/${id}/description`);
  }, [id]);

  const SWITCH_CONTENT = [
    { name: "Описание товара", to: `/${PATH_CARD_PRODUCT}/${id}/description` },
    {
      name: "Инструкции по применению",
      to: `/${PATH_CARD_PRODUCT}/${id}/instruction`,
    },
    { name: "Показания к применению", to: `/${PATH_CARD_PRODUCT}/${id}/usage` },
    {
      name: "Фармокологическое действие",
      to: `/${PATH_CARD_PRODUCT}/${id}/pharmocologic`,
    },
  ];

  if (products) {
    return (
      <div className={style.cardProduct}>
        <div className={gStyle.container}>
          <ul className={style.tabs}>
            {SWITCH_CONTENT.map((item, index) => (
              <li key={index} className={style.tabsItem}>
                <NavLink to={item.to} className={activeClassLink}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Routes>
          <Route
            index
            element={<CardProductDescription product={products} />}
          />
          <Route
            path={`description`}
            element={<CardProductDescription product={products} />}
          />
          <Route
            path={`instruction`}
            element={<CardProductInstruction instructionsUse={products.instructionsUse} name={products.name} />}
          />
          <Route
            path={`usage`}
            element={<CardProductUsage indicationsUse={products.indicationsUse} />}
          />
          <Route
            path={`pharmocologic`}
            element={<CardProductPharmacologic pharmacologicalAction={products.pharmacologicalAction} name={products.name} />}
          />
        </Routes>
      </div>
    );
  } return <></>;
}

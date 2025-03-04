import styles from './styles.module.scss';
import gStyles from "../../styles/styles.module.scss";
import {
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";
import { PATH_ADDITIONAL_INFO_PRODUCT } from "../../routes/routes";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useEffect } from "react";
import { findProductById } from "../../features/products/filters";
import AdditionalInfoProductDescription from "./components/AdditionalInfoProductDescription/CardProductDescription";
import AdditionalInfoProductInstruction from "./components/AdditionalInfoProductInstruction/AdditionalInfoProductInstruction";
import AdditionalInfoProductUsage from "./components/AdditionalInfoProductUsage/AdditionalInfoProductUsage";
import AdditionalInfoProductPharmacologic from "./components/AdditionalInfoProductPharmacologic/AdditionalInfoProductPharmacologic";
import SwitchContent from "../../components/SwitchContent/SwitchContent";
import { ADDITIONAL_INFO_PRODUCT } from "../../constants/path";

export default function AdditionalInfoProduct() {

  const { id } = useParams();

  const products = useAppSelector(findProductById(Number(id)));

  const navigateRoute = useNavigate();

  useEffect(() => {
    navigateRoute(`/${PATH_ADDITIONAL_INFO_PRODUCT}/${id}/${ADDITIONAL_INFO_PRODUCT.description}`);
  }, [id]);

  if (products) {
    return (
      <div className={styles.cardProduct}>
        <div className={gStyles.container}>
          <SwitchContent className={styles.switchPaths} links={[
            { name: ADDITIONAL_INFO_PRODUCT.description, to: `/${PATH_ADDITIONAL_INFO_PRODUCT}/${id}/${ADDITIONAL_INFO_PRODUCT.description}` },
            { name: ADDITIONAL_INFO_PRODUCT.instruction, to: `/${PATH_ADDITIONAL_INFO_PRODUCT}/${id}/${ADDITIONAL_INFO_PRODUCT.instruction}` },
            { name: ADDITIONAL_INFO_PRODUCT.usage, to: `/${PATH_ADDITIONAL_INFO_PRODUCT}/${id}/${ADDITIONAL_INFO_PRODUCT.usage}` },
            { name: ADDITIONAL_INFO_PRODUCT.pharmocologic, to: `/${PATH_ADDITIONAL_INFO_PRODUCT}/${id}/${ADDITIONAL_INFO_PRODUCT.pharmocologic}` },
          ]} />
        </div>
        <Routes>
          <Route
            index
            element={<AdditionalInfoProductDescription product={products} />}
          />
          <Route
            path={ADDITIONAL_INFO_PRODUCT.description}
            element={<AdditionalInfoProductDescription product={products} />}
          />
          <Route
            path={ADDITIONAL_INFO_PRODUCT.instruction}
            element={<AdditionalInfoProductInstruction instructionsUse={products.instructionsUse} name={products.name} />}
          />
          <Route
            path={ADDITIONAL_INFO_PRODUCT.usage}
            element={<AdditionalInfoProductUsage indicationsUse={products.indicationsUse} />}
          />
          <Route
            path={ADDITIONAL_INFO_PRODUCT.pharmocologic}
            element={<AdditionalInfoProductPharmacologic pharmacologicalAction={products.pharmacologicalAction} name={products.name} />}
          />
        </Routes>
      </div>
    );
  } return <></>;
}

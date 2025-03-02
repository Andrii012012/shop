import { useState } from "react";
import styles from "./styles.module.scss";
import gStyles from '../../../../styles/styles.module.scss';
import PopupCatalogItem from "../PopupCatalogItem/PopupCatalogItem";
import BurgerIcon from "/src/assets/images/header/burgerIcon.svg?react";
import TrashIcon from '../../../../assets/images/header/trashIcon.svg?react';
import { CATALOG_LIST } from "../../constants/catalogList";
import { PATH_CATALOG } from "../../../../routes/routes";
import { Link } from "react-router-dom";

function PopupCatalog() {
  const [isOpenСatalog, setIsOpenСatalog] = useState<boolean>(false);

  function handleClickBurgerButton() {
    setIsOpenСatalog((prev) => !prev);
  }

  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.burgerMenuButton} ${isOpenСatalog ? styles.active : ""}`}
        onClick={handleClickBurgerButton}
      >
        <BurgerIcon className={styles.icon} />
        <p className={gStyles.textBig}>Интернет-магазин</p>
      </button>

      {isOpenСatalog ? (
        <div
          className={`${styles.shopCatalogContainer} ${styles.shopCatalogMain}`}
        >
          <div className={styles.shopCatalogProducts}>
            <Link onClick={() => setIsOpenСatalog(false)} to={PATH_CATALOG} className={styles.shopCatalogProductsLink}>
              <TrashIcon />
              <span>Каталог товаров</span>
            </Link>
          </div>
          <div>
            <PopupCatalogItem setIsOpenСatalog={setIsOpenСatalog} list={CATALOG_LIST} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default PopupCatalog;
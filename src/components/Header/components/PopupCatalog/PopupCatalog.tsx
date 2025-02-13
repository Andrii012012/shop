import { useEffect, useState } from "react";

import style from "./style.module.scss";

import PopupCatalogItem from "../PopupCatalogItem/PopupCatalogItem";

import { catalogList } from "../../data/catalogList";

// IMPORT ICONS
import BurgerIcon from "/src/assets/images/header/burgerIcon.svg?react";
import TrashIcon from "/src/assets/images/header/trashIcon.svg?react";

// COMPONENT
function PopupCatalog() {
  const [isOpenСatalog, setIsOpenСatalog] = useState<boolean>(false);

  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  function toggleMenu(id: string, isOpen: boolean) {
    setOpenMenus((prev) => ({ ...prev, [id]: isOpen }));
  }

  function handleClickBurgerButton() {
    setIsOpenСatalog((prev) => !prev);
  }

  useEffect(() => {
    console.log(openMenus);
  }, [openMenus]);

  return (
    <>
      <button
        className={style.burgerMenuButton}
        onClick={handleClickBurgerButton}
      >
        <BurgerIcon style={{ fill: isOpenСatalog ? "#30B856" : undefined }} />
      </button>

      {isOpenСatalog ? (
        <div
          className={`${style.shopCatalogContainer} ${style.shopCatalogMain}`}
        >
          <div className={style.shopCatalogProducts}>
            <a href="#" className={style.shopCatalogProductsLink}>
              <TrashIcon />
              <span>Каталог товаров</span>
            </a>
          </div>

          <ul className={style.shopCatalogList}>
            {catalogList.map((item, index) => {
              return (
                <PopupCatalogItem
                  key={index}
                  item={item}
                  openMenus={openMenus}
                  toggleMenu={toggleMenu}
                />
              );
            })}
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default PopupCatalog;

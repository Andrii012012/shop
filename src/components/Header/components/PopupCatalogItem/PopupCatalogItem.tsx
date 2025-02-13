import style from "./style.module.scss";

// DATA
import { CatalogItem } from "../../interfaces/catalogItem";

// IMPORT ICONS
import ArrowChevronRightIcon from "/src/assets/images/header/arrowChevronRightIcon.svg?react";

// INTERFACE
interface PCIProps {
  item: CatalogItem;
  openMenus: Record<string, boolean>;
  toggleMenu: (id: string, isOpen: boolean) => void;
}

// COMPONENT
function PopupCatalogItem({ item, openMenus, toggleMenu }: PCIProps) {
  return (
    <li
      className={style.shopCatalogItem}
      id={item.id}
      onMouseEnter={() => toggleMenu(item.id, true)}
      // onMouseLeave={() => toggleMenu(item.id, false)}
    >
      <a href="#" className={style.shopCatalogItemLink}>
        <span>{item.name}</span>
        <ArrowChevronRightIcon />
      </a>

      {item.list?.length && openMenus[item.id] ? (
        <div className={style.shopCatalogContainer}>
          <ul className={style.shopCatalogList}>
            {item.list?.map((item, index) => {
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
    </li>
  );
}

export default PopupCatalogItem;

import style from "./style.module.scss";
import { CatalogItem } from "../../interfaces/catalogItem";
import ArrowChevronRightIcon from "/src/assets/images/header/arrowChevronRightIcon.svg?react";
interface IProps {
  item: CatalogItem;
  handleToggleItem: (id: string) => void;
}

function PopupCatalogItem(props: IProps) {

  const { item, handleToggleItem } = props;

  return (
    <li
      className={style.shopCatalogItem}
      id={item.id}
      onClick={(event) => {
        event.stopPropagation();
        handleToggleItem(item.id);
      }}
    >
      <div className={style.shopCatalogItemLink}>
        <span>{item.name}</span>
        <ArrowChevronRightIcon />
      </div>
      {item.open && item.list?.length ? (
        <div className={style.shopCatalogContainer}>
          <ul className={style.shopCatalogList}>
            {item.list?.map((item, index) => {
              return (
                <PopupCatalogItem
                  key={index}
                  item={item}
                  handleToggleItem={handleToggleItem}
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

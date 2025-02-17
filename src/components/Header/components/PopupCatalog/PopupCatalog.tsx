import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import PopupCatalogItem from "../PopupCatalogItem/PopupCatalogItem";
import BurgerIcon from "/src/assets/images/header/burgerIcon.svg?react";
import { CatalogItem } from "../../interfaces/catalogItem";
import TrashIcon from '../../../../assets/images/header/trashIcon.svg?react';
import { catalogList } from "../../constants/catalogList";
interface IProps {
  state: CatalogItem[];
  setState: React.Dispatch<React.SetStateAction<CatalogItem[]>>;
}

function PopupCatalog(props: IProps) {
  const [isOpenСatalog, setIsOpenСatalog] = useState<boolean>(false);

  const { state, setState } = props;

  function handleClickBurgerButton() {
    setIsOpenСatalog((prev) => !prev);
  }

  useEffect(() => {

    function handleClick(event: MouseEvent) {
      if (event.currentTarget !== document.querySelector(`.${styles.wrapper}`) && event.target instanceof HTMLElement && !event.target.closest(`.${styles.wrapper}`)) {
        setIsOpenСatalog(false);
        setState(catalogList);
      }
    }

    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);

  }, []);

  function handleChangeState(id: string) {
    setState((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState));

      function revel(items: CatalogItem[]) {
        for (const element of items) {
          if (element.id === id) {
            element.open = !element.open;
            return true;
          }

          if (element.list && revel(element.list)) {
            return true;
          }
        }
        return false;
      }

      revel(newState);

      return newState;
    })
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.burgerMenuButton}
        onClick={handleClickBurgerButton}
      >
        <BurgerIcon className={styles.icon} style={{ fill: isOpenСatalog ? "#30B856" : undefined }} />
      </button>

      {isOpenСatalog ? (
        <div
          className={`${styles.shopCatalogContainer} ${styles.shopCatalogMain}`}
        >
          <div className={styles.shopCatalogProducts}>
            <a href="#" className={styles.shopCatalogProductsLink}>
              <TrashIcon />
              <span>Каталог товаров</span>
            </a>
          </div>

          <div>
            <ul className={styles.shopCatalogList}>
              {state.map((item, index) => {
                return (
                  <PopupCatalogItem
                    key={index}
                    item={item}
                    handleToggleItem={handleChangeState}
                  />
                )
              })}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default PopupCatalog;
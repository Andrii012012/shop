import { CatalogItem } from "../../../../interfaces/catalogItem";
import PopupCatalogItem from "../../PopupCatalogItem";
import styles from "./styles.module.scss";
import pStyles from '../../styles.module.scss';
import ArrowChevronRightIcon from "/src/assets/images/header/arrowChevronRightIcon.svg?react";
import { useEffect, useState } from "react";

interface IProps {
  id: string;
  name: string;
  list: CatalogItem[] | null | undefined;
  index: number;
  setIsOpenСatalog: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ItemList(props: IProps) {

  const { id, name, list, index, setIsOpenСatalog } = props;

  const [isActive, setIsActive] = useState<boolean>(false);


  useEffect(() => {

    function handleClosePopup(event: MouseEvent) {
      if (event.target instanceof HTMLElement && !event.target.closest(`.${pStyles.shopCatalogList}`)) {
        setIsActive(false);
        setIsOpenСatalog(false);
      }
    }

    document.addEventListener('click', handleClosePopup);

    return () => document.removeEventListener('click', handleClosePopup);
  })

  return (
    <>
      <li
        className={`${styles.shopCatalogItem} ${isActive ? styles.activeItem : ""}`}
        id={id}
        onClick={(event) => {
          setIsActive(!isActive);
          event.stopPropagation();
        }}
      >
        <div className={styles.shopCatalogItemLink}>
          <span>{name}</span>
          <ArrowChevronRightIcon />
        </div>
      </li>
      {isActive && list && <PopupCatalogItem setIsOpenСatalog={setIsOpenСatalog} list={list} index={index + 2} />}
    </>
  );
}

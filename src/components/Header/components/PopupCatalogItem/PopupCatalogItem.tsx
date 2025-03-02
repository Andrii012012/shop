import styles from "./styles.module.scss";
import { CatalogItem } from "../../interfaces/catalogItem";
import ItemList from "./components/ItemList/ItemList";
interface IProps {
  list: CatalogItem[];
  index?: number;
  setIsOpenСatalog: React.Dispatch<React.SetStateAction<boolean>>;
}

function PopupCatalogItem(props: IProps) {

  const { list, index = 1, setIsOpenСatalog } = props;

  return (
    <ul className={`${styles.shopCatalogList} ${index > 1 ? styles.activeState : ""}`}>
      {list.map((item, index) => (
        <ItemList id={item.id} setIsOpenСatalog={setIsOpenСatalog} name={item.name} list={item.list} index={index} />
      ))}
    </ul>
  );
}

export default PopupCatalogItem;

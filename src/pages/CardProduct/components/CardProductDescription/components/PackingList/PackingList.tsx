import { IRelease } from "../../../../../../interface/interface";
import { ISettings } from "../type";
import styles from "./style.module.scss";

interface IProps {
  release: IRelease[];
  setSettings: React.Dispatch<React.SetStateAction<ISettings>>;
  settings: ISettings;
  handleChangeSettings: (key: string, value: number | string) => void;
}

export default function PackingList(props: IProps) {
  const { release, setSettings, settings, handleChangeSettings } = props;

  return (
    <ul className={styles.productDescriptionPackingList}>
      {release.map(
        (item: IRelease, _: number) =>
          item.name === settings.name &&
          item.packing.map((item: number, index: number) => (
            <li
              onClick={() => handleChangeSettings('packing', item)}
              className={
                item === settings.packing
                  ? `${styles.packingListItem} ${styles.isPackingType}`
                  : styles.packingListItem
              }
              key={index}
            >
              {item}г
            </li>
          ))
      )}
    </ul>
  );
}

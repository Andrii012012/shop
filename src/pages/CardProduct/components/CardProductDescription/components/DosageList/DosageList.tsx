import { IRelease } from "../../../../../../interface/interface";
import { ISettings } from "../type";
import styles from "./style.module.scss";

interface IProps {
  release: IRelease[];
  setSettings: React.Dispatch<React.SetStateAction<ISettings>>;
  settings: ISettings;
  handleChangeSettings: (key: string, value: number | string) => void;
}

export default function DosageList(props: IProps) {
  const { release, setSettings, settings, handleChangeSettings } = props;


  return (
    <ul className={styles.productDescriptionDosageList}>
      {release.map(
        (item: IRelease, _: number) =>
          item.name === settings.name &&
          item.dosage.map((item: number, index: number) => (
            <li
              onClick={() => handleChangeSettings('dosage', item)}
              className={
                item === settings.dosage
                  ? `${styles.dosageListItem} ${styles.isDosageType}`
                  : styles.dosageListItem
              }
              key={index}
            >
              {item}%
            </li>
          ))
      )}
    </ul>
  );
}

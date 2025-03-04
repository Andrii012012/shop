import { IRelease } from "../../../../../../interface/interface";
import { ISettings } from "../type";
import styles from "./style.module.scss";

interface IProps {
  release: IRelease[];
  setSettings: React.Dispatch<React.SetStateAction<ISettings>>;
  settings: ISettings;
  handleChangeSettings: (key: string, value: number | string ) => void;
}

export default function ReleaseList(props: IProps) {
  const { release, setSettings, settings, handleChangeSettings } = props;


  return (
    <ul className={styles.productDescriptionReleaseList}>
      {release.map(
        (item: IRelease, index: number) => (
          <li
            onClick={() => handleChangeSettings('name', item.name)}
            className={
              item.name === settings.name
                ? `${styles.releaseListItem} ${styles.isFormType}`
                : `${styles.releaseListItem}`
            }
            key={index}
          >
            <img src={`/src/assets/images/products/${item.icon}`} alt="icon" />
            <p>{item.name}</p>
          </li>
        )
      )}
    </ul>
  );
}

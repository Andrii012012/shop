import styles from "./style.module.scss";

interface IProps {
  release: string;
  manufacturer: string;
  activeIngredient: string;
  storageConditions: string;
  isRecipe: boolean;
  shelfLife: string;
}

export default function ExtraInfoProduct(props: IProps): JSX.Element {

  const { release, activeIngredient, storageConditions, isRecipe, manufacturer, shelfLife } = props;

  return (
    <div className={styles.productDescriptionInfo}>
      <ul className={styles.productDescriptionInfoList}>
        <li className={styles.infoListItem}>
          <p className={styles.infoListItemText}>
            <span className={styles.infoListItemTitle}>
              {"Форма выпуска: "}
            </span>
            {release}
          </p>
        </li>
        <li className={styles.infoListItem}>
          <p className={styles.infoListItemText}>
            <span className={styles.infoListItemTitle}>
              {"Действующее вещество: "}
            </span>
            <a href="#" className={styles.infoListItemLink}>
              {activeIngredient}
            </a>
          </p>
        </li>
        <li className={styles.infoListItem}>
          <p className={styles.infoListItemText}>
            <span className={styles.infoListItemTitle}>
              {"Срок годности: "}
            </span>
            {shelfLife}
          </p>
        </li>
        <li className={styles.infoListItem}>
          <p className={styles.infoListItemText}>
            <span className={styles.infoListItemTitle}>
              {"Условия хранения: "}
            </span>
            {storageConditions}
          </p>
        </li>
        <li className={styles.infoListItem}>
          <p className={styles.infoListItemText}>
            <span className={styles.infoListItemTitle}>
              {"Условия реализации: "}
            </span>
            {isRecipe}
          </p>
        </li>
        <li className={styles.infoListItem}>
          <p className={styles.infoListItemText}>
            <span className={styles.infoListItemTitle}>
              {"Производитель: "}
            </span>
            <a href="#" className={styles.infoListItemLink}>
              {manufacturer}
            </a>
          </p>
        </li>
      </ul>
    </div>
  );
}

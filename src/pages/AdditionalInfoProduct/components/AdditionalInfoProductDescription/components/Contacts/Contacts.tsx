import { Link } from "react-router-dom";
import styles from "./style.module.scss";

export default function Contacts() {
  return (
    <div className={styles.productDescriptionPriceContacts}>
      <ul className={styles.contactsListInfo}>
        <li className={styles.contactsListInfoItem}>
          <Link to="#" className={styles.contactsListInfoLink}>
            Информация по доставке
          </Link>
        </li>
        <li className={styles.contactsListInfoItem}>
          <Link to="#" className={styles.contactsListInfoLink}>
            Информация по самовывозу
          </Link>
        </li>
      </ul>
      <div className={styles.contactsTimeInfo}>
        <p className={styles.contactsTimeInfoTitle}>Время работы:</p>
        <p className={styles.contactsTimeInfoText}>
          ежедневно с 8:00 до 22:00
        </p>
      </div>
      <div className={styles.contactsPhoneInfo}>
        <p className={styles.contactsPhoneInfoTitle}>
          Телефон для справок:
        </p>
        <a href="tel:+74752751410" className={styles.phoneLink}>
          +7 (4752) 75‒14‒10
        </a>
        <a href="tel:+74752751025" className={styles.phoneLink}>
          +7 (4752) 75‒10‒25
        </a>
      </div>
    </div>
  );
}

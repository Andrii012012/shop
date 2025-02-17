import styles from "./styles.module.scss";
import { NAVIGATE_ITEMS } from "../../constants/catalogList";
import { Link } from "react-router-dom";

function NavigateMenu() {

  return (
    <ul className={styles.headerNavList}>
      {NAVIGATE_ITEMS.map((item, index) => (
        <li key={index} className={styles.headerNavItem}>
          <Link to={item.to} className={styles.headerNavLink}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavigateMenu;
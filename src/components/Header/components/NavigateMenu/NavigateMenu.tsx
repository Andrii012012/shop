import styles from "./styles.module.scss";
import { NAVIGATE_ITEMS } from "../../constants/catalogList";
import { NavLink } from "react-router-dom";

function NavigateMenu() {

  return (
    <ul className={styles.headerNavList}>
      {NAVIGATE_ITEMS.map((item, index) => (
        <li key={index} className={styles.headerNavItem}>
          <NavLink to={item.to} className={({isActive}) => `${styles.headerNavLink} ${isActive ? styles.active : ""}`}>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavigateMenu;
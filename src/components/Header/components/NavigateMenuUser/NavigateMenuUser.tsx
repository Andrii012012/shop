import { NAVIGATE_MENU_USER } from "../../constants/catalogList";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

function NavigateMenuUser() {

  return (
    <ul className={styles.headerActions}>
      {NAVIGATE_MENU_USER.map((item, index) => (
        <li key={index} className={styles.headerActionFavorites}>
          <Link to={item.to} className={styles.headerActionFavoritesLink}>
            {item.image}
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavigateMenuUser;
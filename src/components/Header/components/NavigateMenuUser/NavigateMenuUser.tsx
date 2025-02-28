import styles from "./styles.module.scss";
import HeartIcon from "../../../../assets/images/header/heartIcon.svg?react";
import TrashIcon from "../../../../assets/images/header/trashIcon.svg?react";
import UserIcon from "../../../../assets/images/header/userIcon.svg?react";
import { NavLink } from "react-router-dom";
import { PATH_ACCOUNT, PATH_BASKET, PATH_LIKED } from "../../../../routes/routes";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { LogoutUser } from "../../../../features/user/user";

interface IProps {
  setModalLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavigateMenuUser(props: IProps): JSX.Element {

  const { setModalLogin } = props;

  const dataUser = useAppSelector((state) => state.user.user);

  const dispatch = useAppDispatch();

  return (
    <ul className={styles.headerActions}>
      <li className={styles.headerActionFavorites}>
        <NavLink to={PATH_LIKED} className={({ isActive }) => `${styles.headerActionFavoritesLink} ${isActive ? styles.active : ""}`}>
          <HeartIcon />
          Избранное
        </NavLink>
      </li>
      <li className={styles.headerActionFavorites}>
        <NavLink to={PATH_BASKET} className={({ isActive }) => `${styles.headerActionFavoritesLink} ${isActive ? styles.active : ""}`}>
          <TrashIcon />
          Корзина
        </NavLink>
      </li>
      {!dataUser ? <li onClick={() => setModalLogin(true)} className={styles.headerActionFavorites}>
        <NavLink to="" className={({ isActive }) => `${styles.headerActionFavoritesLink} ${isActive ? styles.active : ""}`}>
          <UserIcon />
          Войти
        </NavLink>
      </li> : <li onClick={() => dispatch(LogoutUser())} className={styles.headerActionFavorites}>
        <NavLink to={PATH_ACCOUNT} className={({ isActive }) => `${styles.headerActionFavoritesLink} ${isActive ? styles.active : ""}`}>
          <UserIcon />
          Выйти
        </NavLink>
      </li>}

    </ul>
  );
}

export default NavigateMenuUser;
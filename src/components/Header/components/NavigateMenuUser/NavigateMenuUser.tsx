import styles from "./styles.module.scss";
import HeartIcon from "../../../../assets/images/header/heartIcon.svg?react";
import TrashIcon from "../../../../assets/images/header/trashIcon.svg?react";
import UserIcon from "../../../../assets/images/header/userIcon.svg?react";
import { Link } from "react-router-dom";
import { PATH_ACCOUNT, PATH_BASKET } from "../../../../routes/routes";
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
        <Link to={""} className={styles.headerActionFavoritesLink}>
          <HeartIcon />
          Избранное
        </Link>
      </li>
      <li className={styles.headerActionFavorites}>
        <Link to={PATH_BASKET} className={styles.headerActionFavoritesLink}>
          <TrashIcon />
          Корзина
        </Link>
      </li>
      {!dataUser ? <li onClick={() => setModalLogin(true)} className={styles.headerActionFavorites}>
        <Link to='' className={styles.headerActionFavoritesLink}>
          <UserIcon />
          Войти
        </Link>
      </li> : <li onClick={() => dispatch(LogoutUser())} className={styles.headerActionFavorites}>
        <Link to='' className={styles.headerActionFavoritesLink}>
          <UserIcon />
          Выйти
        </Link>
      </li>}

    </ul>
  );
}

export default NavigateMenuUser;
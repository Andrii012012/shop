import { useState } from "react";
import styles from "./styles.module.scss";
import Button from "../../../ui/Button/Button";
import gStyles from '../../../../styles/styles.module.scss';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

interface IProps {
  setModalLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PortalLoginRegister(props: IProps): JSX.Element {

  const { setModalLogin } = props;

  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <div className={styles.content}>
          <div className={styles.header}>
            <Button
              onClick={() => setIsLogin(true)}
              className={`${styles.buttonSwitch} ${gStyles.textLarge} ${isLogin ? styles.active : ""}`}
              title='Вход' />
            <Button
              onClick={() => setIsLogin(false)}
              className={`${styles.buttonSwitch} ${gStyles.textLarge} ${!isLogin ? styles.active : ""}`}
              title='Регистрация' />
          </div>
          {isLogin ? <Login setModalLogin={setModalLogin} /> : <Register setModalLogin={setModalLogin}/>}
        </div>
      </div>
    </div>
  );
}

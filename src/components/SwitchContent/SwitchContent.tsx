import { NavLink } from "react-router-dom";
import gStyles from "../../styles/styles.module.scss";
import styles from "./style.module.scss";

interface IProps {
  links: { name: string; to: string }[];
  className?: string;
  disabled?: { index: number, color: string }[];
}

export default function SwitchContent(props: IProps): JSX.Element {

  const { links, className = '', disabled = [] } = props;

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <ul className={styles.list}>
        {links.map((item, index) => {
          if (disabled.length && disabled[index].index === index) {
            return (
              <li style={{ flex: `1 1 ${100 / links.length}%`, pointerEvents: 'none' }} className={gStyles.textBig} key={index}>
                <NavLink style={{ color: disabled[index].color }} className={({ isActive }) => isActive ? styles.activeLink : ""} to={item.to}>{item.name}</NavLink>
              </li>
            )
          } else {
            return (
              <li style={{ flex: `1 1 ${100 / links.length}%` }} className={gStyles.textBig} key={index}>
                <NavLink className={({ isActive }) => isActive ? styles.activeLink : ""} to={item.to}>{item.name}</NavLink>
              </li>
            )
          }
        })}
      </ul>
    </div>
  );
}

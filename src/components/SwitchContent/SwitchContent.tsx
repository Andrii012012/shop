import { NavLink } from "react-router-dom";
import gStyles from "../../styles/styles.module.scss";
import styles from "./style.module.scss";

interface IProps {
  links: { name: string; to: string }[];
  className?: string;
}

export default function SwitchContent(props: IProps): JSX.Element {

  const { links, className = '' } = props;

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <ul className={styles.list}>
        {links.map((item, index) => (
          <li style={{ flex: `1 1 ${100 / links.length}%` }} className={gStyles.textBig} key={index}>
            <NavLink className={({ isActive }) => isActive ? styles.activeLink : ""} to={item.to}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

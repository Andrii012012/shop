import { Link } from "react-router-dom";
import gStyles from '../../../../styles/styles.module.scss';
import { TItemMenu } from "../../type";
import styles from "./style.module.scss";

interface IProps {
  className?: string;
  menuList: TItemMenu[];
  title?: string;
}

export default function MenuList(props: IProps): JSX.Element {

  const { className = "", menuList, title = "" } = props;

  return (
    <ul className={`${styles.list} ${className}`}>
      <li className={`${styles.title} ${gStyles.textMedium}`}>{title}</li>
      {menuList.map((item, index) => (
        <li key={index} className={styles.item}>
          <Link to={item.to}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}


import { Link } from "react-router-dom";
import gStyles from "../../styles/styles.module.scss";
import IconHouse from '../../assets/images/global/iconHouse.svg?react';
import IconArrow from '../../assets/images/global/iconArrowGreen.svg?react';
import styles from "./style.module.scss";

interface IProps {
  links: { name: string; to: string }[];
  className?: string;
}

export default function Navigate(props: IProps): JSX.Element {

  const { links, className = '' } = props;

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <ul className={styles.list}>
        <li className={gStyles.textMedium}>
          <IconHouse className={styles.iconHouse} />
          <Link to='/'>Главная</Link>
        </li>
        {links.map((item, index) => (
          <li className={gStyles.textMedium} key={index}>
            <IconArrow />
            <Link to={item.to}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

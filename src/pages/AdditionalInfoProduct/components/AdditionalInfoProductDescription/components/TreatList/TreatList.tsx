import styles from "./style.module.scss";

interface IProps {
  cures: string[];
}

export default function TreatList(props: IProps) {
  const { cures } = props;


  return (
    <ul className={styles.productDescriptionCuresList}>
      {cures.map((item: string, index: number) => (
        <li className={styles.curesListItem} key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
}

import styles from "./style.module.scss";
import gStyles from '../../../../../../styles/styles.module.scss';

interface IProps {
  header: string[];
}

export default function TableHeader(props: IProps) {
  const { header } = props;

  return (
    <tr className={styles.instructionTableHead}>
      {header.map((item, index) => (
        <th className={`${styles.instructionTableColumn} ${gStyles.textBig}`} key={index}>
          {item}
        </th>
      ))}
    </tr>
  );
}

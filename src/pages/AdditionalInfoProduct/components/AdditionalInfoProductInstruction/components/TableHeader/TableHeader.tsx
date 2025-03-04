import styles from "./style.module.scss";

interface IProps {
  header: string[];
}

export default function TableHeader(props: IProps) {
  const { header } = props;

  return (
    <thead className={styles.instructionTableHeader}>
      <tr className={styles.instructionTableHead}>
        {header.map((item, index) => (
          <th className={styles.instructionTableColumn} key={index}>
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
}

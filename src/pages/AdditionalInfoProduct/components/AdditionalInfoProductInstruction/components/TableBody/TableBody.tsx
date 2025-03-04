import styles from "./style.module.scss";

interface IProps {
  body: string[];
}

export default function TableBody(props: IProps) {
  const { body } = props;

  return (
    <tbody className={styles.instructionTableBody}>
      <tr className={styles.instructionTableRow}>
        {body.map((item, index) => (
          <td className={styles.instructionTableColumnBody} key={index}>
            {item}
          </td>
        ))}
      </tr>
    </tbody>
  );
}

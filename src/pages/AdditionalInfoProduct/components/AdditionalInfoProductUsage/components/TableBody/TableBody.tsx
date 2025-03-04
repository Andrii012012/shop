import styles from "./style.module.scss";

interface IProps {
  body: string[][];
}

export default function TableBody(props: IProps) {
  const { body } = props;

  return (
    <tbody className={styles.instructionTableBody}>
      {body.map((item, _) =>
        <tr className={styles.instructionTableRow}>
          {item.map((item, _) => (
            <td className={styles.instructionTableColumnBody}>{item}</td>
          ))}
        </tr>
      )}
    </tbody>
  );
}

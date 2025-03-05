import styles from "./style.module.scss";
import gStyles from "../../../../styles/styles.module.scss";
import { IInstructionsUse } from "../../../../interface/interface";
import Description from "./components/Description/Description";
import TableHeader from "./components/TableHeader/TableHeader";
import TableBody from "./components/TableBody/TableBody";

interface IProps {
  instructionsUse: IInstructionsUse[];
  name: string;
}

export default function AdditionalInfoProductInstruction(props: IProps) {
  const { instructionsUse, name } = props;

  return (
    <div className={styles.cardProductInstruction}>
      <div className={gStyles.container}>
        <main className={styles.cardProductInstructionMain}>
          <h1 className={styles.instructionTitle}>{name}</h1>
          {instructionsUse.map((item, _) => (
            <>
              <Description description={item.description} />
              {item.table && <table className={styles.instructionTable}>
                <TableHeader header={item.table?.header} />
                <TableBody body={item.table?.body} />
              </table>}
            </>
          ))}
        </main>
      </div>
    </div>
  );
}

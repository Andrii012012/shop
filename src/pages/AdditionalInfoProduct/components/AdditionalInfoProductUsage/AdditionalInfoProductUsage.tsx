import styles from "./style.module.scss";
import gStyles from "../../../../styles/styles.module.scss";
import { IIndicationsUse } from "../../../../interface/interface";
import Description from "./components/Description/Description";
import TableHeader from "./components/TableHeader/TableHeader";
import TableBody from "./components/TableBody/TableBody";
import Recommendation from "./components/Recommendation/Recommendation";

interface IProps {
  indicationsUse: IIndicationsUse[];
}

export default function AdditionalInfoProductUsage(props: IProps) {
  const { indicationsUse } = props;

  return (
    <div className={styles.cardProductUsage}>
      <div className={gStyles.container}>
        {indicationsUse.map((item, _) => (
          <div className={styles.body}>
            <Description description={item.description} />
            {item.table && <table className={`${styles.table} ${item.recommendation ? styles.tableActive : ""}`}>
              <TableHeader header={item.table.header} />
              <TableBody body={item.table.body} />
            </table>}
            <Recommendation recommendation={item.recommendation} />
          </div>
        ))}
      </div>
    </div>
  );
}

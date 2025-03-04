import styles from "./style.module.scss";
import gStyles from "../../../../styles/styles.module.scss";
import getHTMLStructure from "../../../../utils/js/getHTMLStructure";

interface IProps {
  pharmacologicalAction: string[];
  name: string;
}

export default function AdditionalInfoProductPharmacologic(props: IProps) {
  const { pharmacologicalAction, name } = props;

  return (
    <div className={styles.cardProductPharmacologic}>
      <div className={gStyles.container}>
        <div className={`${styles.cardProductPharmacologicMain}`}>
          <h1 className={`${styles.pharmacologicTitle} ${gStyles.textExtraLarge}`}>
            {name}
          </h1>
          <div className={`${styles.description} ${gStyles.textExtraMedium}`}>
            {pharmacologicalAction.map((item, _) => (
              <>{getHTMLStructure(item)}</>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

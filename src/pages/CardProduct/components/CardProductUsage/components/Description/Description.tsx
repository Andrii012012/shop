import styles from "./style.module.scss";
import gStyles from '../../../../../../styles/styles.module.scss';
import getHTMLStructure from "../../../../../../utils/js/getHTMLStructure";

interface IProps {
  description: string[];
}

export default function Description(props: IProps) {
  const { description } = props;

  return (
    <div className={`${styles.description} ${gStyles.textExtraMedium}`}>
      {
        description.map((item, _) => (
          getHTMLStructure(item)
        ))
      }
    </div>
  );
}

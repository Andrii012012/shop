import styles from "./style.module.scss";
import gStyles from '../../../../../../styles/styles.module.scss';

interface IProps {
  recommendation: string[] | null;
}

export default function Recommendation(props: IProps) {
  const { recommendation } = props;

  if (recommendation) {
    return (
      <div className={`${styles.recommendation} ${gStyles.textExtraMedium}`}>{
        recommendation.map((item, _) => (
          <div>{item}</div>
        ))
      }</div>
    );
  } return <></>;
}

import styles from "./style.module.scss";
import gStyle from "../../../../styles/styles.module.scss";

function CardProductPharmacologic(prop) {
  const { product } = prop;

  return (
    <div className={styles.cardProductPharmacologic}>
      <div className={gStyle.container}>
        <div className={styles.cardProductPharmacologicMain}>
          <h1 className={styles.pharmacologicTitle}>
            {product.name}, 30 мг - показания к применению
          </h1>
          <div className={styles.pharmacologicParagraphBlock}>
            <p className={styles.pharmacologicParagraph}>
              {product.pharmacologicalAction.paragraph1.text}
            </p>
          </div>
          <div className={styles.pharmacologicParagraphBlock}>
            <p className={styles.pharmacologicParagraph}>
              {product.pharmacologicalAction.paragraph2.text}
            </p>
          </div>
          <div className={styles.pharmacologicParagraphBlock}>
            <p className={styles.pharmacologicParagraph}>
              {product.pharmacologicalAction.paragraph3.text}
            </p>
          </div>
          <h3 className={styles.pharmacologicTitleH3}>
            {product.pharmacologicalAction.titleOne}
          </h3>
          <div className={styles.pharmacologicParagraphBlock}>
            <p className={styles.pharmacologicParagraph}>
              <span className={styles.pharmacologicParagraphTitle}>
                {product.pharmacologicalAction.paragraph4.titleText}
              </span>
            </p>
            <p className={styles.pharmacologicParagraph}>
              {product.pharmacologicalAction.paragraph4.text}
            </p>
            <p className={styles.pharmacologicParagraph}>
              {product.pharmacologicalAction.paragraph5.text}
            </p>
            <p className={styles.pharmacologicParagraph}>
              <span className={styles.pharmacologicParagraphTitle}>
                {product.pharmacologicalAction.paragraph6.titleText}
              </span>
            </p>
            <p className={styles.pharmacologicParagraph}>
              {product.pharmacologicalAction.paragraph6.text}
            </p>
            <p className={styles.pharmacologicParagraph}>
              <span className={styles.pharmacologicParagraphTitle}>
                {product.pharmacologicalAction.paragraph7.titleText}
              </span>
            </p>
            <p className={styles.pharmacologicParagraph}>
              {product.pharmacologicalAction.paragraph7.text}
            </p>
            <p className={styles.pharmacologicParagraph}>
              <span className={styles.pharmacologicParagraphTitle}>
                {product.pharmacologicalAction.paragraph8.titleText}
              </span>
            </p>
            <p className={styles.pharmacologicParagraph}>
              {product.pharmacologicalAction.paragraph8.text}
            </p>
          </div>
          <h3 className={styles.pharmacologicTitleH3}>
            {product.pharmacologicalAction.titleTwo}
          </h3>
          <div className={styles.pharmacologicParagraphBlock}>
            <p className={styles.pharmacologicParagraph}>
              {product.pharmacologicalAction.paragraph9.text}
            </p>
            <p className={styles.pharmacologicParagraph}>
              {product.pharmacologicalAction.paragraph10.text}
            </p>
            <p className={styles.pharmacologicParagraph}>
              {product.pharmacologicalAction.paragraph11.text}
            </p>
          </div>
          <div className={styles.pharmacologicParagraphBlock}>
            <p className={styles.pharmacologicParagraph}>
              {product.pharmacologicalAction.paragraph12.text}
            </p>
            <p className={styles.pharmacologicParagraph}>
              {product.pharmacologicalAction.paragraph13.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProductPharmacologic;

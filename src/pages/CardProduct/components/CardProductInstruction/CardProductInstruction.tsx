import styles from "./style.module.scss";
import gStyle from "../../../../styles/styles.module.scss";

function CardProductInstruction(prop) {
  const { product } = prop;

  return (
    <div className={styles.cardProductInstruction}>
      <div className={gStyle.container}>
        <main className={styles.cardProductInstructionMain}>
          <h1 className={styles.instructionTitle}>{product.name}</h1>
          <div className={styles.instructionParagraphBlock}>
            <p className={styles.instructionParagraph}>
              <span className={styles.instructionParagraphTitle}>
                {product.instructionsUse.paragraph1.titleText}
              </span>
              {product.instructionsUse.paragraph1.text}
            </p>
          </div>
          <table className={styles.instructionTable}>
            <thead className={styles.instructionTableHeader}>
              <tr className={styles.instructionTableRow}>
                {product.instructionsUse.table1.header.map((item, index) => (
                  <th className={styles.instructionTableColumn} key={index}>
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={styles.instructionTableBody}>
              <tr className={styles.instructionTableRow}>
                {product.instructionsUse.table1.body.map((item, index) => (
                  <td className={styles.instructionTableColumn} key={index}>
                    {item}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          <div className={styles.instructionParagraphBlock}>
            <p className={styles.instructionParagraph}>
              <span className={styles.instructionParagraphTitle}>
                {product.instructionsUse.paragraph2.titleTextOne}
              </span>
              {product.instructionsUse.paragraph2.textOne}
            </p>
            <p className={styles.instructionParagraph}>
              <span className={styles.instructionParagraphTitle}>
                {product.instructionsUse.paragraph2.titleTextTwo}
              </span>
              {product.instructionsUse.paragraph2.textTwo}
            </p>
            <p className={styles.instructionParagraph}>
              {product.instructionsUse.paragraph2.textThree}
            </p>
            <p className={styles.instructionParagraph}>
              {product.instructionsUse.paragraph2.textFour}
            </p>
          </div>
          <div className={styles.instructionParagraphBlock}>
            <p className={styles.instructionParagraph}>
              <span className={styles.instructionParagraphTitle}>
                {product.instructionsUse.paragraph3.titleText}
              </span>
              {product.instructionsUse.paragraph3.text}
            </p>
          </div>
          <table className={styles.instructionTable}>
            <thead className={styles.instructionTableHeader}>
              <tr className={styles.instructionTableRow}>
                {product.instructionsUse.table2.header.map((item, index) => (
                  <th className={styles.instructionTableColumn} key={index}>
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={styles.instructionTableBody}>
              <tr className={styles.instructionTableRow}>
                {product.instructionsUse.table2.body.map((item, index) => (
                  <td className={styles.instructionTableColumn} key={index}>
                    {item}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          <div className={styles.instructionParagraphBlock}>
            <p className={styles.instructionParagraph}>
              <span className={styles.instructionParagraphTitle}>
                {product.instructionsUse.paragraph4.titleTextOne}
              </span>
              {product.instructionsUse.paragraph4.textOne}
            </p>
            <p className={styles.instructionParagraph}>
              <span className={styles.instructionParagraphTitle}>
                {product.instructionsUse.paragraph4.titleTextTwo}
              </span>
              {product.instructionsUse.paragraph4.textTwo}
            </p>
            <p className={styles.instructionParagraph}>
              {product.instructionsUse.paragraph4.textThree}
            </p>
            <p className={styles.instructionParagraph}>
              {product.instructionsUse.paragraph4.textFour}
            </p>
          </div>
          <div className={styles.instructionParagraphBlock}>
            <p className={styles.instructionParagraph}>
              <span className={styles.instructionParagraphTitle}>
                {product.instructionsUse.paragraph5.titleText}
              </span>
              {product.instructionsUse.paragraph5.text}
            </p>
          </div>
          <table className={styles.instructionTable}>
            <thead className={styles.instructionTableHeader}>
              <tr className={styles.instructionTableRow}>
                {product.instructionsUse.table3.header.map((item, index) => (
                  <th className={styles.instructionTableColumn} key={index}>
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={styles.instructionTableBody}>
              <tr className={styles.instructionTableRow}>
                {product.instructionsUse.table3.body.map((item, index) => (
                  <td className={styles.instructionTableColumn} key={index}>
                    {item}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          <div className={styles.instructionParagraphBlock}>
            <p className={styles.instructionParagraph}>
              <span className={styles.instructionParagraphTitle}>
                {product.instructionsUse.paragraph6.titleTextOne}
              </span>
              {product.instructionsUse.paragraph6.textOne}
            </p>
            <p className={styles.instructionParagraph}>
              <span className={styles.instructionParagraphTitle}>
                {product.instructionsUse.paragraph6.titleTextTwo}
              </span>
              {product.instructionsUse.paragraph6.textTwo}
            </p>
            <p className={styles.instructionParagraph}>
              {product.instructionsUse.paragraph6.textThree}
            </p>
            <p className={styles.instructionParagraph}>
              {product.instructionsUse.paragraph6.textFour}
            </p>
          </div>
          <div className={styles.instructionParagraphBlock}>
            <p className={styles.instructionParagraph}>
              <span className={styles.instructionParagraphTitle}>
                {product.instructionsUse.paragraph7.titleText}
              </span>
              {product.instructionsUse.paragraph7.text}
            </p>
          </div>
          <table className={styles.instructionTable}>
            <thead className={styles.instructionTableHeader}>
              <tr className={styles.instructionTableRow}>
                {product.instructionsUse.table4.header.map((item, index) => (
                  <th className={styles.instructionTableColumn} key={index}>
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={styles.instructionTableBody}>
              <tr className={styles.instructionTableRow}>
                {product.instructionsUse.table4.body.map((item, index) => (
                  <td className={styles.instructionTableColumn} key={index}>
                    {item}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          <div className={styles.instructionParagraphBlock}>
            <p className={styles.instructionParagraph}>
              <span className={styles.instructionParagraphTitle}>
                {product.instructionsUse.paragraph8.titleText}
              </span>
              {product.instructionsUse.paragraph8.text}
            </p>
            <p className={styles.instructionParagraph}>
              {product.instructionsUse.paragraph9.text}
            </p>
          </div>
          <div className={styles.instructionParagraphBlock}>
            <p className={styles.instructionParagraph}>
              <span className={styles.instructionParagraphTitle}>
                {product.instructionsUse.paragraph10.titleText}
              </span>
              {product.instructionsUse.paragraph10.text}
            </p>
            <p className={styles.instructionParagraph}>
              <span className={styles.instructionParagraphTitle}>
                {product.instructionsUse.paragraph11.titleText}
              </span>
              {product.instructionsUse.paragraph11.text}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CardProductInstruction;

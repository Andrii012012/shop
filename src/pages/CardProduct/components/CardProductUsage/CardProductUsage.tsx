import styles from "./style.module.scss";
import gStyle from "../../../../styles/styles.module.scss";

function CardProductUsage(prop) {
  const { product } = prop;

  return (
    <div className={styles.cardProductUsage}>
      <div className={gStyle.container}>
        <div className={styles.cardProductUsageMain}>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              <span className={styles.usageParagraphTitle}>
                {product.indicationsUse.paragraph1.titleText}
              </span>
              {product.indicationsUse.paragraph1.text}
            </p>
          </div>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              <span className={styles.usageParagraphTitle}>
                {product.indicationsUse.paragraph2.titleText}
              </span>
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph3.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph4.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph5.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph6.text}
            </p>
          </div>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph7.text}
            </p>
          </div>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              <span className={styles.usageParagraphTitle}>
                {product.indicationsUse.paragraph8.titleText}
              </span>
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph8.text}
            </p>
          </div>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              <span className={styles.usageParagraphTitle}>
                {product.indicationsUse.paragraph9.titleTextOne}
              </span>
            </p>
            <p className={styles.usageParagraph}>
              <span className={styles.usageParagraphTitle}>
                {product.indicationsUse.paragraph9.titleTextTwo}
              </span>
              {product.indicationsUse.paragraph9.text}
            </p>
          </div>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              <span className={styles.usageParagraphTitle}>
                {product.indicationsUse.paragraph10.titleText}
              </span>
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph10.textOne}
              <span className={styles.usageParagraphBold}>
                {product.indicationsUse.paragraph10.textBold}
              </span>
              {product.indicationsUse.paragraph10.textTwo}
            </p>
          </div>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph11.textOne}
              <span className={styles.usageParagraphBold}>
                {product.indicationsUse.paragraph11.textBold}
              </span>
              {product.indicationsUse.paragraph11.textTwo}
            </p>
          </div>
          <table className={styles.usageTable}>
            <thead className={styles.usageTableHeader}>
              <tr className={styles.usageTableRow}>
                {product.indicationsUse.table1.header.map((item, index) => (
                  <th className={styles.usageTableHeaderColumn} key={index}>
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={styles.usageTableBody}>
              {product.indicationsUse.table1.body.map((item, index) => (
                <tr className={styles.usageTableRow}>
                  {item.map((item, index) => (
                    <td className={styles.usageTableColumn} key={index}>
                      {item}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              <span className={styles.usageParagraphTitle}>
                {product.indicationsUse.paragraph12.titleText}
              </span>
              {product.indicationsUse.paragraph12.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph13.textOne}
              <span className={styles.usageParagraphBold}>
                {product.indicationsUse.paragraph13.textBold}
              </span>
              {product.indicationsUse.paragraph13.textTwo}
            </p>
          </div>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph14.text}
            </p>
          </div>
          <table className={styles.usageTable}>
            <thead className={styles.usageTableHeader}>
              <tr className={styles.usageTableRow}>
                {product.indicationsUse.table2.header.map((item, index) => (
                  <th className={styles.usageTableHeaderColumn} key={index}>
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={styles.usageTableBody}>
              {product.indicationsUse.table2.body.map((item, index) => (
                <tr className={styles.usageTableRow}>
                  {item.map((item, index) => (
                    <td className={styles.usageTableColumn} key={index}>
                      {item}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              <span className={styles.usageParagraphBold}>
                {product.indicationsUse.paragraph15.textBold}
              </span>
              {product.indicationsUse.paragraph15.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph16.text}
            </p>
          </div>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              <span className={styles.usageParagraphBold}>
                {product.indicationsUse.paragraph17.textBold}
              </span>
              {product.indicationsUse.paragraph17.text}
            </p>
            <p className={styles.usageParagraph}>
              <span className={styles.usageParagraphBold}>
                {product.indicationsUse.paragraph18.textBold}
              </span>
              {product.indicationsUse.paragraph18.text}
            </p>
            <p className={styles.usageParagraph}>
              <span className={styles.usageParagraphBold}>
                {product.indicationsUse.paragraph19.textBold}
              </span>
              {product.indicationsUse.paragraph19.text}
            </p>
          </div>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph20.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph21.text}
            </p>
            <p className={styles.usageParagraph}>
              <span className={styles.usageParagraphTitle}>
                {product.indicationsUse.paragraph22.titleText}
              </span>
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph22.text}
            </p>
            <p className={styles.usageParagraph}>
              <span className={styles.usageParagraphBold}>
                {product.indicationsUse.paragraph23.textBold}
              </span>
              {product.indicationsUse.paragraph23.text}
            </p>
          </div>
          <table className={`${styles.usageTable} ${styles.usageTableThree}`}>
            <thead className={styles.usageTableHeader}>
              <tr className={styles.usageTableRow}>
                {product.indicationsUse.table3.header.map((item, index) => (
                  <th className={styles.usageTableHeaderColumn} key={index}>
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={styles.usageTableBody}>
              {product.indicationsUse.table3.body.map((item, index) => (
                <tr className={styles.usageTableRow}>
                  {item.map((item, index) => (
                    <td className={styles.usageTableColumn} key={index}>
                      {item}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph24.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph25.text}
            </p>
          </div>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              <span className={styles.usageParagraphBold}>
                {product.indicationsUse.paragraph26.textBold}
              </span>
              {product.indicationsUse.paragraph26.text}
            </p>
            <p className={styles.usageParagraph}>
              <span className={styles.usageParagraphBold}>
                {product.indicationsUse.paragraph27.textBold}
              </span>
              {product.indicationsUse.paragraph27.text}
            </p>
            <p className={styles.usageParagraph}>
              <span className={styles.usageParagraphBold}>
                {product.indicationsUse.paragraph28.textBold}
              </span>
              {product.indicationsUse.paragraph28.text}
            </p>
          </div>
          <h3 className={styles.usageTitleH3}>
            {product.indicationsUse.titleOne}
          </h3>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph29.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph30.text}
            </p>
          </div>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph31.text}
            </p>
          </div>
          <h3 className={styles.usageTitleH3}>
            {product.indicationsUse.titleTwo}
          </h3>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph32.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph33.text}
            </p>
          </div>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              <span className={styles.usageParagraphBold}>
                {product.indicationsUse.paragraph34.textBold}
              </span>
              {product.indicationsUse.paragraph34.text}
            </p>
            <p className={styles.usageParagraph}>
              <span className={styles.usageParagraphBold}>
                {product.indicationsUse.paragraph35.textBold}
              </span>
              {product.indicationsUse.paragraph35.text}
            </p>
            <p className={styles.usageParagraph}>
              <span className={styles.usageParagraphBold}>
                {product.indicationsUse.paragraph36.textBold}
              </span>
              {product.indicationsUse.paragraph36.text}
            </p>
            <p className={styles.usageParagraph}>
              <span className={styles.usageParagraphBold}>
                {product.indicationsUse.paragraph37.textBold}
              </span>
              {product.indicationsUse.paragraph37.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph38.text}
            </p>
            <p className={styles.usageParagraph}>
              <span className={styles.usageParagraphBold}>
                {product.indicationsUse.paragraph39.textBold}
              </span>
              {product.indicationsUse.paragraph39.text}
            </p>
          </div>
          <h3 className={styles.usageTitleH3}>
            {product.indicationsUse.titleThree}
          </h3>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph40.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph41.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph42.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph43.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph44.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph45.text}
            </p>
          </div>
          <h3 className={styles.usageTitleH3}>
            {product.indicationsUse.titleFour}
          </h3>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph46.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph47.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph48.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph49.text}
            </p>
          </div>
          <h3 className={styles.usageTitleH3}>
            {product.indicationsUse.titleFive}
          </h3>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph50.text}
            </p>
            <p className={styles.usageParagraph}>
              <span className={styles.usageParagraphBold}>
                {product.indicationsUse.paragraph51.textBold}
              </span>
              {product.indicationsUse.paragraph51.text}
            </p>
          </div>
          <h3 className={styles.usageTitleH3}>
            {product.indicationsUse.titleSix}
          </h3>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              <span className={styles.usageParagraphBold}>
                {product.indicationsUse.paragraph52.textBold}
              </span>
              {product.indicationsUse.paragraph52.text}
            </p>
          </div>
          <table className={`${styles.usageTable} ${styles.usageTableFour}`}>
            <thead className={styles.usageTableHeader}>
              <tr className={styles.usageTableRow}>
                {product.indicationsUse.table4.header.map((item, index) => (
                  <th className={styles.usageTableHeaderColumn} key={index}>
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={styles.usageTableBody}>
              {product.indicationsUse.table4.body.map((item, index) => (
                <tr className={styles.usageTableRow}>
                  {item.map((item, index) => (
                    <td className={styles.usageTableColumn} key={index}>
                      {item}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph53.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph54.text}
            </p>
          </div>
          <h3 className={styles.usageTitleH3}>
            {product.indicationsUse.titleSeven}
          </h3>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph55.text}
            </p>
          </div>
          <h3 className={styles.usageTitleH3}>
            {product.indicationsUse.titleEight}
          </h3>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              <span className={styles.usageParagraphBold}>
                {product.indicationsUse.paragraph56.textBold}
              </span>
              {product.indicationsUse.paragraph56.text}
            </p>
          </div>
          <h3 className={styles.usageTitleH3}>
            {product.indicationsUse.titleNine}
          </h3>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph57.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph58.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph59.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph60.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph61.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph62.text}
            </p>
          </div>
          <h3 className={styles.usageTitleH3}>
            {product.indicationsUse.titleTen}
          </h3>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph63.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph64.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph65.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph66.text}
            </p>
          </div>
          <h3 className={styles.usageTitleH3}>
            {product.indicationsUse.titleEleven}
          </h3>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              <span className={styles.usageParagraphBold}>
                {product.indicationsUse.paragraph67.textBold}
              </span>
              {product.indicationsUse.paragraph67.text}
            </p>
            <p className={styles.usageParagraph}>
              <span className={styles.usageParagraphBold}>
                {product.indicationsUse.paragraph68.textBold}
              </span>
              {product.indicationsUse.paragraph68.text}
            </p>
          </div>
          <h3 className={styles.usageTitleH3}>
            {product.indicationsUse.titleTwelve}
          </h3>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph69.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph70.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph71.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph72.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph73.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph74.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph75.text}
            </p>
          </div>
          <h3 className={styles.usageTitleH3}>
            {product.indicationsUse.titleThirteen}
          </h3>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph76.text}
            </p>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph77.text}
            </p>
          </div>
          <h3 className={styles.usageTitleH3}>
            {product.indicationsUse.titleFourteen}
          </h3>
          <div className={styles.usageParagraphBlock}>
            <p className={styles.usageParagraph}>
              {product.indicationsUse.paragraph78.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProductUsage;

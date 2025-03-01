import styles from "./style.module.scss";
import gStyle from "../../../../styles/styles.module.scss";

import AmpouleIcon from "../../../../assets/images/products/ampouleIcon.svg?react";
import SuppositoryIcon from "../../../../assets/images/products/suppositoryIcon.svg?react";
import PatchIcon from "../../../../assets/images/products/patchIcon.svg?react";
import CreamIcon from "../../../../assets/images/products/creamIcon.svg?react";
import PillsIcon from "../../../../assets/images/products/pillsIcon.svg?react";
import CartIcon from "../../../../assets/images/products/cartIcon.svg?react";

import { IBaseProduct } from "../../../../interface/interface";
import { useState } from "react";
import Button from "../../../../components/ui/Button/Button";
import { Link } from "react-router-dom";

interface PProps {
  product: IBaseProduct;
}

function CardProductDescription(prop) {
  const { products, data } = prop;

  const product = data;

  const [countProduct, setCountProduct] = useState(1);

  const iconsArray = [
    <AmpouleIcon />,
    <SuppositoryIcon />,
    <PatchIcon />,
    <CreamIcon />,
    <PillsIcon />,
  ];

  const renderJSX = Object.keys(product).length !== 0;

  return renderJSX ? (
    <div className={styles.cardProductDescription}>
      <div className={gStyle.container}>
        <main className={styles.productDescriptionMain}>
          <div className={styles.productImagesBlock}>
            <div className={styles.imageMain}>
              <img
                src="/src/assets/images/products/imageProductBigSize.png"
                alt="imageProductBigSize"
              />
            </div>
            <ul className={styles.imagesList}>
              <li className={styles.imagesListItem}>
                <img
                  src="/src/assets/images/products/imageProductSmallSize.png"
                  alt="imageProductSmallSize"
                />
              </li>
              <li className={styles.imagesListItem}>
                <img
                  src="/src/assets/images/products/imageProductSmallSize.png"
                  alt="imageProductSmallSize"
                />
              </li>
              <li className={styles.imagesListItem}>
                <img
                  src="/src/assets/images/products/imageProductSmallSize.png"
                  alt="imageProductSmallSize"
                />
              </li>
              <li className={styles.imagesListItem}>
                <img
                  src="/src/assets/images/products/imageProductSmallSize.png"
                  alt="imageProductSmallSize"
                />
              </li>
            </ul>
          </div>
          <div className={styles.productDescriptionBlock}>
            <h1 className={styles.productDescriptionTitle}>
              {product.name} 20г
            </h1>
            <ul className={styles.productDescriptionCuresList}>
              {product.cures.map((item: string, index: number) => (
                <li className={styles.curesListItem} key={index}>
                  {item}
                </li>
              ))}
            </ul>
            <div className={styles.productDescriptionRelease}>
              <h2
                className={`${styles.productDescriptionReleaseTitle} ${styles.productDescriptionH2Titles}`}
              >
                Форма выпуска препарата
              </h2>
              <ul className={styles.productDescriptionReleaseList}>
                {product.releaseFormat.map(
                  (item: { name?: string }, index: number) => (
                    <li
                      className={
                        item.formType === "gel"
                          ? `${styles.releaseListItem} ${styles.isFormType}`
                          : `${styles.releaseListItem}`
                      }
                      key={index}
                    >
                      {iconsArray[index]}
                      <p>{item.name}</p>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className={styles.productDescriptionDosage}>
              <h2
                className={`${styles.productDescriptionDosageTitle} ${styles.productDescriptionH2Titles}`}
              >
                Дозировка
              </h2>
              <ul className={styles.productDescriptionDosageList}>
                {product.releaseFormat.map(
                  (item, index: number) =>
                    item.formType === "gel" &&
                    item.dosage.map((item: number, index: number) => (
                      <li
                        className={
                          item === 1
                            ? `${styles.dosageListItem} ${styles.isDosageType}`
                            : styles.dosageListItem
                        }
                        key={index}
                      >
                        {item}%
                      </li>
                    ))
                )}
              </ul>
            </div>
            <div className={styles.productDescriptionPacking}>
              <h2
                className={`${styles.productDescriptionPackingTitle} ${styles.productDescriptionH2Titles}`}
              >
                Фасовка
              </h2>
              <ul className={styles.productDescriptionPackingList}>
                {product.releaseFormat.map(
                  (item, index: number) =>
                    item.formType === "gel" &&
                    item.packing.map((item: number, index: number) => (
                      <li
                        className={
                          item === 50
                            ? `${styles.packingListItem} ${styles.isPackingType}`
                            : styles.packingListItem
                        }
                        key={index}
                      >
                        {item}г
                      </li>
                    ))
                )}
              </ul>
            </div>
            <div className={styles.productDescriptionInfo}>
              <ul className={styles.productDescriptionInfoList}>
                <li className={styles.infoListItem}>
                  <p className={styles.infoListItemText}>
                    <span className={styles.infoListItemTitle}>
                      {"Форма выпуска: "}
                    </span>
                    {product.formType}
                  </p>
                </li>
                <li className={styles.infoListItem}>
                  <p className={styles.infoListItemText}>
                    <span className={styles.infoListItemTitle}>
                      {"Действующее вещество: "}
                    </span>
                    <a href="#" className={styles.infoListItemLink}>
                      {product.activeIngredient}
                    </a>
                  </p>
                </li>
                <li className={styles.infoListItem}>
                  <p className={styles.infoListItemText}>
                    <span className={styles.infoListItemTitle}>
                      {"Срок годности: "}
                    </span>
                    {product.shelfLife}
                  </p>
                </li>
                <li className={styles.infoListItem}>
                  <p className={styles.infoListItemText}>
                    <span className={styles.infoListItemTitle}>
                      {"Условия хранения: "}
                    </span>
                    {product.storageConditions}
                  </p>
                </li>
                <li className={styles.infoListItem}>
                  <p className={styles.infoListItemText}>
                    <span className={styles.infoListItemTitle}>
                      {"Условия реализации: "}
                    </span>
                    {product.termsRealization}
                  </p>
                </li>
                <li className={styles.infoListItem}>
                  <p className={styles.infoListItemText}>
                    <span className={styles.infoListItemTitle}>
                      {"Производитель: "}
                    </span>
                    <a href="#" className={styles.infoListItemLink}>
                      {product.manufacturer}
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.productDescriptionPriceBlock}>
            <h2 className={styles.productDescriptionPrice}>
              {product.price}грн
            </h2>
            <div className={styles.productDescriptionPriceInfo}>
              <p className={styles.priceInfoInStock}>
                <span className={styles.priceInfoInStockTitle}>В наличии:</span>
                <span className={styles.priceInfoInStockValue}>
                  {product.inStock ? "Много" : "Нет"}
                </span>
              </p>
              <p className={styles.priceInfoDelivery}>
                <span className={styles.priceInfoDeliveryTitle}>Доставка:</span>
                <span className={styles.priceInfoDeliveryValue}>
                  {product.isDelivery ? "Доступна" : "Нет"}
                </span>
              </p>
              <div className={styles.priceInfoQuantity}>
                <p className={styles.priceInfoQuantityTitle}>Количество:</p>
                <div className={styles.priceInfoQuantityCounter}>
                  <button
                    className={styles.decrementQuantity}
                    onClick={() =>
                      setCountProduct((prev: number) =>
                        prev > 1 ? prev - 1 : prev
                      )
                    }
                  >
                    -
                  </button>
                  <p className={styles.priceInfoQuantityValue}>
                    {countProduct}
                  </p>
                  <button
                    className={styles.incrementQuantity}
                    onClick={() =>
                      setCountProduct((prev: number) =>
                        prev < 99 ? prev + 1 : prev
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <Button
              title="В корзину"
              leftIcon={<CartIcon />}
              className={styles.cartButton}
            />
            <div className={styles.productDescriptionPriceContacts}>
              <ul className={styles.contactsListInfo}>
                <li className={styles.contactsListInfoItem}>
                  <Link to="#" className={styles.contactsListInfoLink}>
                    Информация по доставке
                  </Link>
                </li>
                <li className={styles.contactsListInfoItem}>
                  <Link to="#" className={styles.contactsListInfoLink}>
                    Информация по самовывозу
                  </Link>
                </li>
              </ul>
              <div className={styles.contactsTimeInfo}>
                <p className={styles.contactsTimeInfoTitle}>Время работы:</p>
                <p className={styles.contactsTimeInfoText}>
                  ежедневно с 8:00 до 22:00
                </p>
              </div>
              <div className={styles.contactsPhoneInfo}>
                <p className={styles.contactsPhoneInfoTitle}>
                  Телефон для справок:
                </p>
                <a href="tel:+74752751410" className={styles.phoneLink}>
                  +7 (4752) 75‒14‒10
                </a>
                <a href="tel:+74752751025" className={styles.phoneLink}>
                  +7 (4752) 75‒10‒25
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  ) : (
    <div>Object is empty</div>
  );
}

export default CardProductDescription;

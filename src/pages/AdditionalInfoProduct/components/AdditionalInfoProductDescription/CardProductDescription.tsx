import styles from "./style.module.scss";
import gStyle from "../../../../styles/styles.module.scss";
import { IBaseProduct, IProductStock, IRelease } from "../../../../interface/interface";
import { useEffect, useState } from "react";
import { useFetch } from "../../../../hooks/useFetch";
import { checkProductStock } from "../../../../features/products/filters";
import ImageListProduct from "./components/ImageListProduct/ImageListProduct";
import TreatList from "./components/TreatList/TreatList";
import ReleaseList from "./components/ReleaseList/ReleaseList";
import { ISettings } from "./components/type";
import DosageList from "./components/DosageList/DosageList";
import PackingList from "./components/PackingList/PackingList";
import Contacts from "./components/Contacts/Contacts";
import ExtraInfoProduct from "./components/ExtraInfoProduct/ExtraInfoProduct";
import Sidebar from "./components/Sidebar/Sidebar";
interface IProps {
  product: IBaseProduct;
}

export default function AdditionalInfoProductDescription(props: IProps) {
  const { product } = props;

  const [stockProducts] = useFetch<IProductStock>("/src/servers/productsStock.json");

  const dataStock = checkProductStock(product.name, stockProducts);

  const [counter, setCounter] = useState(1);

  const [settings, setSettings] = useState<ISettings>({
    name: "",
    dosage: 0,
    packing: 0,
    stock: {
      name: false,
      dosage: false,
      packing: false,
    },
  });

  function handleChangeSettings(key: keyof ISettings, value: string | number | boolean): void {
    setSettings((prevState) => {
      const newState = { ...prevState };

      if (key !== 'stock' && typeof value !== 'boolean') {
        newState[key] = value;
      }

      if (dataStock?.stock) {
        let isStock = true;
        dataStock.release.map((item, _) => {
          if (item.name === newState.name && !item[key].includes(newState[key])) {
            isStock = false;
          }
        });
        newState.stock[key] = isStock;
      }

      return newState;
    });
  }

  return (
    <div className={styles.cardProductDescription}>
      <div className={gStyle.container}>
        <main className={styles.productDescriptionMain}>
          <ImageListProduct
            images={product.images}
            name={product.name}
            manufacturer={product.manufacturer}
            price={!product.discount ? product.price : product.discount}
            isDelivery={product.isDelivery}
            isRecipe={product.isRecipe}
            countryOrigin={product.countryOrigin}
            release={product.release}
            volume={product.volume}
            isStock={dataStock?.stock || false}
            id={product.id}
            discount={product.discount}
          />
          <div className={styles.productDescriptionBlock}>
            <h1 className={styles.productDescriptionTitle}>
              {product.name}
            </h1>
            <TreatList cures={product.cures} />
            <div className={styles.productDescriptionRelease}>
              <h2
                className={`${styles.productDescriptionReleaseTitle} ${styles.productDescriptionH2Titles}`}
              >
                Форма выпуска препарата
              </h2>
              <ReleaseList handleChangeSettings={handleChangeSettings} release={product.release} setSettings={setSettings} settings={settings} />
            </div>
            <div className={styles.productDescriptionDosage}>
              <h2
                className={`${styles.productDescriptionDosageTitle} ${styles.productDescriptionH2Titles}`}
              >
                Дозировка
              </h2>
              <DosageList handleChangeSettings={handleChangeSettings} release={product.release} setSettings={setSettings} settings={settings} />
            </div>
            <div className={styles.productDescriptionPacking}>
              <h2
                className={`${styles.productDescriptionPackingTitle} ${styles.productDescriptionH2Titles}`}
              >
                Фасовка
              </h2>
              <PackingList handleChangeSettings={handleChangeSettings} release={product.release} setSettings={setSettings} settings={settings} />
            </div>
            <ExtraInfoProduct
              isRecipe={product.isRecipe}
              manufacturer={product.manufacturer}
              storageConditions={product.storageConditions}
              shelfLife={product.shelfLife}
              activeIngredient={product.activeIngredient}
              release={settings.name}
            />
          </div>
          <div className={styles.productDescriptionPriceBlock}>
            <Sidebar
              price={product.price}
              counter={counter}
              setCounter={setCounter}
              isDelivery={product.isDelivery}
              stock={settings.stock}
              id={String(product.id)}
              name={product.name}
              countryOrigin={product.countryOrigin}
              isRecipe={product.isRecipe}
              weight={product.weight}
              manufacturer={product.manufacturer}
              discount={product.discount}
              images={product.images}
            />
            <Contacts />
          </div>
        </main>
      </div>
    </div>
  );
}

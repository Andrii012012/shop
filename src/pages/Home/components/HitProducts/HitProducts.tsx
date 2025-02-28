import styles from "./style.module.scss";
import ListProducts from "../../../../containers/ListProducts/ListProducts";
import { SwiperSlide } from "swiper/react";
import Card from "../../../../containers/Card/Card";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { hitProductsFilter } from "../../../../features/products/filters";

export default function HitProducts(): JSX.Element {
  const products = useAppSelector(hitProductsFilter(3));

  return (
    <section className={styles.wrapper}>
      <ListProducts
        title="Хит продаж"
        prevButton={styles.prevButton}
        nextButton={styles.nextButton}
      >
        {products.map((item, index) => (
          <SwiperSlide>
            <Card
              key={index}
              isStock={true}
              name={item.name}
              manufacturer={item.manufacturer}
              volume={item.release[0].packing[0]}
              release={item.release[1].name}
              price={item.price}
              isRecipe={item.isRecipe}
              isDelivery={item.isDelivery}
              countryOrigin={item.countryOrigin}
            />
          </SwiperSlide>
        ))}
      </ListProducts>
    </section>
  );
}

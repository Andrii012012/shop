import styles from "./style.module.scss";
import ListProducts from "../../../../containers/ListProducts/ListProducts";
import { SwiperSlide } from "swiper/react";
import Card from "../../../../containers/Card/Card";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { seasonProductsFilter } from "../../../../features/products/filters";
export default function SeasonProducts(): JSX.Element {
  const products = useAppSelector(seasonProductsFilter("all"));

  if (products.length) {
    return (
      <section className={styles.wrapper}>
        <ListProducts
          title="Сезонные товары"
          prevButton={styles.prevButton}
          nextButton={styles.nextButton}
        >
          {products.map((item, _) => (
            <SwiperSlide>
              <Card
                name={item.name}
                manufacturer={item.manufacturer}
                volume={item.release[0].packing[0]}
                release={item.release[1].name}
                price={item.price}
                isRecipe={item.isRecipe}
                isDelivery={item.isDelivery}
                countryOrigin={item.countryOrigin}
                weight={item.weight}
                productId={item.id}
                discount={item.discount}
                images={item.images}
              />
            </SwiperSlide>
          ))}
        </ListProducts>
      </section>
    );
  }
  return <></>;
}

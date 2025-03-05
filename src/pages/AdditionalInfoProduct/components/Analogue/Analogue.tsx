import styles from "./style.module.scss";
import gStyles from "../../../../styles/styles.module.scss";
import ListProducts from "../../../../containers/ListProducts/ListProducts";
import { SwiperSlide } from "swiper/react";
import Card from "../../../../containers/Card/Card";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { searchAnalogue } from "../../../../features/products/filters";

interface IProps {
  name: string;
}

export default function Analogue(props: IProps) {

  const { name } = props;

  const analogeProducts = useAppSelector(searchAnalogue(name));

  return (
    <section className={styles.wrapper}>
      <div className={gStyles.container}>
        <ListProducts title='Подберите аналог' prevButton={styles.prevButton} nextButton={styles.nextButton}>
          {analogeProducts.map((item, _) => (
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
              />
            </SwiperSlide>
          ))}
        </ListProducts>
      </div >
    </section >
  );
}

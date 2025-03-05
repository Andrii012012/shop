import styles from "./style.module.scss";
import Heart from '../../../../../../assets/images/header/heartIcon.svg?react';
import { useAppDispatch } from "../../../../../../hooks/useAppDispatch";
import { LoginUser } from "../../../../../../features/user/user";
import { callLocalStore } from "../../../../../../servers/callLocalStore";
import { IUser } from "../../../../../../interface/interface";
import { useAppSelector } from "../../../../../../hooks/useAppSelector";
interface IProps {
  images: string[];
  name: string;
  manufacturer: string;
  volume: number;
  release: string;
  price: number;
  isRecipe: boolean;
  isDelivery: boolean;
  countryOrigin: string;
  isStock: boolean;
  id: number;
  discount: number | null
}

export default function ImageListProduct(props: IProps) {
  const { images, name, manufacturer, isDelivery, countryOrigin, release, volume, isRecipe, price, isStock, id, discount } = props;

  const dispatch = useAppDispatch();
  const dataUser = useAppSelector((state) => state.user.user);

  function handleToggleLikedProduct(): void {
    if (dataUser) {
      const dataUserCopy: IUser = JSON.parse(JSON.stringify(dataUser));

      if (!dataUserCopy.likedProducts.find((item, _) => item.name === name)) {
        dataUserCopy.likedProducts.push({
          id,
          isStock,
          name,
          manufacturer,
          volume,
          release,
          price,
          isRecipe,
          isDelivery,
          countryOrigin,
          discount,
          images,
        });
      } else {
        dataUserCopy.likedProducts = dataUserCopy?.likedProducts.filter((item, _) => item.name !== name && item);
      }

      const newDataUser = callLocalStore<IUser>("user", dataUserCopy);

      dispatch(LoginUser(newDataUser));

    }
  }


  function checkIsLikedProduct(): boolean {
    const result = dataUser?.likedProducts.find((item, _) => item.name === name && item);
    return typeof result === 'object' ? true : false;
  }


  return (
    <div className={styles.productImagesBlock}>
      <div className={styles.imageMain}>
        <Heart onClick={handleToggleLikedProduct} className={`${styles.icon} ${checkIsLikedProduct() ? styles.active : ""}`} />
        <img
          src={`/src/assets/images/products/${images[0]}`}
          alt="imageProductBigSize"
        />
      </div>
      <ul className={styles.imagesList}>
        {images.length > 1 && images.map((item, index) => (
          <li key={index} className={styles.imagesListItem}>
            <img
              src={`/src/assets/images/products/${item}`}
              alt=""
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

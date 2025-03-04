import styles from "./style.module.scss";

interface IProps {
  images: string[];
}

export default function ImageListProduct(props: IProps) {
  const { images } = props;


  return (
    <div className={styles.productImagesBlock}>
      <div className={styles.imageMain}>
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

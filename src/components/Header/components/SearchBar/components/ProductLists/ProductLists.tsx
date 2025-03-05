import style from "./style.module.scss";
import { IBaseProduct } from "../../../../../../interface/interface";
import { useEffect, useRef } from "react";
import { OverlayScrollbars } from "overlayscrollbars";
import './style.scss';
import { Link } from "react-router-dom";
import { PATH_ADDITIONAL_INFO_PRODUCT } from "../../../../../../routes/routes";

interface IProps {
  products: IBaseProduct[];
  handleSetPlaceholder: (name: string) => void;
}

function ProductLists(props: IProps) {

  const { products, handleSetPlaceholder } = props;

  const refElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (refElement.current) {
      const osInstance = OverlayScrollbars(refElement.current, {});

      const { viewport } = osInstance.elements();

      if (viewport instanceof HTMLElement) {
        viewport.classList.add('productListsScrollbar');
      }

      return () => osInstance?.destroy();
    }
  }, [refElement.current]);

  return (
    <div className={`${style.wrapper} productListsWrapper`} ref={refElement}>
      <ul className={style.searchPopupList}>
        {products.map((item, index) => {
          return (
            <li onMouseEnter={() => handleSetPlaceholder(item.name)} key={index} className={style.searchPopupListItem}>
              <Link to={`${PATH_ADDITIONAL_INFO_PRODUCT}/${item.id}`} className={style.searchPopupListLink}>
                <img
                  src="src/assets/images/header/productIcon.png"
                  alt="Product Icon"
                  className={style.searchPopupListLinkImg}
                />
                <span className={style.searchPopupListLinkTitle}>
                  {item.name}
                </span>
                <span className={style.searchPopupListLinkPrice}>
                  {item.price} $
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductLists;

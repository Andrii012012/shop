import style from "./style.module.scss";
import { IBaseProduct } from "../../../../../../interface/interface";
import { useEffect, useRef } from "react";
import { OverlayScrollbars } from "overlayscrollbars";
import './style.scss';

interface IProps {
  products: IBaseProduct[];
}

function ProductLists(props: IProps) {

  const { products } = props;

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
            <li key={index} className={style.searchPopupListItem}>
              <a href="#" className={style.searchPopupListLink}>
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
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductLists;

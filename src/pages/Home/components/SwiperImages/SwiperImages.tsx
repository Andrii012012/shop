import styles from "./style.module.scss";
import gStyles from "../../../../styles/styles.module.scss";
import ArrowIcon from "../../../../assets/images/global/arrowIcon.svg?react";
import { useRef, useState } from "react";
import { Pagination, Navigation } from "swiper/modules";
import artboardOne from "../../../../assets/images/home/ArtboardOne.png";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/scrollbar";

export default function SwiperImages(): JSX.Element {
  const [isUploadedSwiper, setIsUploadedSwiper] = useState<boolean>(false);

  const prevElRef = useRef<HTMLDivElement | null>(null);
  const nextElRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={`${styles.swiperContainer}`}>
      <div className={gStyles.container}>
        <Swiper
          className={styles.swiper}
          modules={[Navigation, Pagination]}
          direction="horizontal"
          pagination={{
            clickable: true,
            el: styles.pagination,
            bulletClass: styles.bullet,
            bulletActiveClass: styles.bulletActive,
          }}
          spaceBetween={20}
          navigation={{
            prevEl: prevElRef.current,
            nextEl: nextElRef.current,
            disabledClass: styles.disabledButton,
          }}
          onSwiper={(swiper) => setIsUploadedSwiper(true)}
        >
          {Array.from(Array(3)).map((item) => (
            <SwiperSlide key={item} className={styles.swiperSlide}>
              <div>
                <img src={artboardOne} alt="artboardOne" />
              </div>
            </SwiperSlide>
          ))}
          <div className={styles.swiperButtonPrev} ref={prevElRef}>
            <ArrowIcon className={styles.iconButton} />
          </div>
          <div className={styles.swiperButtonNext} ref={nextElRef}>
            <ArrowIcon className={styles.iconButton} />
          </div>
        </Swiper>
      </div>
    </div>
  );
}

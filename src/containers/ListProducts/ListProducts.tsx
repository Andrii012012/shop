import styles from './style.module.scss';
import gStyles from '../../styles/styles.module.scss';
import CirleArrow from '../../assets/images/global/circleArrow.svg?react';
import { Swiper } from 'swiper/react';
import { ReactNode, useRef, useState } from 'react';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/pagination';
// @ts-ignore
import 'swiper/css/scrollbar';
// @ts-ignore
import { Navigation, Pagination } from 'swiper/modules';


interface IProps {
    children: ReactNode;
    slidesPerView?: number;
    spaceBetween?: number;
    nextButton: string;
    prevButton: string;
    isPagination?: boolean;
    bullets?: string;
    bulletsEl?: string;
    bulletsActive?: string;
    title: string;
}

export default function ListProducts(props: IProps): JSX.Element {

    const { children, slidesPerView = 5, spaceBetween = 20, title, isPagination, nextButton, prevButton, bullets = "", bulletsActive = "", bulletsEl = "" } = props;

    const [isUploadedSwiper, setIsUploadedSwiper] = useState<boolean>(false);

    const nextEl = useRef<HTMLButtonElement | null>(null);
    const prevEl = useRef<HTMLButtonElement | null>(null);

    return (
        <div className={`${styles.listProducts}`}>
            <div className={styles.header}>
                <h2 className={`${styles.title} ${gStyles.textLarge}`}>{title}</h2>
                <button ref={prevEl} className={`${styles.prevButton} ${prevButton}`}>
                    <CirleArrow className={styles.iconButton} />
                </button>
                <button ref={nextEl} className={`${styles.nextButton} ${nextButton}`}>
                    <CirleArrow className={`${styles.iconButton} ${styles.iconButtonNext}`} />
                </button>
            </div>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={spaceBetween}
                modules={[Navigation, Pagination]}
                navigation={{
                    nextEl: nextEl.current,
                    prevEl: prevEl.current,
                    disabledClass: styles.disabledButton,
                }}
                pagination={isPagination &&
                {
                    clickable: true,
                    el: `.${bulletsEl}`,
                    bulletClass: bullets,
                    type: "bullets",
                    bulletActiveClass: bulletsActive,
                }
                }
                onSwiper={(swiper) => { setIsUploadedSwiper(true) }}
            >
                {children}
                {isPagination && <div className={bulletsEl}></div>}
            </Swiper >
        </div >
    );
}
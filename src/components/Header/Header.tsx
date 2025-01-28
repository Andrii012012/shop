import gStyle from "../../styles/styles.module.scss";
import style from "./style.module.scss";

import { useRef } from "react";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// IMPORT ICONS
import BurgerIcon from "../../assets/images/header/burgerIcon.svg?react";
import HeartIcon from "../../assets/images/header/heartIcon.svg?react";
import TrashIcon from "../../assets/images/header/trashIcon.svg?react";
import UserIcon from "../../assets/images/header/userIcon.svg?react";
import SearchIcon from "../../assets/images/header/searchIcon.svg?react";
import CheckIcon from "../../assets/images/header/checkIcon.svg?react";
import ArrowLeftIcon from "../../assets/images/header/arrowLeftIcon.svg?react";
import ArrowRightIcon from "../../assets/images/header/arrowRightIcon.svg?react";
// fill="current" stroke="none"

function Header() {
  const prevElRef = useRef(null);
  const nextElRef = useRef(null);
  const paginationRef = useRef(null);

  return (
    <header className={style.header}>
      <div className={gStyle.container}>
        <div className={style.headerInner}>
          <div className={style.headerContacts}>
            <div className={style.headerSale}>
              <p>Скидка 2% при оформлении заказа на сайте !</p>
            </div>
            <p className={style.headerContactsAddress}>
              г. Тамбов, ул. Советская 22 Время работы: пн-вс 8:00 - 22:00
            </p>
            <div className={style.headerContactNumbers}>
              <a href="tel:+74752751410" className={style.headerContactItem}>
                <span>Аптека</span> +7 (4752) 75‒14‒10
              </a>
              <a href="tel:+74752751025" className={style.headerContactItem}>
                <span>Мед. техника</span> +7 (4752) 75‒10‒25
              </a>
              <a href="#" className={style.headerContactCallback}>
                Заказать обратный звонок
              </a>
            </div>
          </div>
          <ul className={style.headerInfo}>
            <li className={style.headerInfoItem}>
              <CheckIcon />
              <p>
                Формат 3 в 1 (аптека, ветеринарная аптека, медицинская техника и
                товары)
              </p>
            </li>
            <li className={style.headerInfoItem}>
              <CheckIcon />
              <p>25 лет опыта</p>
            </li>
            <li className={style.headerInfoItem}>
              <CheckIcon />
              <p>Формацевтическое консультирование</p>
            </li>
            <li className={style.headerInfoItem}>
              <CheckIcon />
              <p>Быстрая и надежная доставка</p>
            </li>
          </ul>
          <ul className={style.headerActions}>
            <li className={style.headerWebsiteLogo}>
              <a href="#">
                <img
                  src="src/assets/images/header/websiteLogo.png"
                  alt="Website Logo"
                />
              </a>
            </li>

            <li className={style.headerActionSearchBar}>
              <input
                type="text"
                className={style.headerSearchBar}
                placeholder="Поиск по названию, производителю, действующему веществу или симптому"
              />
              <SearchIcon />
            </li>

            <li className={style.headerActionFavorites}>
              <a href="#" className={style.headerActionFavoritesLink}>
                <HeartIcon />
                Избранное
              </a>
            </li>

            <li className={style.headerActionTrash}>
              <a href="#" className={style.headerActionTrashLink}>
                <TrashIcon />
                Корзина
              </a>
            </li>

            <li className={style.headerActionLogin}>
              <a href="#" className={style.headerActionLoginLink}>
                <UserIcon />
                Войти
              </a>
            </li>
          </ul>
          <nav className={style.headerNav}>
            <button className={style.burgerMenu}>
              <BurgerIcon />
            </button>
            <ul className={style.headerNavList}>
              <li className={style.headerNavItem}>
                <a className={style.headerNavLink} href="#">
                  Интернет-магазин
                </a>
              </li>
              <li className={style.headerNavItem}>
                <a className={style.headerNavLink} href="#">
                  Главная
                </a>
              </li>
              <li className={style.headerNavItem}>
                <a className={style.headerNavLink} href="#">
                  О компании
                </a>
              </li>
              <li className={style.headerNavItem}>
                <a className={style.headerNavLink} href="#">
                  Помощь
                </a>
              </li>
              <li className={style.headerNavItem}>
                <a className={style.headerNavLink} href="#">
                  Акции
                </a>
              </li>
              <li className={style.headerNavItem}>
                <a className={style.headerNavLink} href="#">
                  Новости
                </a>
              </li>
            </ul>
          </nav>

          <Swiper
            className={style.headerSwiper}
            modules={[Navigation, Pagination]}
            direction="horizontal"
            pagination={{
              clickable: true,
            }}
            spaceBetween={20}
            navigation={{
              prevEl: prevElRef.current,
              nextEl: nextElRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevElRef.current;
              swiper.params.navigation.nextEl = nextElRef.current;
            }}
          >
            {[...Array(8)].map((_, index) => {
              return (
                <SwiperSlide key={index} className={style.headerSwiperSlide}>
                  <img
                    src="src/assets/images/header/artboardOne.jpg"
                    alt="artboardOne"
                  />
                </SwiperSlide>
              );
            })}

            <div className={style.headerSwiperButtonPrev} ref={prevElRef}>
              <ArrowLeftIcon />
            </div>
            <div className={style.headerSwiperButtonNext} ref={nextElRef}>
              <ArrowRightIcon />
            </div>

            <div
              className={style.headerSwiperPagination}
              ref={paginationRef}
            ></div>
          </Swiper>
        </div>
      </div>
    </header>
  );
}

export default Header;

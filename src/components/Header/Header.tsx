import gStyle from "../../styles/styles.module.scss";
import style from "./style.module.scss";

// IMPORT ICONS
import BurgerIcon from "../../assets/images/header/burger-icon.svg?react";
import HeartIcon from "../../assets/images/header/heart-icon.svg?react";
import TrashIcon from "../../assets/images/header/trash-icon.svg?react";
import UserIcon from "../../assets/images/header/user-icon.svg?react";
import SearchIcon from "../../assets/images/header/search-icon.svg?react";
import CheckIcon from "../../assets/images/header/check-icon.svg?react";
// fill="current" stroke="none"

function Header() {
  return (
    <header className={style.header}>
      <div className={gStyle.container}>
        <div className={style["header-inner"]}>
          <div className={style["header-contacts"]}>
            <div className={style["header-sale"]}>
              <p>Скидка 2% при оформлении заказа на сайте !</p>
            </div>
            <p className={style["header-contacts-address"]}>
              г. Тамбов, ул. Советская 22 Время работы: пн-вс 8:00 - 22:00
            </p>
            <div className={style["header-contacts-numbers"]}>
              <a
                href="tel:+74752751410"
                className={style["header-contacts-number"]}
              >
                <span>Аптека</span> +7 (4752) 75‒14‒10
              </a>
              <a
                href="tel:+74752751025"
                className={style["header-contacts-number"]}
              >
                <span>Мед. техника</span> +7 (4752) 75‒10‒25
              </a>
              <a href="#" className={style["header-contacts-callback"]}>
                Заказать обратный звонок
              </a>
            </div>
          </div>
          <ul className={style["header-info"]}>
            <li className={style["header-info-item"]}>
              <CheckIcon />
              <p>
                Формат 3 в 1 (аптека, ветеринарная аптека, медицинская техника и
                товары)
              </p>
            </li>
            <li className={style["header-info-item"]}>
              <CheckIcon />
              <p>25 лет опыта</p>
            </li>
            <li className={style["header-info-item"]}>
              <CheckIcon />
              <p>Формацевтическое консультирование</p>
            </li>
            <li className={style["header-info-item"]}>
              <CheckIcon />
              <p>Быстрая и надежная доставка</p>
            </li>
          </ul>
          <ul className={style["header-actions"]}>
            <li className="header-action header-action-logo">
              <a href="#">
                <img
                  src="src/assets/images/header/websiteLogo.png"
                  alt="Website Logo"
                />
              </a>
            </li>

            <li className={style["header-action-search-bar"]}>
              <input
                type="text"
                className={style["header-search-bar"]}
                placeholder="Поиск по названию, производителю, действующему веществу или симптому"
              />
              <SearchIcon />
            </li>

            <li className={style["header-action-favorites"]}>
              <a href="#" className={style["header-action-favorites-link"]}>
                <HeartIcon />
                Избранное
              </a>
            </li>

            <li className={style["header-action-trash"]}>
              <a href="#" className={style["header-action-trash-link"]}>
                <TrashIcon />
                Корзина
              </a>
            </li>

            <li className={style["header-action-login"]}>
              <a href="#" className={style["header-action-login-link"]}>
                <UserIcon />
                Войти
              </a>
            </li>
          </ul>
          <nav className={style["header-nav"]}>
            <button className={style["burger-menu"]}>
              <BurgerIcon />
            </button>
            <ul className={style["header-nav-list"]}>
              <li className={style["header-nav-item"]}>
                <a className={style["header-nav-link"]} href="#">
                  Интернет-магазин
                </a>
              </li>
              <li className={style["header-nav-item"]}>
                <a className={style["header-nav-link"]} href="#">
                  Главная
                </a>
              </li>
              <li className={style["header-nav-item"]}>
                <a className={style["header-nav-link"]} href="#">
                  О компании
                </a>
              </li>
              <li className={style["header-nav-item"]}>
                <a className={style["header-nav-link"]} href="#">
                  Помощь
                </a>
              </li>
              <li className={style["header-nav-item"]}>
                <a className={style["header-nav-link"]} href="#">
                  Акции
                </a>
              </li>
              <li className={style["header-nav-item"]}>
                <a className={style["header-nav-link"]} href="#">
                  Новости
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

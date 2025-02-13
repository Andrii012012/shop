// IMPORT STYLES
import gStyle from "../../styles/styles.module.scss";
import style from "./style.module.scss";

// IMPORT HOOKS AND TYPES

// IMPORT ICONS
import HeartIcon from "../../assets/images/header/heartIcon.svg?react";
import TrashIcon from "../../assets/images/header/trashIcon.svg?react";
import UserIcon from "../../assets/images/header/userIcon.svg?react";
import CheckIcon from "../../assets/images/header/checkIcon.svg?react";
// fill="current" stroke="none"

// INTERFACES
interface HeaderProps {
  SearchBar: React.FC;
  PopupCatalog: React.FC;
}

function Header({ SearchBar, PopupCatalog }: HeaderProps) {
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

            <li className={style.headerActionSearch}>
              <SearchBar />
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
            <PopupCatalog />
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
        </div>
      </div>
    </header>
  );
}

export default Header;

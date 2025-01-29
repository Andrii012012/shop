import gStyle from "../../styles/styles.module.scss";
import style from "./style.module.scss";

// IMPORT ICONS
import VkIcon from "../../assets/images/footer/vkIcon.svg?react";
import InstagramIcon from "../../assets/images/footer/instagramIcon.svg?react";
import OdnoklassnikiIcon from "../../assets/images/footer/odnoklassnikiIcon.svg?react";
// fill="current" stroke="none"

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={gStyle.container}>
        <div className={style.footerInner}>
          <div className={style.footerTop}>
            <ul className={style.footerInfo}>
              <li className={style.footerInfoWebsiteLogo}>
                <a href="#">
                  <img
                    src="src/assets/images/header/websiteLogo.png"
                    alt="Website Logo"
                  />
                </a>
              </li>
              <li className={style.footerInfoAddress}>
                <p>
                  г. Тамбов, ул. Советская 22 Время работы: пн-вс 8:00 - 22:00
                </p>
              </li>
              <li className={style.footerInfoSociaMedia}>
                <p className={style.footerSocialMediaTitle}>Мы в соц. сетях:</p>
                <ul className={style.footerSocialMediaList}>
                  <li
                    className={`${style.footerSocialMediaItem} ${style.footerSocialMediaVk}`}
                  >
                    <VkIcon />
                  </li>
                  <li
                    className={`${style.footerSocialMediaItem} ${style.footerSocialMediaInstagram}`}
                  >
                    <InstagramIcon />
                  </li>
                  <li
                    className={`${style.footerSocialMediaItem} ${style.footerSocialMediaOdnoklassniki}`}
                  >
                    <OdnoklassnikiIcon />
                  </li>
                </ul>
              </li>

              <li className={style.footerInfoContacts}>
                <a
                  href="tel:+74752751410"
                  className={style.footerInfoContactsNumber}
                >
                  +7 475 725 14 10
                </a>
                <a href="#" className={style.footerInfoContactsCallBack}>
                  Заказать обратный звонок
                </a>
              </li>
            </ul>
            <nav className={style.footerNavigation}>
              <div className={style.footerNavigationLists}>
                <ul className={style.footerNavigationList}>
                  <li className={style.footerNavigationListTitle}>Главная</li>
                  <li className={style.footerNavigationListItem}>
                    <a href="#" className={style.footerNavigationListLink}>
                      Акция
                    </a>
                  </li>
                  <li className={style.footerNavigationListItem}>
                    <a href="#" className={style.footerNavigationListLink}>
                      Новости
                    </a>
                  </li>
                </ul>
                <ul className={style.footerNavigationList}>
                  <li className={style.footerNavigationListTitle}>
                    О компании
                  </li>
                  <li className={style.footerNavigationListItem}>
                    <a href="#" className={style.footerNavigationListLink}>
                      Реквизиты
                    </a>
                  </li>
                </ul>
              </div>
              <ul className={style.footerNavigationList}>
                <li className={style.footerNavigationListTitle}>Помощь</li>
                <li className={style.footerNavigationListItem}>
                  <a href="#" className={style.footerNavigationListLink}>
                    Как сделать заказ
                  </a>
                </li>
                <li className={style.footerNavigationListItem}>
                  <a href="#" className={style.footerNavigationListLink}>
                    Оплата и бронирование
                  </a>
                </li>
                <li className={style.footerNavigationListItem}>
                  <a href="#" className={style.footerNavigationListLink}>
                    Доставка
                  </a>
                </li>
                <li className={style.footerNavigationListItem}>
                  <a href="#" className={style.footerNavigationListLink}>
                    Политика конфиденциальности
                  </a>
                </li>
                <li className={style.footerNavigationListItem}>
                  <a href="#" className={style.footerNavigationListLink}>
                    Разрешительная документация
                  </a>
                </li>
                <li className={style.footerNavigationListItem}>
                  <a href="#" className={style.footerNavigationListLink}>
                    Условия дистанционной продажи
                  </a>
                </li>
                <li className={style.footerNavigationListItem}>
                  <a href="#" className={style.footerNavigationListLink}>
                    Обратная связь
                  </a>
                </li>
              </ul>
              <ul className={style.footerNavigationList}>
                <li className={style.footerNavigationListTitle}>Каталог</li>
                <li className={style.footerNavigationListItem}>
                  <a href="#" className={style.footerNavigationListLink}>
                    Лекарственные препараты
                  </a>
                </li>
                <li className={style.footerNavigationListItem}>
                  <a href="#" className={style.footerNavigationListLink}>
                    Витамины и БАДы
                  </a>
                </li>
                <li className={style.footerNavigationListItem}>
                  <a href="#" className={style.footerNavigationListLink}>
                    Красота и уход
                  </a>
                </li>
                <li className={style.footerNavigationListItem}>
                  <a href="#" className={style.footerNavigationListLink}>
                    Планирование семьи
                  </a>
                </li>
                <li className={style.footerNavigationListItem}>
                  <a href="#" className={style.footerNavigationListLink}>
                    Мама и малышь
                  </a>
                </li>
                <li className={style.footerNavigationListItem}>
                  <a href="#" className={style.footerNavigationListLink}>
                    Медицинские изделия
                  </a>
                </li>
                <li className={style.footerNavigationListItem}>
                  <a href="#" className={style.footerNavigationListLink}>
                    Ортопедические изделия
                  </a>
                </li>
                <li className={style.footerNavigationListItem}>
                  <a href="#" className={style.footerNavigationListLink}>
                    Медицинская техника
                  </a>
                </li>
                <li className={style.footerNavigationListItem}>
                  <a href="#" className={style.footerNavigationListLink}>
                    Ветеринарная техника
                  </a>
                </li>
              </ul>
              <ul className={style.footerNavigationList}>
                <li className={style.footerNavigationListTitle}>
                  Программа лояльности
                </li>
                <li className={style.footerNavigationListItem}>
                  <a href="#" className={style.footerNavigationListLink}>
                    Личный кабинет
                  </a>
                </li>
                <li className={style.footerNavigationListItem}>
                  <a href="#" className={style.footerNavigationListLink}>
                    Активировать карту
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className={style.footerBottom}>
            <div className={style.footerBottomCopyright}>
              <a href="#" className={style.footerBottomCopyrightLink}>
                Версия для печати
              </a>
              <p className={style.footerBottomCopyrightText}>
                Разработка сайта - Веб студия “Максоком” 2022. Все права
                защещены
              </p>
            </div>
            <a href="#" className={style.footerBottomMapLink}>
              Карта сайта
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

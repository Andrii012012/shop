import gStyle from "../../styles/styles.module.scss";
import style from "./style.module.scss";
import IconVK from '../../assets/images/footer/iconVK.svg?react';
import IconOK from '../../assets/images/footer/iconOK.svg?react';
import IconInstagram from '../../assets/images/footer/iconInstagram.svg?react';
import { MENU_LIST } from "./constants/menuList";
import MenuList from "./components/MenuList/MenuList";
import { Link } from "react-router-dom";
import iconLogo from '../../assets/images/header/websiteLogo.svg'
import Button from "../ui/Button/Button";
import { PATH_HOME, PATH_MAP_WEBSITE } from "../../routes/routes";
import Portal from "../../containers/Portal/Portal";
import LeaveContacts from "../LeaveContacts/LeaveContacts";
import { useState } from "react";

export default function Footer() {

  const [portal, setPortal] = useState<boolean>(false);

  return (
    <footer className={style.footer}>
      <div className={gStyle.container}>
        <div className={style.footerInner}>
          <div className={style.footerTop}>
            <ul className={style.footerInfo}>
              <li className={style.footerInfoWebsiteLogo}>
                <Link to={PATH_HOME}>
                  <img
                    src={iconLogo}
                    alt="Website Logo"
                  />
                </Link>
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
                    <IconVK />
                  </li>
                  <li
                    className={`${style.footerSocialMediaItem} ${style.footerSocialMediaInstagram}`}
                  >
                    <IconOK />
                  </li>
                  <li
                    className={`${style.footerSocialMediaItem} ${style.footerSocialMediaOdnoklassniki}`}
                  >
                    <IconInstagram />
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
                <Button onClick={() => setPortal(true)} className={style.footerInfoContactsCallBack} title='Заказать обратный звонок' />
              </li>
            </ul>
            <nav className={style.footerNavigation}>
              <div className={style.footerNavigationLists}>
                <MenuList className={style.listMain} menuList={MENU_LIST.main} title={'Главная'} />
                <MenuList className={style.listCompany} menuList={MENU_LIST.company} title={'О компании'} />
              </div>
              <MenuList className={style.listHelp} menuList={MENU_LIST.help} title={'Помощь'} />
              <MenuList className={style.listCatalog} menuList={MENU_LIST.catalog} title={'Каталог'} />
              <MenuList className={style.ListLoyaltyProgram} menuList={MENU_LIST.loyaltyProgram} title={'Программа лояльности'} />
            </nav>
          </div>
          <div className={style.footerBottom}>
            <div className={style.footerBottomCopyright}>
              <p className={style.footerBottomCopyrightText}>
                Разработка сайта - Веб студия “Максоком” 2022. Все права
                защещены
              </p>
            </div>
            <Link to={PATH_MAP_WEBSITE} className={style.footerBottomMapLink}>
              Карта сайта
            </Link>
          </div>
        </div>
      </div>
      <Portal isOpen={portal} setIsOpen={setPortal}>
        <LeaveContacts setIsOpen={setPortal} />
      </Portal>
    </footer>
  );
}
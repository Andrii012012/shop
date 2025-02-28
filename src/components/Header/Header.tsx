import gStyles from "../../styles/styles.module.scss";
import styles from "./style.module.scss";
import { useState } from "react";
import PopupCatalog from "./components/PopupCatalog/PopupCatalog";
import { CatalogItem } from "./interfaces/catalogItem";
import SearchBar from "./components/SearchBar/SearchBar";
import AboutShop from "./components/AboutShop/AboutShop";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/header/WebsiteLogo.svg?react';
import { catalogList } from "./constants/catalogList";
import NavigateMenu from "./components/NavigateMenu/NavigateMenu";
import NavigateMenuUser from "./components/NavigateMenuUser/NavigateMenuUser";
import Portal from "../../containers/Portal/Portal";
import PortalLoginRegister from "./components/PortalLoginRegister/PortalLoginRegister";
import { PATH_HOME } from "../../routes/routes";

function Header() {
  const [modals, setModals] = useState<CatalogItem[]>(catalogList);
  const [modalLogin, setModalLogin] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <div className={gStyles.container}>
        <div className={styles.headerInner}>
          <AboutShop />
          <div className={styles.body}>
            <Link className={styles.headerWebsiteLogo} to={PATH_HOME}>
              <Logo />
            </Link>
            <SearchBar className={styles.searchBar} />
            <NavigateMenuUser setModalLogin={setModalLogin} />
          </div>
          <nav className={styles.headerNav}>
            <PopupCatalog state={modals} setState={setModals} />
            <NavigateMenu />
          </nav>
        </div>
        <Portal isOpen={modalLogin} setIsOpen={setModalLogin}>
          <PortalLoginRegister setModalLogin={setModalLogin} />
        </Portal>
      </div>
    </header>
  )
}

export default Header;

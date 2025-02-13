import { ReactNode } from "react";
import gStyles from "../styles/styles.module.scss";

import Header from "../components/Header/Header";
import SearchBar from "../components/Header/components/SearchBar/SearchBar";
import PopupCatalog from "../components/Header/components/PopupCatalog/PopupCatalog";

export function Layout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div className={gStyles.wrapper}>
      <Header SearchBar={SearchBar} PopupCatalog={PopupCatalog} />
      {children}
    </div>
  );
}

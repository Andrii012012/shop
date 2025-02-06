import { ReactNode } from "react";
import gStyles from "../styles/styles.module.scss";

import Header from "../components/Header/Header";
import PopupContainer from "../containers/PopupContainer/PopupContainer";
import SearchBar from "../components/Header/components/SearchBar/SearchBar";

export function Layout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div className={gStyles.wrapper}>
      <Header PopupContainer={PopupContainer} SearchBar={SearchBar} />
      {children}
    </div>
  );
}

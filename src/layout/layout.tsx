import { ReactNode } from "react";
import gStyles from "../styles/styles.module.scss";

import Header from "../components/Header/Header";
import PopupContainer from "../containers/PopupContainer/PopupContainer";

export function Layout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div className={gStyles.wrapper}>
      <Header PopupContainer={PopupContainer} />
      {children}
    </div>
  );
}

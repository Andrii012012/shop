import { ReactNode } from "react";

import style from "./style.module.scss";

interface PopupContainerProps {
  isOpen: boolean;
  children: ReactNode;
}

function PopupContainer({ isOpen, children }: PopupContainerProps) {
  if (!isOpen) return null;

  return <div className={style.popupContent}>{children}</div>;
}

export default PopupContainer;

import { ReactNode } from "react";

import style from "./style.module.scss";

interface PopupContainerProps {
  isOpen: boolean;
  children: ReactNode;
}

function PopupContainer({ isOpen, children }: PopupContainerProps) {
  if (!isOpen) return null;

  return <>{children}</>;
}

export default PopupContainer;

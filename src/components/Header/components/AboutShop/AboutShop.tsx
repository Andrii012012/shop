import styles from "./styles.module.scss";
import CheckIcon from "../../../../assets/images/header/checkIcon.svg?react";
import Button from "../../../ui/Button/Button";
import { useState } from "react";
import Portal from "../../../../containers/Portal/Portal";
import LeaveContacts from "../../../LeaveContacts/LeaveContacts";

function AboutShop() {

  const [portal, setPortal] = useState<boolean>(false);

  return (
    <>
      <div className={styles.headerContacts}>
        <div className={styles.headerSale}>
          <p>Скидка 2% при оформлении заказа на сайте !</p>
        </div>
        <p className={styles.headerContactsAddress}>
          г. Тамбов, ул. Советская 22 Время работы: пн-вс 8:00 - 22:00
        </p>
        <div className={styles.headerContactNumbers}>
          <a href="tel:+74752751410" className={styles.headerContactItem}>
            <span>Аптека</span> +7 (4752) 75‒14‒10
          </a>
          <a href="tel:+74752751025" className={styles.headerContactItem}>
            <span>Мед. техника</span> +7 (4752) 75‒10‒25
          </a>
          <Button onClick={() => setPortal(true)} className={styles.headerContactCallback} title="Заказать обратный звонок" />
        </div>
      </div>
      <ul className={styles.headerInfo}>
        <li className={styles.headerInfoItem}>
          <CheckIcon />
          <p>
            Формат 3 в 1 (аптека, ветеринарная аптека, медицинская техника и
            товары)
          </p>
        </li>
        <li className={styles.headerInfoItem}>
          <CheckIcon />
          <p>25 лет опыта</p>
        </li>
        <li className={styles.headerInfoItem}>
          <CheckIcon />
          <p>Формацевтическое консультирование</p>
        </li>
        <li className={styles.headerInfoItem}>
          <CheckIcon />
          <p>Быстрая и надежная доставка</p>
        </li>
      </ul>
      <Portal isOpen={portal} setIsOpen={setPortal}>
        <LeaveContacts setIsOpen={setPortal} />
      </Portal>
    </>
  );
}

export default AboutShop;
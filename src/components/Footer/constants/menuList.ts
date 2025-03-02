import { ABOUT_COMPANY, ACCOUNT_SECTIONS, CATALOG_PRODUCT } from "../../../constants/path";
import {
  PATH_ABOUT_COMPANY,
  PATH_ACCOUNT,
  PATH_DELIVERY,
  PATH_FEEDBACK,
  PATH_HOW_TO_MAKE_ORDER,
  PATH_NEWS,
  PATH_PAYMENT_BOOKING,
  PATH_POLITICS,
  PATH_PROMOTION,
} from "../../../routes/routes";
import { IMenuList } from "../type";

export const MENU_LIST: IMenuList = {
  main: [
    { name: "Акция", to: PATH_PROMOTION },
    { name: "Новости", to: PATH_NEWS },
  ],
  company: [{ name: "Реквизиты", to: `${PATH_ABOUT_COMPANY}/${ABOUT_COMPANY.requisite}` }],
  help: [
    { name: "Как сделать заказ", to: PATH_HOW_TO_MAKE_ORDER },
    { name: "Оплата и бронирование", to: PATH_PAYMENT_BOOKING },
    { name: "Доставка", to: PATH_DELIVERY },
    { name: "Политика конфиденциальности", to: PATH_POLITICS },
    { name: "Обратная связь", to: PATH_FEEDBACK },
  ],
  catalog: [
    { name: "Лекарственные препараты", to: CATALOG_PRODUCT.medicines },
    { name: "Витамины и БАДы", to: CATALOG_PRODUCT.vitamins },
    { name: "Планирование семьи", to: CATALOG_PRODUCT.familyPlanning },
    { name: "Мама и малышь", to: CATALOG_PRODUCT.momBaby },
    { name: "Медицинские изделия", to: CATALOG_PRODUCT.medicalProducts },
    { name: "Ортопедические изделия", to: CATALOG_PRODUCT.orthopedicProducts },
    { name: "Медицинская техника", to: CATALOG_PRODUCT.medicalTechnology },
    { name: "Ветеринарная техника", to: CATALOG_PRODUCT.veterinaryPharmacy },
  ],
  loyaltyProgram: [
    { name: "Личный кабинет", to: `${PATH_ACCOUNT}` },
    {
      name: "Активировать карту",
      to: `${PATH_ACCOUNT}/${ACCOUNT_SECTIONS.myProfile}`,
    },
  ],
};

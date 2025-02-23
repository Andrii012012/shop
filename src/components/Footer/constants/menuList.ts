import { ACCOUNT_SECTIONS, CATALOG_PRODUCT } from "../../../constants/path";
import { PATH_ACCOUNT } from "../../../routes/routes";
import { IMenuList } from "../type";

export const MENU_LIST: IMenuList = {
  main: [
    { name: "Акция", to: "/" },
    { name: "Новости", to: "/" },
  ],
  company: [{ name: "Реквизиты", to: "/" }],
  help: [
    { name: "Как сделать заказ", to: "/" },
    { name: "Оплата и бронирование", to: "/" },
    { name: "Доставка", to: "/" },
    { name: "Политика конфиденциальности", to: "/" },
    { name: "Разрешительная документация", to: "/" },
    { name: "Условия дистанционной продажи", to: "/" },
    { name: "Обратная связь", to: "/" },
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

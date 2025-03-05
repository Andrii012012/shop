import { PATH_CATALOG } from "../routes/routes";

export const enum CATALOG_PRODUCT {
  medicines = `${PATH_CATALOG}/Лекарственные препараты`,
  vitamins = `${PATH_CATALOG}/Витамины и БАДы`,
  beauty = `${PATH_CATALOG}/Красота и уход`,
  familyPlanning = `${PATH_CATALOG}/Планирование семьи`,
  momBaby = `${PATH_CATALOG}/Мама и малышь`,
  medicalProducts = `${PATH_CATALOG}/Медицинские изделия`,
  orthopedicProducts = `${PATH_CATALOG}/Ортопедические изделия`,
  medicalTechnology = `${PATH_CATALOG}/Медицинская техника`,
  veterinaryPharmacy = `${PATH_CATALOG}/Ветеринарная аптека`,
}

export const enum ACCOUNT_SECTIONS {
  myProfile = "Мой профиль",
  orders = "Заказы",
  subscriptions = "Подписки",
  leaveFeedback = "Оставить отзыв",
}

export const enum BASKET_SECTIONS {
  myBasket = "Моя корзина",
  methodDelivery = "Способ доставки",
  paymentConfirmation = "Оплата и подтверждение",
}

export const enum ABOUT_COMPANY {
  requisite = "Реквизиты",
}

export const enum PROMOTION {
  detailsPromotion = "detailsPromotion",
}

export const enum NEWS {
  detailsNews = "detailsNews",
}

export const enum HOW_TO_MAKE_ORDER {
  medicineWithoutPrescription = "Лекарственный препарат без рецепта",
  medicineWithPrescription = "Лекарственный препарат по рецепту врача",
}

export const enum ADDITIONAL_INFO_PRODUCT {
  description = "Описание товара",
  instruction = "Инструкции по применению",
  usage = "Показания к применению",
  pharmocologic = "Фармокологическое действие",
}

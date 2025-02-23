import { IBasketProduct } from "../../interface/interface";

export interface ISelectedProduct extends IBasketProduct {
  id: string;
}

export type TPayment = "Оплата онлайн" | "Оплата при получении";

export type TDeliveryMethod = "Доставка курьером" | "Самовывоз";
export interface IState {
  selectedProducts: ISelectedProduct[];
  discount: number;
  payment: TPayment;
  promo?: string;
  deliveryMethod: TDeliveryMethod;
  priceProducts: number;
  totalPrice: number;
  deliveryPrice: number;
}

export interface IFields {
  phone: string;
  email: string;
  name: string;
  surname: string;
  street: string;
  house: string;
  appartament: string;
  comment: string;
  [key: string]: string;
}

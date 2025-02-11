import { IBasketProduct } from "../../interface/interface";

export interface ISelectedProduct extends IBasketProduct {
  id: string;
}

export type TPayment = "Оплата онлайн" | "Оплата при получении";

export interface IState {
  selectedProducts: ISelectedProduct[];
  discount: number;
  payment: TPayment;
  promo?: string;
  priceProducts: number;
  totalPrice: number;
}

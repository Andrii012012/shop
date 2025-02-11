import { IBasketProduct } from "../../interface/interface";

export interface IAdditionalBasket extends IBasketProduct {
  id: string;
}

export interface IState {
  selectedProducts: IAdditionalBasket[];
}

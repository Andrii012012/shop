import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IBaseOptionsSlice,
  IBaseProduct,
  IBasketProduct,
} from "../../interface/interface";

export interface IInitialBasket extends IBaseOptionsSlice {
  basket: IBasketProduct[];
}

const initialState: IInitialBasket = {
  error: null,
  loading: "idle",
  basket: [],
};

const basket = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProduct: (
      state: IInitialBasket,
      action: PayloadAction<IBasketProduct>
    ) => {
      state.basket.push(action.payload);
    },
    removeSelectedProducts: (
      state: IInitialBasket,
      action: PayloadAction<string[]>
    ) => {
      state.basket = state.basket.filter((item, _) => {
        if (!action.payload.includes(item.id)) return item;
      });
    },
  },
});

export const ReducerBasket = basket.reducer;
export const { addProduct, removeSelectedProducts } = basket.actions;

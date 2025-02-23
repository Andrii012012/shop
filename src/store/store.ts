import { configureStore, Reducer } from "@reduxjs/toolkit";
import { IInitialNews, ReducerNews } from "../features/news/news";
import { TypedUseSelectorHook } from "react-redux";
import {
  IInitialProducts,
  ReducerProducts,
} from "../features/products/products";
import { IInitialBasket, ReducerBasket } from "../features/basket/basket";
import { IInitialUser, ReducerUser } from "../features/user/user";

interface IReducer {
  news: Reducer<IInitialNews>;
  products: Reducer<IInitialProducts>;
  basket: Reducer<IInitialBasket>;
  user: Reducer<IInitialUser>;
}

const reducer: IReducer = {
  news: ReducerNews,
  products: ReducerProducts,
  basket: ReducerBasket,
  user: ReducerUser,
};

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppSelector = TypedUseSelectorHook<RootState>;

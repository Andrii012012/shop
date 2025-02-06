import { configureStore, Reducer } from "@reduxjs/toolkit";
import { IInitialNews, ReducerNews } from "../features/news/news";
import { TypedUseSelectorHook } from "react-redux";
import {
  IInitialProducts,
  ReducerProducts,
} from "../features/products/products";

interface IReducer {
  news: Reducer<IInitialNews>;
  products: Reducer<IInitialProducts>;
}

const reducer: IReducer = {
  news: ReducerNews,
  products: ReducerProducts,
};

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppSelector = TypedUseSelectorHook<RootState>;

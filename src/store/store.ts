import { configureStore, Reducer } from "@reduxjs/toolkit";
import { IInitialNews, ReducerNews } from "../features/news/news";
import { TypedUseSelectorHook } from "react-redux";

interface IReducer {
  news: Reducer<IInitialNews>;
}

const reducer: IReducer = {
  news: ReducerNews,
};

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppSelector = TypedUseSelectorHook<RootState>;

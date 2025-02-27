import { createSelector } from "@reduxjs/toolkit";
import { ISectionNews } from "../../interface/interface";
import { RootState } from "../../store/store";

const stateNews = (state: RootState) => state.news.news;

export const findNewsFilter = (section: string, title: string) => {
  return createSelector(stateNews, (state): ISectionNews | undefined => {
    if (state) {
      return state[section].find((item: ISectionNews, _) => {
        if (item.title.replace("?", "") === title.replace("?", "")) return item;
      });
    }
    return undefined;
  });
};

import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { IPromotion } from "../../interface/interface";

const statePromotion = (state: RootState) => state.promotion.promotion;

export const findPromotion = (title: string) => {
  return createSelector(statePromotion, (state): IPromotion | null => {
    if (Array.isArray(state)) {
      return state.find((item: IPromotion, _) => {
        if (item.title === title) return item;
      });
    }
    return null;
  });
};

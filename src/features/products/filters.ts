import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { TSeasons } from "../../interface/interface";

const products = (state: RootState) => state.products.products;

export const seasonProductsFilter = (season: TSeasons) => {
  return createSelector(products, (state) => {
    return state.filter((item) => item.season === season);
  });
};

export const hitProductsFilter = (hitProduct: number) => {
  return createSelector(products, (state) => {
    return state.filter((item) => item.hitProduct >= hitProduct);
  });
};

export const discountProductsFilter = () => {
  return createSelector(products, (state) => {
    return state.filter((item) => item.discount);
  });
};

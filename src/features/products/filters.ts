import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import {
  IBaseProduct,
  IProductStock,
  TSeasons,
} from "../../interface/interface";
import { ISettings } from "../../pages/Shop/types/type";

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

function checkReleaseName(item: any, releaseNames: string[]): boolean {
  for (let index = 0; index < item.length; index++) {
    if (releaseNames.includes(item[index].name)) {
      return true;
    }
  }
  return false;
}

export const shopProductsFilter = (settings: ISettings) => {
  return createSelector(products, (state) => {
    let products: IBaseProduct[] = [];

    products = state.filter((item) => {
      if (
        (!settings.manufacturer.length ||
          settings.manufacturer.includes(item.manufacturer)) &&
        (!settings.countryOrigin.length ||
          settings.countryOrigin.includes(item.countryOrigin)) &&
        (!settings.isRecipe.length ||
          settings.isRecipe.includes(String(item.isRecipe))) &&
        (!settings.releaseForm.length ||
          checkReleaseName(item.release, settings.releaseForm)) &&
        settings.price[0] <= item.price &&
        settings.price[1] >= item.price
      ) {
        return item;
      }
    });

    if (settings.sort === "Цена по убыванию") {
      products.sort((a, b) => b.price - a.price);
    } else if (settings.sort === "Цена по возрастанию") {
      products.sort((a, b) => a.price - b.price);
    } else if (settings.sort === "По названию") {
      products.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    }

    if (settings.sortAlphabet) {
      products.sort((a, _) => {
        if (
          a.name.toLocaleLowerCase() > settings.sortAlphabet.toLocaleLowerCase()
        ) {
          return -1;
        } else {
          return 0;
        }
      });
    }

    return products;
  });
};

export const searchProductFilter = (name: string) =>
  createSelector(products, (state) => {
    if (name === "") {
      return [];
    } else {
      return state.filter((item, _) => {
        if (item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())) {
          return item;
        }
      });
    }
  });

export const findProductWithPromotionFilter = (promotion: string) =>
  createSelector(products, (state) => {
    return state.filter((item, _) => {
      if (item.promotion === promotion) {
        return item;
      }
    });
  });

export const findProductById = (id: number) =>
  createSelector(products, (state) => {
    return state.find((item, _) => {
      if (item.id === id) {
        return item;
      }
    });
  });

export function checkProductStock(
  product: IBaseProduct,
  productStock: IProductStock[] | null | {}
): IProductStock | undefined {
  if (Array.isArray(productStock)) {
    return productStock.find((item: IProductStock, _) => {
      if (item.name === product.name) {
        return item;
      }
    });
  }
}

import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { IOrder } from "../../interface/interface";
import { TSwitch } from "../../pages/Account/components/Order/type";

const stateOrder = (state: RootState) => state.user.user?.orders;

export const filterOrder = (valueSwitch: TSwitch) => {
  return createSelector(stateOrder, (state): IOrder[] | [] => {

    const products = state?.filter((item, _) => {
      if (
        (valueSwitch === "Новые" && item.state === "Новый") ||
        (valueSwitch === "Все" && item.state) ||
        (valueSwitch === "Текущие" && item.state === "В обработке") ||
        (valueSwitch === "Выполненные" && item.state === "Доставлен")
      ) {
        return item;
      }
    });
    return products?.length ? products : [];
  });
};

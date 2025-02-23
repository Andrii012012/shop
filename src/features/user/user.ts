import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interface/interface";

export interface IInitialUser {
  user: IUser | null;
}

const initialState: IInitialUser = {
  user: null,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    LoginUser: (state: IInitialUser, action: PayloadAction<IUser>) => {
      state.user = action.payload as IUser;
    },
    LogoutUser: (state: IInitialUser) => {
      state.user = null;
    },
  },
});

export const ReducerUser = user.reducer;
export const { LoginUser, LogoutUser } = user.actions;

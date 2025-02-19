import { createSlice } from "@reduxjs/toolkit";
import { callLocalStore } from "../../servers/callLocalStore";
import { IUser } from "../../interface/interface";

export interface IInitialUser {
  user: IUser | {};
}

const initialState: IInitialUser = {
  user: callLocalStore("user", {}) || {},
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const ReducerUser = user.reducer;

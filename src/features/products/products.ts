import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBaseOptionsSlice, IBaseProduct } from "../../interface/interface";
import { callServer } from "../utils/callServer";

export interface IInitialProducts extends IBaseOptionsSlice {
  products: IBaseProduct[];
}

const initialState: IInitialProducts = {
  error: null,
  loading: "idle",
  products: [],
};

export const getProductsThunk = createAsyncThunk(
  "products/get",
  async (_, { rejectWithValue }) => {
    return callServer("src/servers/products.json", rejectWithValue);
  }
);

const products = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsThunk.pending, (state: IInitialProducts) => {
        state.loading = "pending";
      })
      .addCase(
        getProductsThunk.fulfilled,
        (state: IInitialProducts, action: PayloadAction<IBaseProduct[]>) => {
          state.loading = "succeeded";
          state.products = action.payload;
        }
      )
      .addCase(getProductsThunk.rejected, (state: IInitialProducts) => {
        state.loading = "failed";
        state.error = "something is wrong...";
      });
  },
});

export const ReducerProducts = products.reducer;

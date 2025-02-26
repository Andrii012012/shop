import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBaseOptionsSlice, IPromotion } from "../../interface/interface";
import { callServer } from "../utils/callServer";

export interface IInitialPromotion extends IBaseOptionsSlice {
  promotion: IPromotion | null;
}

const initialState: IInitialPromotion = {
  promotion: null,
  error: null,
  loading: "idle",
};

export const getPromotionThunk = createAsyncThunk(
  "promotion/get",
  async (_, { rejectWithValue }) => {
    return callServer("src/servers/news.json", rejectWithValue);
  }
);

const promotion = createSlice({
  name: "promotion",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPromotionThunk.pending, (state: IInitialPromotion) => {
      state.loading = "pending";
    });
    builder.addCase(
      getPromotionThunk.fulfilled,
      (state: IInitialPromotion, action: PayloadAction<IPromotion>) => {
        state.loading = "succeeded";
        state.promotion = action.payload;
      }
    );
    builder.addCase(getPromotionThunk.rejected, (state: IInitialPromotion) => {
      state.loading = "failed";
      state.error = "Something is wrong...";
    });
  },
});

export const ReducerPromotion = promotion.reducer;
export const {} = promotion.actions;
